import fastify from "fastify";

const app = fastify();

const port = 3000;

app.get("/", async (request, reply) => {
  return "Welcome to Fare is Fare!";
});

app.get("/menu", async (request, reply) => {
  return "TODO: menu page";
});

app.get("/hours", async (request, reply) => {
  return "TODO: hours page";
});

await app.listen({ port });

console.log(`web server is listening at port: ${port}`);
