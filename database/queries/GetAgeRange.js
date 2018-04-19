const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
    const minQuery = Artist
        .find({})                      //return array
        .sort({ age: 1 })               //acending sort
        .limit(1)                      // get first on
        .then(artists => artists[0].age) //still array

    const maxQuery = Artist
        .find({})                      //return array
        .sort({ age: -1 })               //decending sort
        .limit(1)                      // get first on
        .then(artists => artists[0].age) //still array

    return Promise.all([minQuery, maxQuery])
        .then((result) => {
            return { min: result[0], max: result[1] }
        })
};
