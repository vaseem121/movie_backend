const express = require("express");
const appController = require("../controllers/appController");
const appRouter = express.Router();

// appRouter.route("/login").post(appController.Signup);
appRouter.route("/add-movie").post(appController.add_movie);
appRouter.route("/upd-movie").post(appController.upd_movie);
appRouter.route("/get-movies").post(appController.get_movies);

module.exports = appRouter;
