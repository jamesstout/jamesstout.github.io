---
layout: single
title: Managing OneSignal Tags
date: 2019-12-10 14:16:59 +0800
categories: unix iOS 
tags: onesignal tagging push notifications php ios
excerpt: "Methods to delete OneSignal tags."
---

I use [OneSignal](https://onesignal.com/) to send push notifications to my iOS app [HKWarnings](https://itunes.apple.com/hk/app/hkwarnings/id370901118?mt=8). It's great, fast and has a very active open source community on [GitHub](https://github.com/OneSignal/OneSignal-iOS-SDK), even I've [contributed](https://github.com/OneSignal/OneSignal-iOS-SDK/commit/4c1fb7b899b457fb050c95c24fef7cde1998c1ff).

Anyway, it's been free for about 5(?) years, but every startup eventually needs to make money, so they recently [announced paid plans](https://onesignal.com/blog/sustainably-growing-the-onesignal-community/) with these limits:

* Up to 6 Segments: OneSignal’s Free tier will support up to 6 Segments for users with more than 30,000 subscribers.
* OneSignal’s Free tier will support up to 3 Automated Messages for users with more than 30,000 subscribers.
* OneSignal’s Free tier will support up to 10 Data Tags per device. This limitation applies to all Free users, regardless of subscriber count.

It's the last limit that affects me and HKWarnings. I use tags to exclude certain devices when sending certain push notifications[^fn-optout]. I also tagged other info, so I quite easily had more than 10 tags.

Hmmm, more than 35,000 subscribers, with all sorts of tags I don't need, but a few I need.

Let's check how much it would [cost](https://onesignal.com/pricing):

<img data-src="{% asset_path onesig_pricing.png %}" class="lazyload blur-up" alt="onesig_pricing"/>

Hmmm, $114 a month. A bit too much for my free app.

So I needed to remove tags. There are a couple of ways.

### From within the app
Using [deleteTags](https://documentation.onesignal.com/docs/ios-native-sdk#section--deletetags-) from the iOS SDK:

````objective_c
[OneSignal deleteTags:@[@"key1", @"key2"]];
````
However, this would rely on everyone upgrading and running the app.

### Via the REST API
With a PUT call to the [device endpoint](https://documentation.onesignal.com/reference#edit-device):

````bash
curl --include \
     --request PUT \
     --header "Content-Type: application/json" \
     --data-binary "{\"app_id\" : \"APP_ID\",
    \"tags\":{\"a\":\"\",\"foo\":\"\"}}" \
     https://onesignal.com/api/v1/players/PLAYER_ID
````

> warning "TIP"
> To delete a tag, include its key and set its value to blank. Omitting a key/value will not delete it.

This requires all the devices and tags. You can use the [API](https://documentation.onesignal.com/reference#section-example-code-csv-export), or export from the Audience view to get a CSV file with all the devices.

I used this PHP script to parse the CSV, delete tags I didn't want, and keep those I wanted to keep.

````php
<?php

$app_id = "xxxxxxxxxxxxxxxxxxxxxxxx";

$onesig = null;

if (($handle = fopen("onesignal_users.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 0, ",")) !== FALSE) {
        $num = count($data);

        // no tags = "{}", so skip them
        if (strlen($data[1])>2) {
            $onesig[$data[0]] = json_decode($data[1], true);
        }
    }

    fclose($handle);
}

// print_r($onesig);

$fields = array( 
    'app_id' => $app_id , 
    'tags' => array(
             'locale' => '',
            'device' => '',
            'apnsEnv' => '',
	        'isChinese' => '',
	        'appVersion' => '',
	        'systemLang' => '',
	        'kPushEnabled' => '',
	        'systemVersion' => '',
	        'kMigratedToOneSignalWithDefaultPlist' => '',
	        'kMigratedToOneSignal' => '',
	        'isRemoveAdsPurchased' => '',
	        'oneSignalSDKVersion' => '',
	        'deviceToken' => '',
	        'is_test' => '',
	        '1' => '',
	        '2' => '',
	        '3' => '',
	        '4' => '',
	        '5' => '',
	        '6' => '',
	        '7' => '',
	        '8' => '',
	        '9' => '',
	        '10' => '',
	        '11' => '',
	        '12' => '',
	        '13' => '',
	        '14' => '',
	        '15' => '',
	        '16' => '',
	        '17' => '',
	        '18' => '',
	        '19' => '',
	        '20' => '',
	        '21' => ''
        )
    );

// take a copy to mut
$mutFields = $fields;
$maxNO = 0;
$cc = 0;

foreach ($array_keys as $array_key) {
    $count = 0;
    $cc++;
    $mutFields = $fields; // new id so reset to default fields

    // if a tag 1-22 exists and is set to NO, keep it by updating mutFields
    for($i=1; $i < 22; $i++){
        if(isset($onesig[$array_key][$i])){
            if($onesig[$array_key][$i] == "NO"){
                $mutFields['tags']["$i"] = 'NO';
                $count++;
            }
        }
    }

    // just an FYI for me
    if($count > $maxNO){
        $maxNO = $count;
    }

    $mutFields = json_encode($mutFields);

	// send to OneSignal
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://onesignal.com/api/v1/players/'.$array_key);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $mutFields);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
    curl_close($ch);
    
    $resultData = json_decode($response, true); // could check for errors...
    echo "id: $array_key\n";
    echo "count: $cc \n";
    // print_r($resultData);  
}

echo "max: $maxNO \n";
````
For 35,000+ devices, it took around 4 hours, but now my devices have less than 10 tags.

[^fn-optout]: There are 21 possible warnings issued by the HKO, people can opt out of certain warnings. If they do, I set a tag on the device in OneSignal.

***
