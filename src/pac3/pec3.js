import pec2 from './pec2';

export async function setMovieHeading(movieId ,titleSelector, infoSelector, directorSelector) {
     // TODO: Obtenemos los elementos del DOM con QuerySelector y los almacenamos en una variable
    let titleElement = document.querySelector(titleSelector);
    let infoElement = document.querySelector(infoSelector);
    let directorElement = document.querySelector(directorSelector);

    console.log(titleElement, infoElement, directorElement);

     // TODO: Obtenemos la información de la película llamando al método de pec2.js
     let movieInfo = await pec2.getMovieInfo(movieId);

     console.log(movieInfo);
    
     // TODO: Sustituimos los datos utilizando un método de reemplazo como innerHTML
     titleElement.innerHTML = movieInfo.name;
     infoElement.innerHTML = `Episode ${movieInfo.episodeID} - ${movieInfo.release}`;
     directorElement.innerHTML = `Director: ${movieInfo.director}`;
}    