const {User} = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const actualUser = await User.findOne({
        where: {
          email: email,
          password: password,
        },
      });
      if (actualUser) {
        if(actualUser.password === password){
          return res.json({ access: true });
        }
        return res.status(403).send("Contraseña incorrecta");
      }
      return res.status(404).send("Usuario no encontrado");
    }
    return res.status(400).send("Faltan datos");
  } catch (error) {
    console.log(error)
    return res.status(500).send("Server Error");
  }
};

module.exports = login;
