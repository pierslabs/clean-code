(() => {
  // función para obtener información de una película por Id
  function getAllMovies(movieId: string) {
    console.log({ movieId });
  }

  function getMovieId(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getAllMovieActors(id: string) {
    console.log({ id });
  }

  function getActorsMovieById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActor(ActorId: string) {
    console.log({ ActorId });
  }

  function getBioActorById(ActorId: string) {
    console.log({ ActorId });
  }

  // Crear una película
  function movie(title: string, description: string, rating: number, cast: string[]) {
    console.log({ title, description, rating, cast });
  }

  interface IMovie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({ title, description, rating, cast }: IMovie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;
  }

  function checkFullName(fullName: string): boolean {
    console.log(fullName);
    return true;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) return false;

    console.log('Crear actor', birthdate);
    return true;
  }
})();
