var express = require('express');
var router = express.Router();

/* GET singers listing. */
router.get('/', function(req, res, next) {

  res.json([{
    "key": "the-weeknd",
    "name": "The Weeknd",
    "imagePath": "http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)",
    "description": "Feat. August Alsina, Jeremih and more"
    }, {
      "key": "selena-gomez",
      "name": "Selena Gomez",
      "imagePath": "http://iscale.iheart.com/catalog/artist/57706?ops=fit(250,0)",
      "description": "Feat. Ariana Grande, Demi Lovato and more"
    }, {
      "key": "r-city",
      "name": "R. City",
      "imagePath": "http://iscale.iheart.com/catalog/artist/30005067?ops=fit(250,0)",
      "description": "Feat. Nelly, Iyaz, Wiz Khalifa and more"
    }, {
      "key": "justin-bieber",
      "name": "Justin Bieber",
      "imagePath": "http://iscale.iheart.com/catalog/artist/44368?ops=fit(250,0)",
      "description": "Feat. Shawn Mendes, One Direction and more"
    }, {
      "key": "major-lazer",
      "name": "Major Lazer",
      "imagePath": "http://iscale.iheart.com/catalog/artist/43557?ops=fit(250,0)",
      "description": "Feat. Iyaz, Dillon Francis & DJ Snake and more"
    }, {
      "key": "taylor-swift",
      "name": "Taylor Swift",
      "imagePath": "http://iscale.iheart.com/catalog/artist/33221?ops=fit(250,0)",
      "description": "Feat. Meghan Trainor, Katy Perry and more"
    }
  ]);
});

module.exports = router;
