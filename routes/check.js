import express from "express";

const router = express.Router();

router.post("/check", async (req, res) => {
  try {
    const { url } = req.body;

    // validation for checking url present or not
    // validation for checking url present or not
    if (!url) {
      return res
        .status(400)
        .json({ success: false, message: "URL is required" });
    }

    // validation for checking url start with https & https

    if (!url.startWith("https://") && !url.startWith("http://")) {
      return res.status(400).json({
        success: false,
        message: "not valid url format",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;
