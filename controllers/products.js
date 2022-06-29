const products = require("../data/products");

const list = (req, res) => {
  res.json(products)
}

const show = (req, res) => {
  let id = req.params.id
  let found = products.find((element) => {
    return element._id == id;
});
res.json(found);
}

const create = (req, res) => {
  console.log(req.body);
  let postId = users.length + 1;
  req.body._id = postId;
  products.push(req.body);
  res.json(users);
}

module.exports = {list, show, create}