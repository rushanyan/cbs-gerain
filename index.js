const id = require("shortid");
let x = () =>{
	return `Cannabis-${id.generate()}`;
}

// console.log(x())

module.exports = x;
