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
    { id: "created_at", title: "CREATED_AT" },
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
      const created_at = new Date().toISOString().split("T")[0];
      await csvWriter.writeRecords([{ name, number, email, created_at }]);
      console.log(`${this.name} added`);
    } catch (err) {
      console.log(err.message);
    }
  }
}

const startApp = async () => {
  const questions = [
    { name: "name", description: "contact name" },
    {
      name: "number",
      description: "contact number",
      pattern: /^-?\d+(\.\d+)?$/,
      message: "must be a valid number",
    },
    {
      name: "email",
      description: "contact email",
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "must be a valid email",
    },
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
