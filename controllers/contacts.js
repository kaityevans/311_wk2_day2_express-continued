const contacts = require("../data/contacts")

const list = (req, res) => {
  res.json(contacts)
}

const show = (req, res) => {
  let id = req.params.id
  let found = contacts.find((element) => {
    return element._id == id;
  });
  res.json(found);
}

const create = (req, res) => {
  console.log(req.body);
  let postId = users.length + 1;
  req.body._id = postId;
  contacts.push(req.body);
  res.json(users);
}

module.exports = {list, show, create}