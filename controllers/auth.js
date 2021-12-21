const register = async (req, res) => {
  res.send("register user");
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
