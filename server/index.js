import express from "express";
import "dotenv/config";
import { db } from './configs/db.js'; // Pastikan jalur impor benar
import userRouter from "./routes/user.route.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world"
    });
});

// Route/path untuk menangani 404
app.use("*", (req, res) => {
    res.status(404).json({
        message: "not found"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server berhasil dijalankan pada port ${PORT}`);
});
