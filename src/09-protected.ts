//¿Qué es protected? es la forma de heredar propiedades y métodos. Protected es un modificador de acceso que permite que los atributos y métodos de la clase sean accesibles desde la misma clase y desde las clases que heredan de esta.

export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    // code
    console.log('moving as a dog');
    super.move();
  }
}

const cheis = new Dog('cheis', 'nico');
// cheis.name = 'otro nombre';
cheis.woof(1);
// cheis.doSomething();
cheis.move();
