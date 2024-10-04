class Calculadora {
   somar(a: number, b: number): void;
   somar(a: number, b: number, c: number): void;

   somar(a: number, b: number, c?: number): void {
      (typeof c === 'undefined') ? console.log(`Soma ${a+b}`) :  console.log(`Soma ${a+b+c}`)     
   }
}

const calculadora = new Calculadora();

calculadora.somar(1,2);
calculadora.somar(1,2,3);
