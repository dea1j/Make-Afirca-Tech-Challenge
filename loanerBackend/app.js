const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

// Routes
app.use("/auth", require("./routes/authentication"));

const startServer = async () => {
    await mongoose.connect(process.env.DATABASE_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err))

// Server
const SERVER_PORT_NO = process.env.PORT || 5500

app.listen(SERVER_PORT_NO, () => {
    console.log(`Server running on Port ${SERVER_PORT_NO}`)
})
}

startServer()