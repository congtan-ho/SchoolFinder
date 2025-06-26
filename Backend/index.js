import express from "express";
import router from "./Routes/schoolRoute.js";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/schools", router)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})