
interface Identity {
    id: string;
}

abstract class Forma implements Identity {

    id: string;

    constructor(id: string) {
        this.id = id;
    }

    abstract calculaArea() : number;

    getid() {
        return this.id;
    }
}

class Triangulo extends Forma {
    
    base: number; 
    altura : number;

    constructor(id: string, base: number, altura: number) {
        super(id);
        this.base = base;
        this.altura = altura;
    }

    calculaArea() {
        return this.base * this.altura;
    }
}

class Quandrado extends Forma {
    
    base: number; 

    constructor(name: string, base: number) {
        super(name);
        this.base = base        
    }

    calculaArea() : number{
        return this.base * this.base;
    }
}

class Calculadora {

    formas: Forma[] = []

    calcularForma(formas: Array<Forma>) {
        formas.forEach(f => console.log(f.calculaArea()));
    }
}

let quadrado: Forma = new Quandrado("quadrado-123", 234);
let triangulo: Forma = new Triangulo("triangulo-123", 12, 23);

let calc = new Calculadora();
let formas : Array<Forma> = [quadrado, triangulo]

calc.calcularForma(formas);


