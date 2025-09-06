import fastify from "fastify";
import menuItems from "./menuItems.js";
import operatingHours from "./operatingHours.js";

const app = fastify();

const port = 3000;

app.get("/", async (request, reply) => {
  return "Welcome to Fare is Fare!";
});

app.get("/menu", async (request, reply) => {
  reply.send(menuItems);
});

app.get("/hours", async (request, reply) => {
  reply.send(operatingHours);
});

await app.listen({ port });

console.log(`web server is listening at port: ${port}`);
