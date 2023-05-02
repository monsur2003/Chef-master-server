const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
   res.send("Hello, world!");
   console.log("server runnign");
});
app.listen(PORT, (req, res) => {
   console.log(`server listening on ${PORT}`);
});
