const scoreBoard = {
    'Dave Thomas': 44,
    'Freyja Ćirić': 539,
    'José Valim': 265,
};

//Ex 1
function calculaPuntuacio(param) {
    let a = 0;
    let b = 0;
    for (valor in param) {
        a += param[valor];
        b++;
    }
    return a / b;
}

//Ex 2
function sense(obj, nom) {
    delete obj[nom];
    return obj;
}

//Ex 3

function Matriu(height, width) {
    this.height = height;
    this.width = width;
    this.matriu = [];
    let matriuaux = [];
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            matriuaux.push(0);
        }
        this.matriu.push(matriuaux);
        matriuaux = [];
    }

    this.getHeight = function () {
        return this.height;
    }
    this.getWidth = function () {
        return this.width;
    }
    this.print = function () {
        console.log(this.matriu);
    }
}

Matriu.prototype.fromArray = function (width, height, llista) {
    let matriu2 = [];
    let matriusus = [];
    let counter = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            matriusus.push(llista[counter]);
            counter++;
        }
        matriu2.push(matriusus);
        matriusus = [];
    }
    let resultat = new Matriu(width, height);
    resultat.matriu = matriu2;
    return resultat;
}


//Ex 4

class MatriuBinaria extends Matriu {
    constructor(height, width) {
        super(height, width);
    }

    fromArray(width, height, llista, funcio) {
        super.fromArray(width, height, llista);
    
        let matriu3 = [];
        let matriuaux2 = [];
        let counter2 = 0;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (funcio(llista[counter2])) {
                    matriuaux2.push(1);
                }
                else {
                    matriuaux2.push(0);
                }
                counter2++;
            }
            matriu3.push(matriuaux2);
            matriuaux2=[];
        }
        let resultat2 = new MatriuBinaria(height, width);
        resultat2.matriu = matriu3;
        return resultat2;
    }
}
