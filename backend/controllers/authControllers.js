const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const signUp_post = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  res.status(201).json({
    user: user._id,
    email: user.email,
    password: user.password,
    token: generateToken(user._id),
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const login_post = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  res.status(200).json({
    user: user._id,
    email: user.email,
    token: generateToken(user._id),
  });
});

module.exports = { signUp_post, login_post };
