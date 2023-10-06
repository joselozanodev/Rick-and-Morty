const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { id, email, password } = req.body;
    if (email && password) {
      const newUser = await User.findOrCreate( {where:{
        id: id,
        email: email,
        password: password,
      }});
      return res.status(200).json(newUser);
    }
    return res.status(400).send("Faltan datos");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
};

module.exports = postUser;
