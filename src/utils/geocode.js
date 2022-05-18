const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1Ijoic2hhZG93NW9nIiwiYSI6ImNsMno1czU1ODAxNHMzaXM0aDhqNWliZ3gifQ.diLiJmogcXh7qQvgsD9c3Q&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find the location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
