import fastify from "fastify";

const app = fastify();

const port = 3000;

app.get("/", async (request, reply) => {
  return "Welcome to Fare is Fare!";
});

await app.listen({ port });

console.log(`web server is listening at port: ${port}`);
