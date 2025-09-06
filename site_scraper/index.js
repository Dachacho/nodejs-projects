import { load } from "cheerio";

const URL = "https://medium.com/tag/nodejs";

try {
  const response = await fetch(URL);
  const text = await response.text();
  const $ = load(text);
  const elements = $("article");
  elements.each((i, element) => {
    const title = $(element).find("h2").text();
    const url = $(element).find("a").attr("href");
    console.log(title, url);
  });
} catch (err) {
  console.log(err.message);
}
