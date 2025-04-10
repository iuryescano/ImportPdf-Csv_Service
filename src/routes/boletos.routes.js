import { Router } from "express";

const boletosRoutes = Router();

boletosRoutes.post("/boletos", (req, res) => {
  res.send("Voce chamou o POST /boletos");

});

boletosRoutes.get("/boletos", (req, res) => {
  res.send("Voce chamou o GET /boletos");
}
);

module.exports = boletosRoutes;