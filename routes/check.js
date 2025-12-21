import express from "express";

const router = express.Router();

router.post("/data", async (req, res) => {
  try {
    const url = await req.body;
    const jsonUrl = await url.json();
  } catch (error) {
    console.log(error);
  }
});

export default router;
