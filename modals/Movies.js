const mongoose = require("mongoose");
const { Schema } = mongoose;

const Movies = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  year: {
    type: Number,
    default: "",
  },
  poster: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("movies", Movies);
