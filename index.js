const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./contacts");
const vehicles = require("./vehicles");
const comments = require("./comments");
const products = require("./products");
const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('./public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

// Start GET Routes
app.get("/contacts/:id", (req, res) => {
  let id = req.params.id
  let found = users.find((element) => {
    return element._id == id;
  });
  res.json(found);
});

  app.get("/vehicles/:id", (req, res) => {
    let id = req.params.id
    let found = users.find((element) => {
      return element._id == id;
  });
  res.json(found);
});

  app.get("/comments/:id", (req, res) => {
    let id = req.params.id
    let found = users.find((element) => {
      return element._id == id;
  });
  res.json(found);
});

  app.get("/products/:id", (req, res) => {
    let id = req.params.id
    let found = users.find((element) => {
      return element._id == id;
  });
  res.json(found);
});
// End GET Routes

// Start POST Routes
app.post("/contacts", (req, res) => {
  console.log(req.body);
  let postId = users.length + 1;
  req.body._id = postId;
  contacts.push(req.body);
  res.json(users);
});

app.post("/vehicles", (req, res) => {
  console.log(req.body);
  let postId = users.length + 1;
  req.body._id = postId;
  contacts.push(req.body);
  res.json(users);
});

app.post("/comments", (req, res) => {
  console.log(req.body);
  let postId = users.length + 1;
  req.body._id = postId;
  contacts.push(req.body);
  res.json(users);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  let postId = users.length + 1;
  req.body._id = postId;
  contacts.push(req.body);
  res.json(users);
});
// End POST Routes