const readline = require ('readline');
// console.log("Hello from node.js");

const rl =readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question("Enter you're name:",(name) => {
  console.log("You've entered:"+name);
  rl.close();
});

rl.on('close',()=>{
  console.log("interface closed");
  process.exit(0);
})