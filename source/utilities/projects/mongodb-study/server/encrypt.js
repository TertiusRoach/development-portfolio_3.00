//--► npm run startEncrypt ◄--//
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());
//--|▼| Store this array in a safe database somewhere |▼|--//
const users = [];
app.get('/users', (req, res) => {
  //--► req = Request Variable ◄--//
  //--► res = Response Variable ◄--//
  res.json(users);
});

app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

app.post('/users/login', async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.status(400).send('Cannot find user');
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success');
    } else {
      res.send('Failure');
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
console.log('--encrypt.js Loaded');
