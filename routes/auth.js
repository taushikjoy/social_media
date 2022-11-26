const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('welcome to the author router');
});

module.exports = router;
