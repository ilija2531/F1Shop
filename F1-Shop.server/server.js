import express, { json } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
require('dotenv').config();

const app = express();
app.use(cors());
app.use(json());

const PORT = process.env.PORT || 5000;

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
