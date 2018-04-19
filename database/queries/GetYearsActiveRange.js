const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
    const minQuery = Artist
     .find({})                      //return array
     .sort({ yearsActive: 1 })               //acending sort
     .limit(1)                      // get first on
        .then(artists => artists[0].yearsActive) //still array

    const maxQuery = Artist
        .find({})                      //return array
        .sort({ yearsActive: -1 })               //decending sort
        .limit(1)                      // get first on
        .then(artists => artists[0].yearsActive) //still array

    return Promise.all([minQuery, maxQuery])
        .then((result) => {
            return{ min: result[0], max: result[1] }
        })
};
