const path = require("path");
const util = require("util");
const fs = require("fs");
const read_file = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const src_script = path.join(__dirname, "../../scripts/fixer.sh");


exports.getSettings = async(req, res, next) => {
  try {
    var scripts = await read_file(src_script, "utf8");
    res.json({
      scripts: scripts
    })
  } catch (e) {
    next(e)
  }
};
exports.updateSettings = async(req, res, next) => {
  try {
    await writeFile(src_script, req.body.scripts);
    var plugin = require("../index.js");
    await plugin.install();
    res.json({})
  } catch (e) {
    next(e)
  }
};