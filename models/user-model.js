// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     require: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   isAdmin: {
//     type: Boolean,
//     default: false,
//   },
// });
// // define model or the collection name
// const User = new mongoose.model("User", userSchema);

// module.exports = User;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Fixed `require` to `required`
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures unique emails
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false, // Default value for `isAdmin`
  },
});

userSchema.pre("save", async function (next) {
  console.log("Pre method", this);

  const user = this;
  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});
// Compare JWT Token

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// ***Components of a JWt:

// json web token

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// Define the model (collection name)
const User = mongoose.model("User", userSchema);

module.exports = User;
