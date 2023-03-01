/**
 * Simplicidad
 * Tamaño reducido
 * Funciones de una sola linea sin causr complejidad
 * Menos de 15 20 lineas
 * Evitar else
 * Priorizar ternarios
 */

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

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  };

  const getPayAmountRefactor = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
