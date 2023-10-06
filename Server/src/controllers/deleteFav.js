const {Favorite} = require("../DB_connection");

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        await Favorite.destroy({
            where: {
                id: id,
            },
        });
        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server Error");
    }
}

module.exports = deleteFav;