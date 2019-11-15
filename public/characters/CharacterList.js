import Component from '../Component.js';
import CharacterItem from './CharacterItem.js';

class CharacterList extends Component {

    onRender(dom) {
        const characters = this.props.characters;

        characters.forEach(character => {
            const props = {
                character: character,
                removeUnFavorites: this.props.removeUnFavorites
            };

            console.log(this.props.removeUnFavorites);
            const characterItem = new CharacterItem(props);
            const characterItemDOM = characterItem.renderDOM();
            dom.appendChild(characterItemDOM);
        });

    }

    renderHTML() {

        return /*html*/`
            <ul class="character"></ul>
        `;
    }
}

export default CharacterList;
