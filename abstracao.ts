
// classes que implementam uma interface precisam implementar tudo
interface Identity {
    id: string;
}

// classes que heradam de uma classe abstrata só implementam o que estiver como abstract
abstract class Forma implements Identity {

    id: string;

    constructor(id: string) {
        this.id = id;
    }

    //Só tem a assinatura - quem implementa são as classes filhas
    abstract calculaArea() : number;

    //as classes filhas nao precisam implementar
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

    //Calcula um conjunto de formas (polimorfismo)
    calcularForma(formas: Array<Forma>) {
        formas.forEach(f => console.log(f.calculaArea()));
    }
}

let quadrado: Forma = new Quandrado("quadrado-123", 234);
let triangulo: Forma = new Triangulo("triangulo-123", 12, 23);

let calc = new Calculadora();

//formas => um conjunto de implementações distintas (polimorfismo)
let formas : Array<Forma> = [quadrado, triangulo]

//envio um conjunto de implementações distintas para calcular
calc.calcularForma(formas);


