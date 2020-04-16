---
layout: single
title: Recovering iTunes Playlists
date: 2020-04-06 00:48:34 +0800
categories: iTunes
tags: [iTunes, PHP, playlists]
excerpt: Recovering iTunes Playlists after a disasterous move
---

I moved my iTunes Music folder to a new disc, I don't think I did it properly, so all my playlists were empty, the tracks in the exported playlist XML had new IDs and locations.

There might be a way to recover using iTunes, but with a 250GB library, it's a faff moving it around.

So I found myself with an new ‘iTunes Library.xml’ with empty playlists, but with the new track IDs, and an old ‘iTunes Music Library.xml’ with the old track IDs and names.

<img data-src="{% asset_path old-itunes.png %}" class="lazyload blur-up" alt="itunes screenshot"/>
<img data-src="{% asset_path new-itunes.png %}" class="lazyload blur-up" alt="itunes screenshot"/>

What I needed was a way, for each track in each playlist in the old library, to look up the ID in the new library, using the track name and other properties to find the track in the new library, then export a new playlist XML.

I found an [iTunes Library parser](https://github.com/mheap/iTunes-Library-Parser), extended it to load [playlists](https://github.com/jamesstout/iTunes-Library-Parser/blob/71cfc95b2f55ae581ccc9647fd4e0decb0ae438e/iTunesLibrary.php), and  provide a new [function](https://github.com/jamesstout/iTunes-Library-Parser/blob/71cfc95b2f55ae581ccc9647fd4e0decb0ae438e/iTunesLibrary.php#L130-L214) to look up a track, in say a new iTunes library, given the name, artist, album and track time.

```php
public function getIDAndLocation($trackID, $trackName, $totalTime, $artist, $album){

    // error checks
    if($trackName == null){
      echo "track name null\n";
      return array(null, null);
    }

    $match=0;
    $potentialMatch= array();

    foreach ( $this->_tracks as $track ) {
      // match on as much as possible
      if( $track->Name == $trackName &&  
        (is_null($totalTime) == false && $track->Total_Time == $totalTime) &&  
        (is_null($artist) == false && $track->Artist == $artist) &&  
        (is_null($album) == false && $track->Album == $album)
        ){
          return array($track->Track_ID, $track->Location);
      }

      // if no match, construct some potential matches
      $potentialMatch[$trackName]["TotalTime"] = $totalTime;
      $potentialMatch[$trackName]["Artist"] = (is_null($artist) == false ? $artist : "NO ARTIST");
      $potentialMatch[$trackName]["Album"] = (is_null($album) == false ? $album : "NO ALBUM");

      // tmp vars
      $tmpArtist = (isset($track->Artist) == true ? $track->Artist : "NO ARTIST");
      $tmpAlbum = (isset($track->Album) == true ? $track->Album : "NO ALBUM");

      // if track name, total time and artist match, grab the details
      if ($track->Total_Time == $totalTime && $track->Name == $trackName && is_null($artist) == false && $tmpArtist == $artist) {

          $match++;

          $potentialMatch[$trackName]['Match'][$match]["Type"] = "Name_TotalTime";
          $potentialMatch[$trackName]['Match'][$match]["Name"] = $track->Name;
          $potentialMatch[$trackName]['Match'][$match]["Track_ID"] = $track->Track_ID;
          $potentialMatch[$trackName]['Match'][$match]["TotalTime"] = $track->Total_Time;
          $potentialMatch[$trackName]['Match'][$match]["Artist"] = $tmpArtist;
          $potentialMatch[$trackName]['Match'][$match]["Album"] = $tmpAlbum;
          $potentialMatch[$trackName]['Match'][$match]["Location"] = $track->Location;
      }
    }

    if ($match>0) {
      echo "for: [$trackID], [$trackName], [$totalTime], [$artist], [$album]\n";

      $tmpTrackID="";
      $tmpLocation="";
      $tmpAlbum="";

      // choose best
      // we know name, time and artist match
      // choose first with an album?
      // then if there is another match without an album
      // use that
      foreach ($potentialMatch as $key => $value) {
        foreach ($value['Match'] as $k => $v) {

          if($v['Album'] != 'NO ALBUM'){
            $tmpTrackID=$v["Track_ID"];
            $tmpLocation=$v["Location"];
            $tmpAlbum=$v["Album"];
            break;
          }

          if($v['Album'] == 'NO ALBUM'){
            $tmpTrackID=$v["Track_ID"];
            $tmpLocation=$v["Location"];
            $tmpAlbum=$v["Album"];
          }
        }
      }

      echo "match is now: [$tmpTrackID], [$tmpAlbum]\n";
      return array($tmpTrackID, $tmpLocation);
    }

    // could exit or log error here...
    echo "could not match: [$trackName], [$totalTime], [$artist], [$album]\n";
    return array(null, null);
  }
  ```

Next, I wrote a [script](https://git.stouty.xyz/stouty/iTunes-Playlist-Recoverer/src/commit/d502155e38008145a013ca253c990dedba219a86/playlistRecover.php) that loads up the old library file and the playlist info (with stale track IDs), loads the new library file with the new trackIDs. The script loops through each playlist, gets the new trackID for each track in a playlist, then writes the new playlist to an XML file that iTunes can import.

A snippet:

```php
$newiTunesFile = 'iTunes-new.xml';
$oldiTunesFile = 'iTunes-old.xml';

$trackLimit = 5000;

$writeNewPlaylistFile = true;
$outputDir = "newPlaylists";

if ($writeNewPlaylistFile == true) {
    if (!file_exists($outputDir)) {
        mkdir($outputDir);
    }
}

// load up old library, and playlists
$oldLibrary = new iTunesLibrary($oldiTunesFileGZ, true, $trackLimit);

// load up new library, just the tracks
$newLibrary = new iTunesLibrary($newiTunesFileGZ, false);

foreach ($oldLibrary->getPlaylists() as $playlist) {

    $time_start = microtime(true);

    if (count($playlist->tracks)>0 && count($playlist->tracks) < $trackLimit) {

        echo "Playlist Name: $playlist->Name\n";

        $newTrackIDs = array();
        foreach ($playlist->tracks as $trackID => $trackValues) {
            list($id, $location) = $newLibrary->getIDAndLocation($trackID, $trackValues["Name"], $trackValues["Total_Time"], $trackValues["Artist"], $trackValues["Album"]);

            if (is_null($id) == false) {
                $newTrackIDs[]=$id;
            }
            else{
                // echo "OHNO: Could not find new ID for: " . $trackValues["Name"] . "\n";
            }
        }

        // write new xml, need name and trackIds
        if ($writeNewPlaylistFile == true && count($newTrackIDs)>0) {
            outputPlaylistFile($playlist->Name, $newTrackIDs);
        }
    }
}
```

Here's wht it looks like when it runs:

<script id="asciicast-2gzHk9rSm3ETs9yHwc0o9ICWr" src="https://asciinema.org/a/2gzHk9rSm3ETs9yHwc0o9ICWr.js" async data-preload="false"></script>

Your newPlaylist folder will now contain all your playlists, with refreshed trackIDs, ready to import to iTunes, a manual step alas.
