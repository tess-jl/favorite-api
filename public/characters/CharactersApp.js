import Component from '../Component.js';
import Header from '../common/Header.js';
import CharacterList from './CharacterList.js';
import Search from './Search.js';
import Paging from './Paging.js';
import { getCharacters } from '../services/character-api.js';

class CharactersApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const search = new Search();
        optionsSection.appendChild(search.renderDOM());
        const paging = new Paging();
        optionsSection.appendChild(paging.renderDOM());

        const listSection = dom.querySelector('.list-section');


        const characterList = new CharacterList({ characters: [] });
        listSection.appendChild(characterList.renderDOM());

        const loadCharacters = async () => {
            try {
                const characters = await getCharacters();

                characterList.update({ characters: characters });

                paging.update({
                    // This API does not give total results :(
                    // totalResult: ?
                });
            }
            catch (err) {
                console.log(err);
            }
        };

        loadCharacters();
        window.addEventListener('hashchange', () => {
            loadCharacters();
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                
                    <section class="options-section">
                        <!-- options go here -->
                    </section>
                        
                    <section class="list-section">
                        <!-- paging goes here -->
                        <!-- character list goes here -->        
                    </section>
                </main>
            </div>
        `;
    }
}

export default CharactersApp;