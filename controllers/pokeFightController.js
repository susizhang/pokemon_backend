const connectDB = require("../config/connectDB");
connectDB();

const PokeFight = require("../models/pokeFightModel");

const getFightInformation = async (req, res) => {
  try {
    const listFightInfo = await PokeFight.find().sort({ createdAt: -1 });
    res.status(200).send({
      msg: "Get all the FightInformation successfully",
      FightInformation: listFightInfo,
    });
  } catch (error) {
    res.status(400).send({ msg: "Can not get all FightInformation" });
  }
};

const addFightInformation = async (req, res) => {
  //   console.log(" ", req.body);
  try {
    const newFightInfo = await PokeFight.create({
      winner: req.body.winner,
      loser: req.body.loser,
    });

    res.status(200).json(newFightInfo);
  } catch (error) {
    res.status(400).send({
      msg: "Can not save this FightInformation",
      error: error.message,
    });
  }
};

module.exports = {
  getFightInformation,
  addFightInformation,
};
