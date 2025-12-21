import express from "express";
import router from "./routes/check";
const app = express();

app.use(router);

app.get("/", (req, res) => {
  res.send("Welcome to my site");
});

app.listen(3000, () => {
  console.log(`Server running at  : 3000`);
});
