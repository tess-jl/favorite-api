const request = require('superagent');
const stringHash = require('string-hash');

const URL = 'https://rickandmortyapi.com/api/character';

module.exports = {
    async get(search, page) {
        page = page || 1;
        search = search || '';

        const response = await request
            .get(URL)
            .query({ page, search });

        return response.body.results.map(generateIdForCharacter);
    }
};

function generateIdForCharacter(character) {
    character.isFavorite = false;
    // This API does not give proper id's :(
    // So we make one based on hashing the character
    character.id = stringHash(character.name);
    return character;
}
