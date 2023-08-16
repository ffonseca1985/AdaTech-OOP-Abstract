"use strict";
class Forma {
    constructor(name) {
        this.name = name;
    }
}
class Triangulo extends Forma {
    constructor(name, base, altura) {
        super(name);
        this.base = base;
        this.altura = altura;
    }
    calculaArea() {
        return this.base * this.altura;
    }
}
class Quandrado extends Forma {
    constructor(name, base) {
        super(name);
        this.base = base;
    }
    calculaArea() {
        return this.base * this.base;
    }
}
class Calculadora {
    constructor() {
        this.formas = [];
    }
    calcularForma(formas) {
        formas.forEach(f => console.log(f.calculaArea()));
    }
}
let quadrado = new Quandrado("quadrado", 234);
let triangulo = new Triangulo("triangulo", 12, 23);
let calc = new Calculadora();
calc.calcularForma([quadrado, triangulo]);
