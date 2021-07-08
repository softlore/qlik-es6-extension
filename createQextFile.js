const packageJson = require("./package.json");
const { appName, outputPath } = require("./qlik.config");
const fs = require("fs");
const path = require("path");

module.exports = () => {
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }

    fs.writeFileSync(
        path.join(outputPath, `${appName}.qext`),
        JSON.stringify({
            author: packageJson.author,
            description: packageJson.description,
            name: appName,
            type: "visualization",
            version: "1"
        }, null, 2)
    );
};