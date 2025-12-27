import express from "express";
import checkRoute from "./routes/check.js";
import downloadRoute from "./routes/download.js";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my site");
});
app.use("/api", checkRoute);
app.use("/api", downloadRoute);

app.listen(3000, () => {
  console.log(`Server running at  : 3000`);
});
