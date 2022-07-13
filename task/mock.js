// const { generateData } = require("./generate");
const generateModule = require("./generate");


function getData() {
    const res = generateModule.generateData();
    return res;
}

module.exports = getData