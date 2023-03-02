// exec --> node  ./src/code\ -smells/01-singleton.js
// Dificil de testear y no hay forma controlada de identificar de dinde vienen los cambios

/**
 * Evitar alto acomplamiento y alta cohesion
 * Diseñar componentes que sean
 * - auto-contenidos
 * - auto-suficientes
 * - independientes
 *
 * Lo  ideal bajo acoplamiento y buena cohesion
 * cohesion lo que el modulo o la clase puede hacer
 * acoplamiento realcion con otras clases o modulos
 *
 */

export const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function main() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('Misma instancia? ', instance1 === instance2);
}

main();
