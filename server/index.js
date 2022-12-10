// require("dotenv").config();
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');
import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    
}));

mongoose.connect("mongodb://127.0.0.1:27017/ihearyou", () => console.log("Connected to DB!"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});
