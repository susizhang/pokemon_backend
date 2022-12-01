const express = require("express");
const app = express();
const port = process.env.PORT || 5020;
const cors = require("cors");
// const bodyParser = require("body-parser");

const pokemonRouter = require("./routes/pokemonRouter");

app.use(cors()); // should place very top , otherwise cannot work

app.use("/pokemon", pokemonRouter);

app.use("*", (req, res) => res.sendStatus(404));

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
