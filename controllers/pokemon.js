const jsonData = require("../file.json");

const getAllPokemon = (req, res) => {
  res.json(jsonData);
};
const getSinglePokemon = (req, res) => {
  const {
    params: { id },
  } = req;
  //   console.log(typeof id);  // string
  const singlePokemon = jsonData.find((pokemon) => pokemon.id === Number(id));
  if (!singlePokemon) {
    res.status(404).json({ error: `pokemon with id of ${id} doesn't exist` });
  }
  res.status(200).json(singlePokemon);
};

const getSinglePokemonInfo = (req, res) => {
  const {
    params: { id },
    params: { type },
  } = req;
  //   console.log(req.params);

  //   console.log(typeof id);  // string
  const singlePokemon = jsonData.find((pokemon) => pokemon.id === Number(id));
  if (!singlePokemon) {
    res.status(404).json({ error: `pokemon with id of ${id} doesn't exist` });
  }
  res.status(200).json(singlePokemon.type[0]);
};

module.exports = {
  getAllPokemon,
  getSinglePokemon,
  getSinglePokemonInfo,
};
