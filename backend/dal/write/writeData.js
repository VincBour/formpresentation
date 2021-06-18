const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

const writeFieldParams = async (params) => {
    await writeFile("./data/getFieldsParams.json", JSON.stringify(params));
}

module.exports = {
    writeFieldParams,
}