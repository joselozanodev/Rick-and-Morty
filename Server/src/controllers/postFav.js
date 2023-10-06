const {Favorite} = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, image, origin, status, species, gender } = req.body;
    if (id && name && origin && image && species && status && gender) {
      await Favorite.findOrCreate(req.body);
      const allFavs = await Favorite.findAll();
      return res.status(200).json(allFavs);
    }
    return res.status(401).send("Faltan datos");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

module.exports = postFav;
