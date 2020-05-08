let Twit = require('twit');

// instanciar o usario = auth
let T = new Twit(require('./config'));

// tweet hashtag to listen for
let searchHashtag = { q: "#auxilioemergencial", count: 1, result_type: 'recent' };

function retweet() {
    T.get('search/tweets', searchHashtag, (err, data) => {
        if (err) {
            console.log('Cannot grab latest tweets on hashtag: ', searchHashtag.q);
            return;
        }
        if(data && data.statuses.length > 0) {
            let tweet = data.statuses[0];
            console.log(tweet);
            // Retweets
            T.post("statuses/retweet/" + tweet.id_str, (e, res)=>{
                if(e){
                    console.log('Cannot retweet your tweet!');
                    return;
                }
                if(res){
                    console.log('Sucess, Check you Account for the retweet!')
                }
            });
        } else {
            console.log('No tweets on the hashtag: ', searchHashtag.q)
        }
    });

}

retweet();

setInterval(retweet, 1000); // a cada 1000 é Um segundo (1s)