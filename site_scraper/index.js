import { load } from "cheerio";

const URL = "https://medium.com/tag/nodejs";

try {
  const response = await fetch(URL);
  const text = await response.text();
  const $ = load(text);
  const elements = $("article h2");
  elements.each((i, element) => {
    console.log($(element).text());
  });
} catch (err) {
  console.log(err.message);
}
