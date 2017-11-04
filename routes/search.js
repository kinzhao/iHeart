var express = require('express');
var router = express.Router();

var axios = require('axios');

/* GET search listing. */
router.get('/', function(req, res, next) {

    const query = req.baseUrl.replace('/search/', '');
    const temp = [];

    axios.get('https://us.api.iheart.com/api/v1/catalog/searchAll', {
        params: {
            keywords: query
        }
    })
    .then((response) => {
        const trackList = response.data.trackBundles.slice(0, 6);
        trackList.map((track) => {
            if (track) {
                temp.push({
                    key: track.artist.toLowerCase().replace(' ', '-'),
                    imagePath: track.imagePath,
                    description: track.artist
                });
            }
            return temp;
        });
        res.json(temp);
    })
    .catch((error) => console.log(error));

});

module.exports = router;