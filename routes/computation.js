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

  result = Math.hypot(num)
  result1 = Math.ceil(num)
  result2 = Math.clz32(num)
  res.render(`computation`,{title:"computation",num:num,result:result,result2:result2}) 
  //res.render(`Math.hypot() applied to ${num} is ${result}`)
  //res.render(`Math.ceil() applied to ${num} is ${result1}`)
  //res.render(`MAth.clz32() applied to ${num} is ${ressult2}`)
});

module.exports = router;
