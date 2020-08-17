'use strict'

export function printTweets(tweetObjs) {
    if(tweetObjs.length == 0) {
        console.log("No tweets found");
    }

    for(let tweet of tweetObjs) {
        let time = new Date(tweet.timestamp); 
        console.log('- "' + tweet.text + '" (' + time.toLocaleString("en-US") + ')');
    }
}