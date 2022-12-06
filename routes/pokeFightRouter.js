const { Router } = require("express");
const {
  getFightInformation,
  addFightInformation,
} = require("../controllers/pokeFightController");

const pokeFightRouter = Router();

pokeFightRouter.route("/leaderboard").get(getFightInformation);
pokeFightRouter.route("/save").post(addFightInformation);

module.exports = pokeFightRouter;
