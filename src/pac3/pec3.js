import pec2 from './pec2';

export async function setMovieHeading(movieId ,titleSelector, infoSelector, directorSelector) {
    let titleElement = document.querySelector(titleSelector);
    let infoElement = document.querySelector(infoSelector);
    let directorElement = document.querySelector(directorSelector);

    let movieInfo = await pec2.getMovieInfo(movieId);

     titleElement.innerHTML = movieInfo.name;
     infoElement.innerHTML = `Episode ${movieInfo.episodeID} - ${movieInfo.release}`;
     directorElement.innerHTML = `Director: ${movieInfo.director}`;
}

export async function initMovieSelect(selector) {
    let selectElement = document.querySelector(selector);

    let movieList = await pec2.listMoviesSorted();
    movieList.unshift({ name: 'Select a movie', episodeID: null });

    console.log(movieList);

    movieList.forEach(movie => {
        addOptionToSelect(selectElement, movie.episodeID, movie.name);
    });
}

function addOptionToSelect(selectElement, id, text){
    var option = document.createElement("option");

    option.value = id;
    option.text = text;
    
    selectElement.add(option);
}

export default {
    setMovieHeading,
    initMovieSelect
}