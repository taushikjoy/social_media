const router = require('express').Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');

//register user
router.post('/register', async (req, res) => {
  const hashedpassword = await bcrypt.hash(req.body.password, 10);
  try {
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
    });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.json(error);
  }
});

//login

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json('user not found');

    const isVallid = await bcrypt.compare(req.body.password, user.password);

    !isVallid && res.status(400).json('authentication error');

    if (isVallid) {
      res.status(200).json('authentication success');
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
