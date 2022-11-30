const express = require("express");
const app = express();
const port = process.env.PORT || 5020;
const cors = require("cors");
// const bodyParser = require("body-parser");

const pokemonRouter = require("./routes/pokemonRouter");

app.use(cors());
app.use("/pokemon", pokemonRouter);

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
