// dependencies
const express = require("express");
const app = express();
const cors = require("cors");
const { Client } = require("pg");
const config = require("./config.js")[process.env.NODE_ENV || "dev"];

const PORT = config.port; //5002 localhost dev
console.log(config);

const client = new Client({
  connectionString: config.connectionString,
});

client.connect();

//middleware

app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Its a me, Mario");
});

app.get("/api/game_list", (req, res, next) => {
  client
    .query("SELECT * FROM game_list")
    .then((result) => {
      res.status(200);
      res.send(result.rows);
    })
    .catch(next);
});

app.get("api/game_list/:id", (req, res, next) => {
  let gameList = req.params.id;
  client
    .query("SELECT * FROM game_list WHERE id = $1", [gameList])
    .then((result) => {
      res.status(200);
      res.send(result.rows);
      return;
    })
    .catch(next);
});

app.get("/api/character_list", (req, res, next) => {
  client
    .query("SELECT * FROM character_list")
    .then((result) => {
      res.status(200);
      res.send(result.rows);
    })
    .catch(next);
});

app.get("api/character_list/:id", (req, res, next) => {
  let charList = req.params.id;
  client
    .query("SELECT * FROM character_list WHERE id = $1", [charList])
    .then((result) => {
      res.status(200);
      res.send(result.rows);
      return;
    })
    .catch(next);
});

app.post("/api/character_list/add", (req, res) => {
  let voteBody = req.body;
  client
    .query("INSERT INTO character_list (char_name) VALUES($1)", [
      voteBody.char_name,
    ])
    .then((result) => {
      res.status(201).send("Vote Casted");
    });
});

// patch UPDATE favorite game
app.patch("/api/game_list/:id", (req, res) => {
  var game_id = req.params.id;
  var game_name = req.params.game_name;
  var year_released = req.params.year_released;

  client
    .query(
      "UPDATE game_list SET game_name = $1, game_name, year_released = $2, year_released WHERE id = $3",
      [game_name, year_released, game_id]
    )
    .then((res) => {
      res.status(200).send("Vote Casted");
    });
});

// patch UPDATE favorite character
app.patch("/api/character_list/:id", (req, res) => {
  var char_name = req.params.char_name;

  client
    .query(
      "UPDATE character_list SET char_name = $1, char_name WHERE id = $2",
      [char_name]
    )
    .then((res) => {
      res.status(200).send("Vote Casted");
    });
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
