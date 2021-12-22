const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
// const { BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  // const { name, email, password } = req.body;
  // if (!name || !email || !password) {
  //   throw new BadRequestError("Please provide all required fields");
  // }
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const tempUser = { name, email, password: hashedPassword };

  const newUser = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json(newUser);
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ email });
  //   if (user) {
  //     return res.status(400).send({ error: "User already exists" });
  //   }
  //   const newUser = await User.create({ email, password });
  //   const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
  //   res.status(201).send({ token });
};

const login = async (req, res) => {
  res.send("login user");
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ email });
  //   if (!user) {
  //     return res.status(400).send({ error: "User does not exist" });
  //   }
  //   if (!user.authenticate(password)) {
  //     return res.status(400).send({ error: "Invalid password" });
  //   }
  //   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  //   res.send({ token });
};

module.exports = {
  register,
  login,
};
