import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 8000;

app.get("/home", (req, res) => {
    res.json({ msg: "I am root!" });
});

app.get("/getSum/:a/:b", (req, res) => {
    const { a, b } = req.params;

    res.json({
        ans: sum(Number(a), Number(b))
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});