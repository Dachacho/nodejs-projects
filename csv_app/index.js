import { writeFileSync } from "fs";

const content = "test content";

try {
  writeFileSync("./text.txt", content);
  console.log("success");
} catch (err) {
  console.log(err);
}
