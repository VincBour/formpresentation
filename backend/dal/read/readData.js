const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);


const readFieldsParams = async () => {
    const data = await readFile("./data/getFieldsParams.json", "utf8");
    return JSON.parse(data);
}

const readFieldsData = async () => {
    const data = await readFile("./data/getFieldsData.json", "utf8");
    return JSON.parse(data);
}

module.exports = {
    readFieldsData,
    readFieldsParams
}