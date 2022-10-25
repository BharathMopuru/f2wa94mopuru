var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
   // Build a fake url so we can get the search parameters using a URL object
   fake_url = "https://fake.com/path" + req.url
   const url = new URL(fake_url)
   const search_params = url.searchParams
  var num = Math.floor((Math.random() * 500))
  if(search_params.get("x")){
    num = search_params.get("x")
  }

  //result = Math.hypot(num)
  //result1 = Math.ceil(num)
  ressult2 = Math.clz32(num)
  //res.send(`Math.hypot() applied to ${num} is ${result}`)
  //res.send(`Math.ceil() applied to ${num} is ${result1}`)
  res.send(`MAth.clz32() applied to ${num} is ${ressult2}`)
});

module.exports = router;
