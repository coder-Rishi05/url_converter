import express from "express";

const router = express.Router();

router.post("/check", async (req, res) => {
  try {
    const { url } = req.body;
    // validation for checking url present or not
    if (!url) {
      return res
        .status(400)
        .json({ success: false, message: "URL is required" });
    }

    // validation for checking url start with https & https

    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      return res.status(400).json({
        success: false,
        message: "not valid url format",
      });
    }
    // 2. HEAD request to check content-type

    const response = await fetch(url, {
      method: "HEAD",
    });

    const contentType = response.headers.get("content-type");

    if (!contentType) {
      return res.status(400).json({
        success: false,
        message: "Unable to detect content type",
      });
    }

    // 3. Decide type
    if (contentType.startsWith("image/")) {
      return res.json({
        success: true,
        type: "image",
        contentType,
      });
    }

    if (contentType.startsWith("video/")) {
      return res.json({
        success: true,
        type: "video",
        contentType,
      });
    }

    // 4. Unsupported
    return res.status(400).json({
      success: false,
      message: "Unsupported URL (not image/video)",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;
