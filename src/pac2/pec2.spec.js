import pec2, { Movie } from './pec2';

global.fetch = require('node-fetch');

describe('Testing PAC2 - SWAPI implementation', () => {
    
    test('number of available films are 6', async () => {
        let movieCount = await pec2.getMovieCount();
        expect(movieCount).toBe(6);
    })

    test('the list of movies are an array of Film objects', async () => {
        let movies = await pec2.listMovies();

        let expectedReturn = [
            {
                "name": 'A New Hope',
                "director": 'George Lucas',
                "release": '1977-05-25',
                "episodeID": 4
            },
            {
                "name": 'The Empire Strikes Back',
                "director": 'Irvin Kershner',
                "release": '1980-05-17',
                "episodeID": 5
            },
            {
                "name": 'Return of the Jedi',
                "director": 'Richard Marquand',
                "release": '1983-05-25',
                "episodeID": 6
            },
            {
                "name": 'The Phantom Menace',
                "director": 'George Lucas',
                "release": '1999-05-19',
                "episodeID": 1
            },
            {
                "name": 'Attack of the Clones',
                "director": 'George Lucas',
                "release": '2002-05-16',
                "episodeID": 2
            },            
            {
                "name": 'Revenge of the Sith',
                "director": 'George Lucas',
                "release": '2005-05-19',
                "episodeID": 3
            }
        ];

        expect(movies).toStrictEqual(expectedReturn);
    })

    test('the list of movies are an array of Film objects ordered by film name', async () => {
        let movies = await pec2.listMoviesSorted();

        let expectedReturn = [
            {
                "name": 'A New Hope',
                "director": 'George Lucas',
                "release": '1977-05-25',
                "episodeID": 4
            },
            {
                "name": 'Attack of the Clones',
                "director": 'George Lucas',
                "release": '2002-05-16',
                "episodeID": 2
            },
            {
                "name": 'Return of the Jedi',
                "director": 'Richard Marquand',
                "release": '1983-05-25',
                "episodeID": 6
            },
            {
                "name": 'Revenge of the Sith',
                "director": 'George Lucas',
                "release": '2005-05-19',
                "episodeID": 3
            },
            {
                "name": 'The Empire Strikes Back',
                "director": 'Irvin Kershner',
                "release": '1980-05-17',
                "episodeID": 5
            },
            {
                "name": 'The Phantom Menace',
                "director": 'George Lucas',
                "release": '1999-05-19',
                "episodeID": 1
            }
        ]

        expect(movies).toStrictEqual(expectedReturn);
    })

    test('the list of movies from even episodes are an array of Film objects ordered by episodeID', async () => {
        let movies = await pec2.listEvenMoviesSorted();

        let expectedReturn = [
            {
                "name": 'Attack of the Clones',
                "director": 'George Lucas',
                "release": '2002-05-16',
                "episodeID": 2
            },
            {
                "name": 'A New Hope',
                "director": 'George Lucas',
                "release": '1977-05-25',
                "episodeID": 4
            },            
            {
                "name": 'Return of the Jedi',
                "director": 'Richard Marquand',
                "release": '1983-05-25',
                "episodeID": 6
            }
        ];

        expect(movies).toStrictEqual(expectedReturn);
    })

    test('getMovieInfo returns a promise that is resolved with an object that contains "name:string", "episodeID:number", "characters:array" ', async () => {
        let movie = await pec2.getMovieInfo(1);

        let expectedReturn = {
            name: 'A New Hope',
            episodeID: 4,
            "characters": [
                "https://www.swapi.tech/api/people/1",
                "https://www.swapi.tech/api/people/2",
                "https://www.swapi.tech/api/people/3",
                "https://www.swapi.tech/api/people/4",
                "https://www.swapi.tech/api/people/5",
                "https://www.swapi.tech/api/people/6",
                "https://www.swapi.tech/api/people/7",
                "https://www.swapi.tech/api/people/8",
                "https://www.swapi.tech/api/people/9",
                "https://www.swapi.tech/api/people/10",
                "https://www.swapi.tech/api/people/12",
                "https://www.swapi.tech/api/people/13",
                "https://www.swapi.tech/api/people/14",
                "https://www.swapi.tech/api/people/15",
                "https://www.swapi.tech/api/people/16",
                "https://www.swapi.tech/api/people/18",
                "https://www.swapi.tech/api/people/19",
                "https://www.swapi.tech/api/people/81"
              ]
          }

        expect(movie).toStrictEqual(expectedReturn);
    })

    test('getCharacterName returns a promise that is resolved with the name of the given character URL', async () => {
        let movie = await pec2.getCharacterName("https://www.swapi.tech/api/people/1");

        expect(movie).toBe("Luke Skywalker");
    })
    
    test('getMovieCharacters', async () => {
        let movie = await pec2.getMovieCharacters(1);

        expect(movie).toStrictEqual({
            "characters": [
                "Luke Skywalker",
                "C-3PO",
                "R2-D2",
                "Darth Vader",
                "Leia Organa",
                "Owen Lars",
                "Beru Whitesun lars",
                "R5-D4",
                "Biggs Darklighter",
                "Obi-Wan Kenobi",
                "Wilhuff Tarkin",
                "Chewbacca",
                "Han Solo",
                "Greedo",
                "Jabba Desilijic Tiure",
                "Wedge Antilles",
                "Jek Tono Porkins",
                "Raymus Antilles"
            ],
            "episodeID": 4,
            "name": "A New Hope"
        });
    })

    test('Movie class structure', () => {
        let movie = new Movie('A New Hope', ['', '']);

        expect('name' in movie).toBe(true);
        expect('characters' in movie).toBe(true);
        expect('getCharacters' in movie).toBe(true);
        expect('getHomeworlds' in movie).toBe(true);
        expect('getHomeworldsReverse' in movie).toBe(true);

        expect(() => { new Movie(undefined, ['', '']) } ).toThrow();
        expect(() => { new Movie('A New Hope', undefined) } ).toThrow();
    })

    test('The Movie getCharacters function', async () => {
        let movieInfo = await pec2.getMovieInfo(1);

        let movie = new Movie(movieInfo.name, movieInfo.characters);
        let characters = await movie.getCharacters();

        expect(characters).toStrictEqual([
            "Luke Skywalker",
            "C-3PO",
            "R2-D2",
            "Darth Vader",
            "Leia Organa",
            "Owen Lars",
            "Beru Whitesun lars",
            "R5-D4",
            "Biggs Darklighter",
            "Obi-Wan Kenobi",
            "Wilhuff Tarkin",
            "Chewbacca",
            "Han Solo",
            "Greedo",
            "Jabba Desilijic Tiure",
            "Wedge Antilles",
            "Jek Tono Porkins",
            "Raymus Antilles",
        ]);
    })

    test('The Movie getHomeworlds function', async () => {
        let movieInfo = await pec2.getMovieInfo(1);

        let movie = new Movie(movieInfo.name, movieInfo.characters);
        let homeworlds = await movie.getHomeworlds();

        expect(homeworlds).toStrictEqual([
               "Tatooine",
               "Naboo",
               "Alderaan",
               "Stewjon",
               "Eriadu",
               "Kashyyyk",
               "Corellia",
               "Rodia",
               "Nal Hutta",
               "Bestine IV",
        ]);
    })

    test('The Movie getHomeworldsReverse function', async () => {
        let movieInfo = await pec2.getMovieInfo(1);

        let movie = new Movie(movieInfo.name, movieInfo.characters);
        let homeworlds = await movie.getHomeworldsReverse();
        expect(homeworlds).toStrictEqual([
            'Tatooine',   
            'Stewjon',
            'Rodia',      
            'Nal Hutta',
            'Naboo',      
            'Kashyyyk',
            'Eriadu',     
            'Corellia',
            'Bestine IV', 
            'Alderaan'
        ]);
    })

})