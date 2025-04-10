const Router = require("express");

const boletosRoutes = Router();

boletosRoutes.post("/", (req, res) => {
  res.send("Voce chamou o POST /boletos");
});

boletosRoutes.get("/", (req, res) => {
  res.send("Voce chamou o GET /boletos");
});

module.exports = boletosRoutes;