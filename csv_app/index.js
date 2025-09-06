import { createObjectCsvWriter } from "csv-writer";
import prompt from "prompt";
prompt.start();
prompt.message = "";

const csvWriter = createObjectCsvWriter({
  path: "./contacts.csv",
  append: true,
  header: [
    { id: "name", title: "NAME" },
    { id: "number", title: "NUMBER" },
    { id: "email", title: "EMAIL" },
  ],
});

class Person {
  constructor(name = "", number = "", email = "") {
    this.name = name;
    this.number = number;
    this.email = email;
  }

  async saveToCSV() {
    try {
      const { name, number, email } = this;
      await csvWriter.writeRecords([{ name, number, email }]);
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
