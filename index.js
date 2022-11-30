const express = require("express");
const app = express();
const port = process.env.PORT || 5020;
const cors = require("cors");

const pokemonRouter = require("./routes/pokemonRouter");

app.use("/pokemon", pokemonRouter);
app.use(cors());

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
