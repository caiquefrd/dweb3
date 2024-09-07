import promptSync from "prompt-sync";

const prompt = promptSync();

var readline = require("readline");
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class conversor {
  data1: number;
  inverse: string;
  constructor(data1: number, inverse: string) {
    this.data1 = data1;
    this.inverse = inverse;
  }
  meters_to_km() {
    if (this.inverse == "k") {
      return this.data1 * 1000;
    }
    return this.data1 / 1000;
  }
  grams_to_kg() {
    if (this.inverse == "k") {
      return this.data1 * 1000;
    }
    return this.data1 / 1000;
  }
  celcius_to_F() {
    if (this.inverse == "f") {
      return ((this.data1 - 32) * 5) / 9;
    }
    return (this.data1 * 9) / 5 + 32;
  }
}

var continuar = true;

function question() {
  if (continuar) {
    leitor.question(
      "Digite o método a ser utilizado \n métros para km [1] \n gramas para quilos [2] \n celsius para fahrenheit [3] \n (ou 'sair' para terminar): ",
      function (answer: string) {
        const options = ["1", "2", "3"];
        if (answer.toLowerCase() === "sair") {
          console.log("saindo");
          continuar = false;
          leitor.close();
        }
        if (options.includes(answer)) {
          if (answer == "1") {
            const input_select = prompt(
              "Selecione a conversão: \n[M] \n[K] \n"
            ).toLocaleLowerCase();
            const input = prompt("digite o valor: ");
            const result = new conversor(parseInt(input), input_select);
            continuar = false;
            leitor.close();
            console.log(result.meters_to_km());
          }
          if (answer == "2") {
            const input_select = prompt(
              "Selecione a conversão: \n[G] \n[K] \n"
            ).toLocaleLowerCase();
            const input = prompt("digite o valor: ");
            const result = new conversor(parseInt(input), input_select);
            continuar = false;
            leitor.close();
            console.log(result.grams_to_kg());
          }
          if (answer == "3") {
            const input_select = prompt(
              "Selecione a conversão: \n[C] \n[F] \n"
            ).toLocaleLowerCase();
            const input = prompt("digite o valor: ");
            const result = new conversor(parseInt(input), input_select);
            continuar = false;
            leitor.close();
            console.log(result.celcius_to_F());
          }
        } else {
          console.log("opção inválida");
        }
        continuar = false;
        leitor.close();
      }
    );
  }
}
question();
