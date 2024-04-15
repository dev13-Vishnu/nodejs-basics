const fs = require ('fs');

const textin= fs.readFileSync('./files/input.txt', 'utf-8');
console.log(textin);

let content = `Data from iput.txt: ${textin} \n Date create:${new Date()}`;
fs.writeFileSync('./files/output.txt',content);