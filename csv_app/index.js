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
    const content = `${this.name}, ${this.number}, ${this.email}`;
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
