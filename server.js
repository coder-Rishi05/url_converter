import express from "express";
import checkRoute from "./routes/check.js";

const app = express();

app.use(express.json());

app.use("/api", checkRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my site");
});

app.listen(3000, () => {
  console.log(`Server running at  : 3000`);
});
