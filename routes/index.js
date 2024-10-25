const { Router: expressRouter } = require("express");
const router = expressRouter();

// auth routes
const authRouter = require("./appRoutes");
router.use("/app", authRouter);

module.exports = router;