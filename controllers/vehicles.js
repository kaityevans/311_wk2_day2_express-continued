const vehicles = require("../data/vehicles")

const list = (req, res) => {
  res.json(vehicles)
}

const show = (req, res) => {
  let id = req.params.id
  let found = vehicles.find((element) => {
    return element._id == id;
  }) 
  res.json(found);
}

const create = (req, res) => {
  console.log(req.body);
  let postId = users.length + 1;
  req.body._id = postId;
  vehicles.push(req.body);
  res.json(users);
}

module.exports = {list, show, create};