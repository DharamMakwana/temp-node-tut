// const os = require("os");

// const user = os.userInfo();

// console.log(user);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   freeMem: os.freemem(),
//   totalMem: os.totalmem(),
// };

// console.log(currentOS);

const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "file.txt");

console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname, "content", "subfolder", "file.txt");

console.log(absolute);
