'use strict';
import allTweets from './uw_ischool_tweets';
const tweetData = allTweets.map((tweetObj) => {
    let mappedData = {
        text: tweetObj.text,
        timestamp: Date.parse(tweetObj.created_at)
    };

    return mappedData;
});

export function getRecentTweets() {
    tweetData.sort((tweet1, tweet2) => {
        return tweet2.timestamp - tweet1.timestamp;
    });

    return tweetData.slice(0,5);
}

export function searchTweets(search) {
    let results = tweetData.filter((tweetObj) => {
        return (tweetObj.text.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    });

    return results;
}
