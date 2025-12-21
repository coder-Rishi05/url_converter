import express from "express";

const router = express.Router();

router.post("/data", async (req, res) => {
try {
    
    const url = await req.body
} catch (error) {
    console.log(error)
}
});

export default router;
