const { Router } = require("express");
const pokemonRouter = Router();

pokemonRouter.route("/").get();

pokemonRouter.route("/:id").get();
