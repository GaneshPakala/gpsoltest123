const fs = require("fs");
const sample1 = require("./sample1");

let user = {
	fname:"Gopi",
	age:26,
	emplyid:664125};

let user1 = {
	fname:"Ramesh",
	age:22,
	emplyid:652587};


sample1.unshift(user);
sample1.push(user1);

fs.writeFile("sample2.json", JSON.stringify(sample1), err => {
	if (err) throw err;
	console.log("Done Writing");
});
