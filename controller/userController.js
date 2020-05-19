const fs = require("fs");
const filename = "../data/posts.json";
let data = require(filename);
let path = require("path");

exports.list = function (req, res) {
  if (data.length === 0) {
    res.send("no data available");
  }
  res.send(data);
};

exports.insert = function (req, res) {
  id = { id: req.body.id };
  fname = { fname: req.body.fname };
  lname = { lname: req.body.lname };
  email = { email: req.body.email };
  mobile = { mobile: req.body.mobile };
  password = { password: req.body.password };

  const newPost = {
    ...id,
    ...fname,
    ...lname,
    ...email,
    ...mobile,
    ...password,
  };
  console.log(newPost);
  data.push(newPost);
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(data));
  let fileData = fs.readFileSync(path.join(__dirname, filename), {
    encoding: "utf8",
    flag: "r",
  });
  res.json(JSON.parse(fileData));
};

exports.getById = function (req, res) {
  const { id } = req.params;
  data.forEach((element) => {
    if (element.id === id) {
      res.send(element);
    }
  });
};
