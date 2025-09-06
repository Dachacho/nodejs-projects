import { createInterface } from "readline";
import { promisify } from "util";
import { appendFileSync } from "fs";

class Person {
  constructor(name = "", number = "", email = "") {
    this.name = name;
    this.number = number;
    this.email = email;
  }

  saveToCSV() {
    const content = `${this.name}, ${this.number}, ${this.email}\n`;
    try {
      appendFileSync("./contacts.csv", content);
      console.log(`${this.name} added`);
    } catch (err) {
      console.log(err.message);
    }
  }
}

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = promisify(readline.question).bind(readline);

const startApp = async () => {
  let shouldContinue = true;

  while (shouldContinue) {
    const name = await readLineAsync("enter name: ");
    const number = await readLineAsync("enter number: ");
    const email = await readLineAsync("enter email: ");

    const person = new Person(name, number, email);
    person.saveToCSV();

    const response = await readLineAsync("continue [y/n]");
    shouldContinue = response.toLowerCase() === "y";
  }

  readline.close();
};

startApp();
