import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my site");
});

app.listen(3000, () => {
  console.log(`Server running at  : 3000`);
});
