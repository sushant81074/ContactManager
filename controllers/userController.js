const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/userSchema");

const userRegister = asyncHandler(async (req, res) => {
  console.log("userRegister");
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    console.log(userAvailable);
    throw new Error("user already exists / registered");
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    if (newUser) {
      res.status(201).send({ message: "new user created" });
    } else {
      res.status(400);
      throw new Error("invalid fields");
    }
  }
});

const userLogin = asyncHandler(async (req, res) => {
  console.log("userLogin");
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("all fields are mandatory");
  } else {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expireIn: "1m" }
      );
      res.status(200).send({ accessToken });
    } else {
      res.sendStatus(401);
      throw new Error("email or password isn't valid");
    }
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.send({ message: "current user" });
});
module.exports = { userRegister, userLogin, currentUser };
