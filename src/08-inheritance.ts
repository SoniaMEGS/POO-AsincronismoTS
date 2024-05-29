//¿Qué es? Como su palabra lo dice, las propiedades y métodos de una clase son heredadas por otra para evitar la redundancia de código en nuestro proyector.

export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name); //Super: es una palabra reservada para llamar las propiedades y métodos de la clase padre.
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'nico');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);
