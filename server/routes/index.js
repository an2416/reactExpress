const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.json({username:'khan~~~'});
});

router.get('/id', function(req, res) {
  res.json({username:'hoho'});
});

module.exports = router;
