import fastify from "fastify";
import menuItems from "./menuItems.js";
import operatingHours from "./operatingHours.js";
import ejs from "ejs";
import fastifyView from "@fastify/view";
import { join } from "path";

const app = fastify();

app.register(fastifyView, {
  engine: { ejs },
  root: join(process.cwd(), "views"),
});

app.get("/", async (request, reply) => {
  return reply.view("index.ejs", { name: "whats Fair is Fair" });
});

app.get("/menu", async (request, reply) => {
  return reply.view("menu.ejs", { menuItems });
});

app.get("/hours", async (request, reply) => {
  const days = [
    "monday",
    "tuesday",
    "wednsday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return reply.view("hours.ejs", { operatingHours, days });
});

app.get("/about", async (request, reply) => {
  return reply.view("about.ejs");
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`running on port: ${address}`);
});
