// import express from "express";
// import fs from "fs";
// import path from "path";

// const router = express.Router();

// router.post("/download", async (req, res) => {
//   try {
//     const { url, type } = req.body;

//     if (!url || !type) {
//       return res.status(400).json({
//         success: false,
//         message: "URL and type are required",
//       });
//     }

//     const response = await fetch(url);
//     if (!response.ok) {
//       return res.status(400).json({
//         success: false,
//         message: "Failed to fetch file",
//       });
//     }

//     const ext = type === "image" ? ".jpg" : ".mp4";
//     const fileName = `${Date.now()}${ext}`;

//     // ✅ FIX STARTS HERE
//     const downloadsDir = path.join(process.cwd(), "downloads");

//     if (!fs.existsSync(downloadsDir)) {
//       fs.mkdirSync(downloadsDir);
//     }

//     const filePath = path.join(downloadsDir, fileName);
//     // ✅ FIX ENDS HERE

//     const buffer = Buffer.from(await response.arrayBuffer());
//     fs.writeFileSync(filePath, buffer);

//     return res.json({
//       success: true,
//       message: "File downloaded successfully",
//       file: fileName,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Download failed",
//     });
//   }
// });

// export default router;

import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/download", async (req, res) => {
  try {
    const { url, type } = req.body;

    if (!url || !type) {
      return res.status(400).json({
        success: false,
        message: "URL and type are required",
      });
    }

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(400).json({
        success: false,
        message: "Failed to fetch file",
      });
    }

    const ext = type === "image" ? ".jpg" : ".mp4";
    const fileName = `${Date.now()}${ext}`;

    // ✅ FIX STARTS HERE
    const downloadsDir = path.join(process.cwd(), "downloads");

    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir);
    }

    const filePath = path.join(downloadsDir, fileName);
    // ✅ FIX ENDS HERE

    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return res.json({
      success: true,
      message: "File downloaded successfully",
      file: fileName,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Download failed",
    });
  }
});

export default router;
