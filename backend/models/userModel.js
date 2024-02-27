const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Aap sy binti hy k email enter kr dewo🙉"],
    unique: true,
    validate: [isEmail, "O yr si email likho🤧"],
    index: true,
  },
  password: {
    type: String,
    required: [true, "Password k bgeir to kam ni chly ga🙈"],
    minlenth: [8, "Kam az kam 8 character to likho😮‍💨"],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

module.exports = mongoose.model('User', userSchema)
