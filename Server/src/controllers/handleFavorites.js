
let myFavorites = []

const postFav = (req, res)=>{
    myFavorites.push(req.body)// req.boy ={id, name, ...}
    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res)=>{
    const { id } = req.params
    myFavorites = myFavorites.filter(fav => {
        return fav.id !== Number(id)
    })
    return res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}
















