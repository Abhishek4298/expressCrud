const fs = require("fs");
const filename = "../data/posts.json";
let data = require(filename);
let path = require('path');

exports.remove = function (req, res) {
  const { id } = req.params;

  let arr = data.filter((element) => {
    return element.id !== id;
  });
  console.log(arr);
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(arr));
  let fileData = fs.readFileSync(path.join(__dirname, filename), {
    encoding: "utf8",
    flag: "r",
  });
  res.json(JSON.parse(fileData));
};

exports.update = function (req, res) {
	const { id } = req.params;
	
  let dataUpdated = data.map((element) => {
    if (element.id === id) {
      element.fname = req.body.fname || element.fname;
      element.lname = req.body.lname || element.lname;
      element.email = req.body.email || element.email;
      element.mobile = req.body.mobile || element.mobile;
      element.password = req.body.password || element.password;
      return element;
    } else {
      return element;
    }
  });
  console.log(dataUpdated);
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(dataUpdated));
  let fileData = fs.readFileSync(path.join(__dirname, filename), {
    encoding: "utf8",
    flag: "r",
  });
  res.json(JSON.parse(fileData));
};
