const express = require('express');

const mysql = require('mysql');

const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('home page of node');
});

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '11111111@bala',
  database: 'cryptax',
});

db.connect((err) => {
  // if (err) throw err;
  console.log('DB Connected');
});

app.post('/api/registration', (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  var sql = 'insert into registration SET ? ';

  try {
    db.query(sql, { name, username, email, password }, (err, result) => {
      if (err) {
        console.log(err);
        throw new Error(err?.message ?? 'Database issue');
      } else {
        console.log(result);
        return res.sendStatus(200).json({ result: true, user: result[0], message: 'Registered Successfully' });
      }
    });
  } catch (err) {
    console.log('error ', err);
    res.sendStatus(400).json({ result: true, message: 'failure' });
  }
});

app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  var sql = 'select * from registration where email = ? limit 1';

  db.query(sql, [email], (err, result) => {
    if (err) {
      return new Error('db issue');
    }

    if (result.length) {
      console.log(result);

      if (password !== result[0]?.password) {
        return res.status(400).json({ result: false, message: 'Invalid password', signin: false });
      }

      return res.status(200).json({ result: true, user: result[0], message: 'logged in', signin: true });
    } else {
      return res.status(400).json({ result: false, message: 'Email not exist', signin: false });
    }
  });
});

app.listen(4000, () => {
  console.log('Server Working on 4000');
});
