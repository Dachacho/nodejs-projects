const URL = "https://medium.com/tag/nodejs";

try {
  const response = await fetch(URL);
  const text = await response.text();
  console.log(text);
} catch (err) {
  console.log(err.message);
}
