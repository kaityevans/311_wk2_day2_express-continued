const comments = require("../data/comments")

const list = (req, res) => {
  res.json(comments)
}

const show =(req, res) => {
  let id = req.params.id
  let found = comments.find((element) => {
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