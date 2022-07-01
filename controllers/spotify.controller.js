// TODO
const spotifyApi = require("../config/spotify.config");

//Module.exports prepara el código que metamos después del "=" para ser aprovechado en otro scope con "require"
module.exports.home = (req, res) => {
    res.render("home") //no indicamos ruta "/views/home" porque al instalar handlebars los archivos .hbs se entiende que van por defecto en la carpeta views
}

module.exports.search = (req, res) => {
    spotifyApi
        .searchArtists(req.query.search)
        .then((data) => {
            //return res.json(data) --> podemos usar para pintar el json resultante en el navegador, corta el flujo del código por hacer return
            //console.log("The received data from the API: ", data.body); --> lo mismo que la línea anterior pero nos lo saca por consola sin cortar el flujo
            res.render("artist-search-results", { artists: data.body.artists.items })
        })
        .catch((err) =>
            console.log("The error while searching artists occurred: ", err)
        );
}

module.exports.albums = (req, res) => {
    spotifyApi
        .getArtistAlbums(req.params.artistId)
        .then((data) => {
            res.render("albums", { albums: data.body.items })
        })
        .catch((err) =>
            console.log("The error while searching artists occurred: ", err)
        );
}

module.exports.tracks = (req, res) => {
    spotifyApi
        .getAlbumTracks(req.params.albumId)
        .then((data) => {

            res.render("tracks", { tracks: data.body.items })
        })
        .catch((err) =>
            console.log("The error while searching artists occurred: ", err)
        );
}
