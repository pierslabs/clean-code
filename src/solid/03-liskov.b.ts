// export class Tesla {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfTeslaSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Audi {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfAudiSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Toyota {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfToyotaSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Honda {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfHondaSeats() {
//     return this.numberOfSeats;
//   }
// }

// resolved

export abstract class Vehicle {
  abstract getNumbersOfSeats(): number;
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumbersOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumbersOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumbersOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumbersOfSeats() {
    return this.numberOfSeats;
  }
}
