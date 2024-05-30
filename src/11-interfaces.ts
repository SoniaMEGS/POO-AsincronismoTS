//Interfaces en clases
//Las interfaces en clases funcionan como contratos, nos permiten tipar tanto los atributos como los métodos. Aquí no podemos utilizar encapsulamiento, por defecto todos los atributos y métodos son públicos.

//Implements
//Tiene la misma sintaxis cuando aplicamos herencias en las clases, pero implements no es una herencia, es un contrato que nos dice que nuestra clase tiene que cumplir con un estándar que es la interface. Este contrato es tanto como para los parámetros como para los métodos.

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number
  ) {}

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {
    // code
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    return true;
  }
}
