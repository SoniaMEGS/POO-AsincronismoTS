/*
Tipado y promesas
En el caso de no colocar el tipo de dato de retorno de nuestra función asíncrona, TypeScript supondrá que es una promesa, pero no sabe el tipo de dato que retorna esa promesa.

Podemos tipar a una promesa con genéricos


const variableName = new Promese<dataType>(...);
*/

import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);
  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  const productsv2 = await getProductsAsync();
  console.log(productsv2);
})();
