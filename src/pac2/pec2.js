const SWAPI = {
    endpoints : {
        people : `https://www.swapi.tech/api/people/`,
        films :  `https://www.swapi.tech/api/films/`,
        starships :  `https://www.swapi.tech/api/starships/`,
        vehicles :  `https://www.swapi.tech/api/vehicles/`,
        species :  `https://www.swapi.tech/api/species/`,
        planets :  `https://www.swapi.tech/api/planets/`
    },
    call : async function(endpoint) {
      let response = await fetch(endpoint);
      
      if (!response.ok) {
        let message = '';

        if(response.status == 404) {
          message = `Data not found on ${endpoint}`;
        } else {
          message = `An error has occured. HTTP Status Code ${response.status} returned on ${endpoint}`;
        }

        throw new Error(message);
      }
      
      return await response.json();
    },    
    getSingleResult : async function(endpoint){
      let json = await this.call(endpoint);
      
      if(!json.result){
        let message = `An error has occurred on getSingleResult from ${endpoint}`;
        throw new Error(message);
      }

      return json.result;
    },
    getListOfSingleResults : async function(endpoints) {
      let promises = endpoints.map(endpoint => {
        return this.getSingleResult(endpoint);
      })
    
      return await Promise.all(promises);
    },
    getMultipleResults : async function(endpoint){
      let json = await this.call(endpoint);

      if(!json.results){
        let message = `An error has occurred on getMultipleResults from ${endpoint}`;
        throw new Error(message);
      }

      return json.results;
    }
}

async function getMovies() {
  let movies = await SWAPI.getMultipleResults(SWAPI.endpoints.films);
  return movies;
}

/**
 * Exercici 1
 */
async function getMovieCount() {
  let movies = await getMovies();
  return movies.length;
}
 
/**
 * Exercici 2
 */
async function listMovies() {
  let movies = await getMovies();

  return movies.map(movie => (
    {
      "name": movie.properties.title,
      "director": movie.properties.director,
      "release": movie.properties.release_date,
      "episodeID": movie.properties.episode_id
    }
  ));
}

/**
 * Exercici 3
 */
async function listMoviesSorted() {
  let movies = await listMovies();

  return movies.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

/**
 * Exercici 4
 */
async function listEvenMoviesSorted(){
  let movies = await listMovies();
  let evenEpisodeMovies = movies.filter(movie => {return movie.episodeID % 2 == 0});

  return evenEpisodeMovies.sort((a, b) => {
    return a.episodeID - b.episodeID;
  });
}

/**
 * Exercici 5.1
 */
async function getMovieInfo(id){
  let movie = await SWAPI.getSingleResult(`${SWAPI.endpoints.films}${id}`);
  return {
    "name": movie.properties.title,
    "episodeID" : movie.properties.episode_id,
    "characters": movie.properties.characters
  };
}

/** Exercici 5.2 */
async function getCharacterName(url){
  let character = await SWAPI.getSingleResult(url);
  return character.properties.name;
}

/** Exercici 5.3 */
async function getMovieCharacters(id){
  let movie = await getMovieInfo(id);

  let characters = await SWAPI.getListOfSingleResults(movie.characters);
  movie.characters = characters.map(character => {
    return character.properties.name
  });

  return movie;
}

/* Exercici 6 */
async function getMovieCharactersAndHomeworlds(id){
  let movie = await getMovieInfo(id);
  let characters = await SWAPI.getListOfSingleResults(movie.characters);

  let homeworldPromises = characters.map(character => {
    return SWAPI.getSingleResult(character.properties.homeworld);
  })
  let homeworlds = await Promise.all(homeworldPromises);  
  
  for (let i = 0; i < movie.characters.length; i++) {
    movie.characters[i] = { 'name': characters[i].properties.name, 'homeworld': homeworlds[i].properties.name};    
  }

  return movie;
}

/** Exercici 7 */
export class Movie {

  constructor(name, characters){
    if(typeof name !== "string"){
      throw new Error('The type of property name of class Movie must be string');
    }

    if(!Array.isArray(characters)){
      throw new Error('The type of property characters of class Movie must be an array');
    }

    this.name = name;
    this.characters = characters;
  }

  async getCharacters() {
    let charactersInfo = await SWAPI.getListOfSingleResults(this.characters);
    return charactersInfo.map(characterInfo => {
      return characterInfo.properties.name
    })    
  }

  async getHomeworlds() {    
    let charactersInfo = await SWAPI.getListOfSingleResults(this.characters);
    let homeworldEndpoints = charactersInfo.map(characterInfo => {
      return characterInfo.properties.homeworld
    }) 

    let homeworlds = await SWAPI.getListOfSingleResults(homeworldEndpoints);
    return homeworlds
      .map(characterInfo => {
        return characterInfo.properties.name
      })
      .filter((elem, index, self) => {
        return index === self.indexOf(elem);
      });
  }

  async getHomeworldsReverse() {
    let homeworlds = await this.getHomeworlds();
    
    return homeworlds.sort((a, b) => {
      return b.localeCompare(a);
    });
  }  

}

/**
 * Explicació: 
 *  Donat que la funció SWAPI.call realitza un control d'error centralitzat, aquesta funció es limitará a recollir els errors llançats per la primera.
 *  Amb els errors capturats es logeja a la consola un error amb la informació detallada d'aquest i una traça de on s'ha originat.
 *  Si tinguessis una UI, aquest error el podriem enviar renderitzar en una finestra emergent que expliqués l'error d'una manera 'user-frendly'.
 */
async function createMovieExercici8(id) {
  try {
    const movie = await getMovieInfo(id);
    return movie;
  } catch(e){
    console.error(e);
  }
}
 
export default {
  getMovieCount,
  listMovies,
  listMoviesSorted,
  listEvenMoviesSorted,
  getMovieInfo,
  getCharacterName,
  getMovieCharacters,
  getMovieCharactersAndHomeworlds,
  Movie
};  