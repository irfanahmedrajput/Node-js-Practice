const fs = require('fs');
// fs.writeFileSync('read.text','Hello Node js File system testing');

// fs.appendFileSync("read.text"," Programming Solutions");

// fs.renameSync("read.text","read1.text");

// function getCurrentFilenames() { 
//     console.log("Current filenames:"); 
//     fs.readdirSync(__dirname).forEach(file => { 
//       console.log(file); 
//     }); 
//   }

//   getCurrentFilenames(); 

const initial_data = fs.readFileSync('read1.text');
const original_data = initial_data.toString();
console.log(original_data);