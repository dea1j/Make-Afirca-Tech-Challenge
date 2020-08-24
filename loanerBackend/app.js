const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

// Routes
app.use("/auth", require("./routes/authentication"));


// 
const startServer = async () => {
    await mongoose.connect(process.env.DATABASE_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err))

// Server
const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})
}

startServer()