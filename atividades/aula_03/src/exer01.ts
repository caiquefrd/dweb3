var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Calculator {
    int_1: number;
    int_2: number;
    constructor(int_1: number, int_2: number) {
        this.int_1 = int_1;
        this.int_2 = int_2;
    }
    public multiply(): number {
        return this.int_1 * this.int_2
    }
    public sum(): number {
        return this.int_1 + this.int_2
    }
    public divide(): number {
        return this.int_1 / this.int_2
    }
    public minus(): number {
        return this.int_1 - this.int_2
    }
}

let continuar = true;

function perguntar() {
    if (continuar) {
        leitor.question("Digite dois numeros e o método separados por virgula (ou 'sair' para terminar): ", function (answer: string) {
            let arr_input = answer.split(",")
            let int1 = parseInt(arr_input[0]);
            let int2 = parseInt(arr_input[1]);
            let method = arr_input[2];
            if (answer.toLowerCase() === 'sair') {
                continuar = false
                leitor.close();
            }
            if (method === "somar") {
                const calculator = new Calculator(int1, int2);
                console.log(`Resultado: ${calculator.sum()}`);
            }
            if (method === "multiplicar") {
                const calculator = new Calculator(int1, int2);
                console.log(`Resultado: ${calculator.multiply()}`);
            }
            if (method === "subtrair") {
                const calculator = new Calculator(int1, int2);
                console.log(`Resultado: ${calculator.minus()}`);
            }
            if (method === "dividir") {
                const calculator = new Calculator(int1, int2);
                console.log(`Resultado: ${calculator.divide()}`);
            }
            leitor.close();
        });
    }
}
perguntar()
