const { Router } = require("express");
const {
  getFightInformation,
  addFightInformation,
} = require("../controllers/pokeFightController");

const pokeFightRouter = Router();

pokeFightRouter.route("/game/leaderboard").get(getFightInformation);
pokeFightRouter.route("/game/save").post(addFightInformation);

module.exports = pokeFightRouter;
