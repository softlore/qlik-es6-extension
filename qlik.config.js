const path = require("path");
const packageJson = require("./package.json");
const cwd = process.cwd();

const appName = packageJson.name;
const outputPath = path.join(cwd, "dist");

module.exports = { appName, outputPath };