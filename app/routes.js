var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router


// Admin routing v1 & 2 

router.post('/admin/1/settings', function (req, res) {
  // get the answer from the query string 
  var fixedFee = req.body.fixedFee
	console.log(fixedFee);
  if (fixedFee === 'false') {
    // redirect to the relevant page
    res.redirect('content')
  } else {
    // if fixedFee is any other value (or is missing) render the page requested
    res.redirect('items')
  }
})