const pug = require('pug');
const fs = require('fs');

const compiledFunction = pug.compileFile('index.pug');
fs.writeFileSync("dist/index.html", compiledFunction());
