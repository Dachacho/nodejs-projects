import { createInterface } from "readline";
import { promisify } from "util";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = promisify(readline.question).bind(readline);

(async () => {
  try {
    const name = await readLineAsync("what is yourname: ");
    console.log(`hello ${name}`);
  } catch (err) {
    console.log(err.message);
  } finally {
    readline.close();
  }
})();
