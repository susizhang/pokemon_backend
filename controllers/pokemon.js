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
    params: { id, info },
  } = req;
  //   console.log(req.params);
  //   console.log(typeof id);  // string
  const singlePokemon = jsonData.find((pokemon) => pokemon.id === Number(id));
  if (!singlePokemon) {
    res.status(404).json({ error: `pokemon with id of ${id} doesn't exist` });
  }
  if (info === "name") {
    res.status(200).json(singlePokemon.name.english);
  } else if (info === "type") {
    res.status(200).json(singlePokemon.type[0]);
  } else if (info === "base") {
    res.status(200).json(singlePokemon.base);
  }
};

module.exports = {
  getAllPokemon,
  getSinglePokemon,
  getSinglePokemonInfo,
};
