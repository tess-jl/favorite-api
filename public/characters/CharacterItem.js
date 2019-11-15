import Component from '../Component.js';
import { makeFavorite, unFavorite } from '../services/characters-api.js';

class CharacterItem extends Component {

    onRender(li) {
        const character = this.props.character;
        const removeUnFavorites = this.props.removeUnFavorites;
        const favoriteButton = li.querySelector('.favorite-star');
        favoriteButton.addEventListener('click', () => {
            character.isFavorite = !character.isFavorite;
            if (character.isFavorite) {
                makeFavorite(character);
            }
            else {
                unFavorite(character.id);
                setTimeout(() => {
                    if (removeUnFavorites) {
                        li.classList.add('fade');
                        this.rootElement.remove();
                    }
                }, 300);
            }
            favoriteButton.classList.toggle('is-favorite');
        });
    }

    renderHTML() {
        const character = this.props.character;
        const starClass = character.isFavorite ? 'is-favorite' : '';

        return /*html*/`
            <li class="character-item">
                <h2>
                    <img src="${character.image}">
                    <span class="character-name">${character.name}</span>
                    <button class="favorite-star ${starClass}">★</button>
                </h2>
                
                <character>
                    ${character.character}
                </character>

            </li>
        `;
    }
}

export default CharacterItem;