import { createInterface } from "readline";
import { promisify } from "util";
import { appendFileSync } from "fs";
import prompt from "prompt";
prompt.start();
prompt.message = "";

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

const startApp = async () => {
  const questions = [
    { name: "name", description: "contact name" },
    { name: "number", description: "contact number" },
    { name: "email", description: "contact email" },
  ];

  const responses = await prompt.get(questions);
  const person = new Person(responses.name, responses.number, responses.email);
  await person.saveToCSV();

  const { again } = await prompt.get([
    { name: "again", description: "continue? [y/n]" },
  ]);

  if (again.toLowerCase() === "y") await startApp();
};

startApp();
