const SWAPI = {
    baseURL : 'https://www.swapi.tech/api',
    endpoints : {
        people : '/people/',
        films : '/films/',
        starships : '/starships/',
        vehicles : '/vehicles/',
        species : '/species/',
        planets : '/planets/'
    },
    call : async function(endpoint) {
      let apiEndpoint = `${this.baseURL}${endpoint}`;

      let response = await fetch(apiEndpoint);
      if (!response.ok) {
        let message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      
      return response.json();
    }
}

class Film {

  /**
   * @param {String} name
   * @param {String} director
   * @param {String} release
   * @param {Number} episodeID
   */
  constructor(name, director, release, episodeID){
    this.name = name;
    this.director = director;
    this.release = release;
    this.episodeID = episodeID;
  }
}

async function getMovies() {
  let movies = await SWAPI.call(SWAPI.endpoints.films);
  if(!movies.results && !movies.results.length){
    let message = 'Could not retrive movies';
    throw new Error(message);
  }

  return movies.results;
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
    new Film(movie.properties.title, 
             movie.properties.director,
             movie.properties.release_date,
             movie.properties.episode_id)
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
 * Exercici 5
 */
async function getMovieInfo(id){
  let movie = await SWAPI.call(`${SWAPI.endpoints.films}${id}`);
  return {
    "name": movie.result.properties.title,
    "episodeID" : movie.result.properties.episode_id,
    "characters": movie.result.properties.characters
  };
}

/** Testing zone */
getMovieCount().then(count => {
  console.log(count)
})

listMovies().then(movies =>{
  console.log(movies)
}) 

listMoviesSorted().then(movies => {
  console.log(movies)
})

listEvenMoviesSorted().then(movies => {
  console.log(movies) 
})

getMovieInfo(2).then(movie => {
  console.log(movie)
})


export default {
  getMovieCount,
  listMovies,
  listMoviesSorted,
  listEvenMoviesSorted,
  getMovieInfo
};  