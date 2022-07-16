const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demodb",
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("mysql Connected successfully");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/signup", (req, res) => {
  const name = req.body.name;
  const sql = "insert into signup (name) values(?)";
  db.query(sql, { name }, (err, result) => {
    if (err) {
      res.sendStatus(500).json({ result: true, message: "failure" });
    } else {
      console.log(result);
      res.sendStatus(200).json({ result: true, message: "success" });
    }
  });
});

app.listen(3001, () => {
  console.log("Server Started...");
});
