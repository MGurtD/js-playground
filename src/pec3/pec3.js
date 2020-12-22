import pec2 from './pec2';

const defaultSelectValue = 0;

export async function setMovieHeading(movieId ,titleSelector, infoSelector, directorSelector) {
    let titleText = '';
    let infoText = '';
    let directorText = '';
    
    if(movieId != defaultSelectValue){
        let movieInfo = await pec2.getMovieInfo(movieId);
        
        titleText = movieInfo.name;
        infoText = `Episode ${movieInfo.episodeID} - ${movieInfo.release}`;
        directorText = `Director: ${movieInfo.director}`;
    }

    setHeaderInformation(titleSelector, infoSelector, directorSelector, titleText, infoText, directorText);
}

function setHeaderInformation(titleSelector, infoSelector, directorSelector, titleText, infoText, directorText){
    let titleNode = document.querySelector(titleSelector);
    let infoNode = document.querySelector(infoSelector);
    let directorNode = document.querySelector(directorSelector);

    titleNode.innerHTML = titleText;
    infoNode.innerHTML = infoText;
    directorNode.innerHTML = directorText;
}

export async function initMovieSelect(selector) {
    let selectNode = document.querySelector(selector);

    let movieList = await pec2.listMoviesSorted();
    movieList.unshift({ name: 'Select a Movie', id: 0 });

    movieList.forEach(movie => {
        addOptionToSelect(selectNode, movie.id, movie.name);
    });
}

function addOptionToSelect(selectElement, id, text){
    var option = document.createElement("option");

    option.value = id;
    option.text = text;
    
    selectElement.add(option);
}

export async function setMovieSelectCallbacks(){
    let selectMovies = document.querySelector('#select-movie');
    let selectHomeworlds = document.querySelector('#select-homeworld');

    selectMovies.addEventListener("change", async (event) => {
        setMovieHeading(event.target.value, ".movie__title", ".movie__info", ".movie__director");

        selectHomeworlds.innerHTML = '';
        addOptionToSelect(selectHomeworlds, 0, 'Select a Homeworld');

        if(event.target.value != defaultSelectValue){
            let movieInfo = await pec2.getMovieCharactersAndHomeworlds(event.target.value);
            let homeworlds = removeDuplicates(movieInfo.characters, 'homeworld');
            
            homeworlds.forEach(homeworld => {
                addOptionToSelect(selectHomeworlds, homeworld, homeworld);
            });
        }

        removeListOfCharacters();
    })
}

function removeDuplicates(arrayOfObjects, property){
    return arrayOfObjects
    .map(object => { 
        return object[property] 
    })
    .filter((elem, index, self) => {
        return index === self.indexOf(elem);
    })
    .sort((a, b) => {
        return a.localeCompare(b);
    });
}

function removeListOfCharacters(){
    let ul = document.querySelector('.list__wrapper > ul');
    while(ul.firstChild) ul.removeChild(ul.firstChild);
}

export async function addChangeEventToSelectHomeworld(){
    let selectMovies = document.querySelector('#select-movie');
    let selectHomeworlds = document.querySelector('#select-homeworld');

    selectHomeworlds.addEventListener("change", async (event) => {
        removeListOfCharacters();

        if(selectMovies.value != defaultSelectValue && event.target.value != defaultSelectValue){
            let movieInfo = await pec2.getMovieCharactersAndHomeworlds(selectMovies.value);

            // Filtrar per homeworld
            let list = document.querySelector('.list__wrapper > ul');
            let filteredCharacters = movieInfo.characters.filter(characters => characters.homeworld == event.target.value);
            filteredCharacters.forEach(character => {
                createCharacter(list, character);
            })
        }
    })
}

function createCharacter(listNode, character){
    let listItemNode = document.createElement('li');
    listItemNode.classList.add('list__item');
    listItemNode.classList.add('item');
    listItemNode.classList.add('character');
    listNode.appendChild(listItemNode);

    let characterImageNode = document.createElement('img');
    characterImageNode.classList.add('character__image');
    characterImageNode.src = 'assets/user.svg';
    listItemNode.appendChild(characterImageNode);

    let characterNameNode = document.createElement('h2');
    characterNameNode.classList.add('character__name');
    characterNameNode.innerText = character.name;
    listItemNode.appendChild(characterNameNode);

    let characterBirthNode = document.createElement('div');
    characterBirthNode.classList.add('character__birth');
    characterBirthNode.innerHTML = `<strong>Birth Year:</strong> ${character.birth_year}`;
    listItemNode.appendChild(characterBirthNode);

    let characterEyeColorNode = document.createElement('div');
    characterEyeColorNode.classList.add('character__eye');
    characterEyeColorNode.innerHTML = `<strong>Eye color:</strong> ${character.eye_color}`;
    listItemNode.appendChild(characterEyeColorNode);

    let characterGenderNode = document.createElement('div');
    characterGenderNode.classList.add('character__gender');
    characterGenderNode.innerHTML = `<strong>Gender:</strong> ${character.gender}`;
    listItemNode.appendChild(characterGenderNode);

    let characterHomeworldNode = document.createElement('div');
    characterHomeworldNode.classList.add('character__home');
    characterHomeworldNode.innerHTML = `<strong>Home World:</strong> ${character.homeworld}`;
    listItemNode.appendChild(characterHomeworldNode);
}

export default {
    setMovieHeading,
    initMovieSelect,
    setMovieSelectCallbacks,
    addChangeEventToSelectHomeworld
}