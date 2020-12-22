import pec3 from './pec3/pec3';

pec3.setMovieHeading(1,  ".movie__title", ".movie__info", ".movie__director");
pec3.initMovieSelect("#select-movie");
pec3.setMovieSelectCallbacks();
pec3.addChangeEventToSelectHomeworld();