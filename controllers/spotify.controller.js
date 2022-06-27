const SpotifyWebApi = require("spotify-web-api-node");

// TODO
module.exports.searchArtists = (req, res, next) => {

    SpotifyWebApi.searchArtists(req.query.search)
  .then((data) => {
    console.log("The received data from the API: ", data.body);
    res.render("", { artists: data.body })
  })
  .catch((err) =>
    console.log("The error while searching artists occurred: ", err)
  );
}