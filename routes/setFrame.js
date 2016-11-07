var express = require('express');
var router = express.Router();

/* set frame */
router.get('/', function(req, res, next) {
  res.io.emit("socketToMe", req.query.frame);
  res.send('OK');
});

module.exports = router;
