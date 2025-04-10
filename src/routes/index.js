const Router = require("express").Router;

const boletosRoutes = require("./boletos.routes");

const routes = Router();

routes.use("/boletos", boletosRoutes);

module.exports = routes; // Export app for testing