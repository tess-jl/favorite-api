import Component from '../Component.js';
import Header from '../common/Header.js';
import CharacterList from '../characters/CharacterList.js';
import { getFavorites } from '../services/characters-api.js';

class FindCharactersApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const listSection = dom.querySelector('.list-section');

        const characterList = new CharacterList({ characters: [], removeUnFavorites: true });
        listSection.appendChild(characterList.renderDOM());

        getFavorites()
            .then(characters => {
                characterList.update({ characters: characters });
            });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                
                <main> 
                    <section class="list-section">
                        <!-- paging goes here -->
                        <!-- character list goes here -->        
                    </section>
                </main>
            </div>
        `;
    }
}

export default FindCharactersApp;