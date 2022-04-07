const express = require("express");
const dotenv = require("dotenv").config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json()); //body parser
app.use(express.urlencoded({extended: false}));


app.use("/api/goals", require('./routes/goalRoutes'));
//mount the router

app.use(errorHandler)

app.listen(PORT, console.log(`now listening on port ${PORT}`));
