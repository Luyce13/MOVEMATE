const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

/**
 *
 * @param {import('express').request} req
 * @param {import('express').response } res
 * @param {import('express').NextFunction } next
 */
const protect = asyncHandler(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        res.status(401);
        throw new Error("Not Authorized, User not found");
      }
      req.user = user;
      next();
    } else {
      res.status(401);
      throw new Error("Not Authorized, No Token");
    }
  } catch (error) {
    console.log(error.message);
    res.status(401);
    throw new Error(error.message);
  }
});

module.exports = { protect };
