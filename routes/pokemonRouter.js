const { Router } = require("express");
const {
  getAllPokemon,
  getSinglePokemon,
  getSinglePokemonInfo,
} = require("../controllers/pokemon");
const pokemonRouter = Router();

pokemonRouter.route("/").get(getAllPokemon);

pokemonRouter.route("/:id").get(getSinglePokemon);

pokemonRouter.route("/:id/:info").get(getSinglePokemonInfo);

module.exports = pokemonRouter;
