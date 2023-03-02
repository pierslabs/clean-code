interface IAnimal {
  // fly(): void;
  eat(): void;
  run(): void;
  // swim(): void;
}

interface IAnimalFly {
  fly(): void;
}

interface IAnimalSwim {
  swim(): void;
}

class Colibri implements IAnimal, IAnimalFly, IAnimalSwim {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Cat implements IAnimal {
  public eat() {}
  public run() {}
}
class Dog implements IAnimal {
  public eat() {}
  public run() {}
}
class Penguin implements IAnimalSwim, IAnimalSwim {
  public eat() {}
  public run() {}
  public swim() {}
}

export { Colibri, Cat, Dog, Penguin };
