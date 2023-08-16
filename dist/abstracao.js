"use strict";
// classes que heradam de uma classe abstrata só implementam o que estiver como abstract
class Forma {
    constructor(id) {
        this.id = id;
    }
    //as classes filhas nao precisam implementar
    getid() {
        return this.id;
    }
}
class Triangulo extends Forma {
    constructor(id, base, altura) {
        super(id);
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
    //Calcula um conjunto de formas (polimorfismo)
    calcularForma(formas) {
        formas.forEach(f => console.log(`A area do ${f.id} tem ${f.calculaArea()}`));
    }
}
let quadrado = new Quandrado("quadrado-123", 234);
let triangulo = new Triangulo("triangulo-123", 12, 23);
let calc = new Calculadora();
//formas => um conjunto de implementações distintas (polimorfismo)
let formas = [quadrado, triangulo];
//envio um conjunto de implementações distintas para calcular
calc.calcularForma(formas);
