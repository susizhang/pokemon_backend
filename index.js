require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const pokemonRouter = require("./routes/pokemonRouter");
const pokeFightRouter = require("./routes/pokeFightRouter");
const port = process.env.PORT || 5020;

const cors = require("cors");

app.use(cors()); // should place very top , otherwise cannot work

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/pokemon", pokemonRouter);
app.use("/game", pokeFightRouter);

app.use("*", (req, res) => res.sendStatus(404));

app.listen(port, () => {
  console.log(`Server is running on http://localhost: ${port}`);
});
