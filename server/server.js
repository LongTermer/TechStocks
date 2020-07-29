const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./utils/connectDB");

const app = express();

// Connect Database
connectDB(process.env.MONGO_URI);

// Init Middleware
app.use(morgan("dev"));
app.use(express.json({ extended: false }));
app.use(cors({ origin: process.env.CLIENT_URL }));

// Define Routes
app.use("/api", require("./routes/auth"));

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}...`);
});
