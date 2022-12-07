const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokeFightSchema = new Schema(
  {
    // name: String,
    winner: String,
    loser: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PokeFight", pokeFightSchema);
