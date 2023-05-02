const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const chefs = require("./data/cheifs.json");

app.get("/", (req, res) => {
   res.send("Hello, world!");
   console.log("server runnign");
});

app.get("/chefs", (req, res) => {
   res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
   const id = req.params.id;
   const singleChef = chefs.find((chef) => chef.id == id);
   res.send(singleChef);
});

app.listen(PORT, (req, res) => {
   console.log(`server listening on ${PORT}`);
});
