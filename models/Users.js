const mongoose = require('mongoose');
// const { boolean } = require("webidl-conversions");
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, min: 3, max: 20, unique: true },
    email: { type: String, required: true, max: 50, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: {
      type: String,
      default: '',
    },

    coverPicture: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('users', userSchema);

module.exports = User;
