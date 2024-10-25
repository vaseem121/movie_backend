const Movies = require("../modals/Movies");
const { ObjectId } = require("mongoose").Types;
var path = require("path");
const fs = require("fs")

const login = async () => {};

const add_movie = async (req, res) => {
  const { movie_data,image } = req.body;
  try {
    const m_res = await Movies.create(movie_data);
    if (image != null) {
      const uploaded = image?.split(",")[1];
      //const fileExtension = path.extname(uploaded.name);
      uniqueFileName =movie_data?.poster;
        // Date.now() + "-" + Math.random().toString(36).substring(2, 8) + ".png";
      const uploadPath = path.join(
        __dirname,
        "../public/uploads",
        uniqueFileName
      );

      const buffer = Buffer.from(uploaded, "base64");

      // Write the buffer data to a file
      fs.writeFile(uploadPath, buffer, (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return res.status(500).send("Error uploading file");
        }
      });
      // profile File Upload end
    }
    return res.send({ status: 1,  m_res });
  } catch (error) {
    console.warn(error);
    return res.send({ status: 0, msg: error });
  }
};

const get_movies = async (req, res) => {
  const {pageIndex} = req.body;
  try {
    const m_res = await Movies.find().skip(10*pageIndex).limit(10);
    return res.send({ status: 1,m_res });
  } catch (error) {
    console.warn(error);
    return res.send({ status: 0, msg: error });
  }
};

const upd_movie = async (req, res) => {
  const { movie_data,_id,image } = req.body;
  try {
    const m_res = await Movies.updateOne({_id: new ObjectId(_id)},movie_data);
console.warn('ok');

    if (image) {
      const uploaded = image?.split(",")[1];
      //const fileExtension = path.extname(uploaded.name);
      const uniqueFileName = movie_data?.poster;
      const uploadPath = path.join(
        __dirname,
        "../public/uploads",
        uniqueFileName
      );

      const buffer = Buffer.from(uploaded, "base64");

      // Write the buffer data to a file
      fs.writeFile(uploadPath, buffer, (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return res.status(500).send("Error uploading file");
        }
      });
      // profile File Upload end
    }

    return res.send({ status: 1, m_res });
  } catch (error) {
    console.warn(error);
    return res.send({ status: 0, msg: error });
  }
};

module.exports = {
  login,
  add_movie,
  get_movies,
  upd_movie,
};
