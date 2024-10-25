const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mongooseConnection = require("./helpers/mongoose-connection");
const appRoutes = require("./routes");
const path = require('path');

// Set Mongoose strictQuery option
mongoose.set("strictQuery", true); // or false based on your requirement

// Increase the size limit for JSON requests
app.use(bodyParser.json({ limit: "50mb" }));

// Update body-parser usage to provide the extended option
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(fileUpload());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
  })
);
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));
app.use(express.static("public"));

app.use("/api", appRoutes);

// Handle 404 errors
app.use((_, res) => {
  res.status(404).send({
    message: "Not found!",
  });
});

mongooseConnection();

// Change the port if necessary
const PORT = 6432; // Allow the port to be set via environment variable
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Handle uncaught exceptions to prevent application termination
process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  process.exit(1); // Exit the process to avoid undefined states
});
