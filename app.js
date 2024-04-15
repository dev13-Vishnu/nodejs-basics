const readline = require ('readline');
const promiseFs = require ('fs').promises;
const http = require ('http');
const fs = require ('fs');
const events = require('events');
const user = require ('./modules/user');
const { error } = require('console');



/************************************************************************************************************************readline*/
// const rl = readline.createInterface({
//   input:process.stdin,
//   output:process.stdout
// })

// rl.question("Enter you're name:",(name) => {
//   console.log(`You've entered: ${name}.`);
//   rl.close();
// })
// rl.on('close',() =>{
//   console.log("interface closed");
//   process.exit(0);
// });
/************************************************************************************************************************readline*/
/**************************************************************************************************fs readfileSync writeFileSync*/
// let textin = fs.readFileSync('./files/input.txt','utf-8');
// console.log(textin);
// let content = `Data from input.js:${textin}, Date crated:${new Date()}`;
// fs.writeFileSync('./files/output.txt',content);

// console.log(fs.readFileSync('./files/output.txt','utf-8'));
/**************************************************************************************************fs readfileSync writeFileSync*/
// fs.readFile('./files/start.txt','utf-8',(error1,data1) => {
//   console.log(data1);
//   fs.readFile(`./files/${data1}.txt`,'utf-8',(error2,data2) => {
//     console.log(data2);
//     console.log(error2);
//     fs.readFile('./files/append.txt','utf-8',(error3,data3) => {
//       console.log(data3);
//       fs.writeFile('./files/output.txt',`${data2}\n\n${data3}\n\n${new Date()}`,() =>{
//         console.log("Filer Written Succesfully...");
//       });
//     })
//   })
// })
// console.log('Reading file');

// function readFileChain (filename) {
//   return promiseFs.readFile(filename,'utf-8')
//   .then(data1 => {
//     console.log(data1);
//     return promiseFs.readFile(`./files/${data1}.txt`,'utf-8');
//   })
//   .then(data2 => {
//     console.log(data2);
//    return promiseFs.readFile('./files/append.txt','utf-8');
//   })
//   .then(data3 => {
//     console.log(data3);
//     const outputdata= `${data2} \n ${data3}\n Date created:${new Date()}`;
//     return promiseFs.writeFile('./files/output.txt',outputdata);
// })
// .then (() => console.log("File written Successfully..."))
// .catch(error => console.log(error));
// }
// readFileChain('./files/start.txt')
// .then(() => {
//   console.log("All files are processed Successfully...")
// }).catch((err) => {
//   console.log(err);
// });


// async function readFileChain () {
//   try {
//     const data1 = await fs.readFile('./files/start.txt','utf-8');
//     console.log(data1);
    
//     const data2 = await fs.readFile(`./files/${data1}.txt`,'utf-8');
//     console.log(data2);

//     const data3 = await fs.readFile('./files/append.txt','utf-8');
//     console.log(data3);
//     const outputdata = `${data2}\n\n${data3}\nDate Created: ${new Date()}`;
    
//     await fs.writeFile('./files/output.txt',outputdata);
//   } catch (error) {
//     console.error(error);
//   }
// }

// readFileChain()
// .then(() => {
//   console.log("All files have processed successfully...");
// }).catch((err) => {
//   console.error(err);
// });
/**************************************************************************************************fs readfileSync writeFileSync*/
/**************************************************************************************************http creating a server*/
// const html = fs.readFileSync('./Template/index.html','utf-8');
// // creating a server
// const server = http.createServer((request,response) =>{
//   // response.end('Hi from server');
//   // response.end('<h1>This is homepage</h1>')
//   let path = request.url;
//   if (path ==='/'|| path.toLowerCase()==='/home'){
//     response.end('You are in home page');
//   }else if (path.toLowerCase()==='/contact') {
//     response.end('You are in contact page');  
//   }else if(path.toLowerCase()==='/about'){
//     response.end('You are in About page');
// }else{
//   response.end("Error 404 page not found");
// }
    
  
  // response.end(html);

  // console.log("Request recieved...");
// console.log(response);
// });


// const server = http.createServer();
// // start a server
// server.listen(3000,()=>{
//   console.log("Server is listening");
// });

// const myEmitter = new user();

// myEmitter.on('user created',(name,id) =>{
//   console.log(`A new user ${name} with ID ${id} is created`);
// });
// myEmitter.on('user created', (name, id) => {
//   console.log(`A new user ${name} with ID ${id} is added to database`);
// });

// myEmitter.emit('user created','vishnu', 1303);

// server.on ('request',(req,res) => {
//   fs.readFile('./files/large_file.txt',(err,data) => {
//     if(err) {
//       console.log('Something went wrong');
//       return;
//     }
//     res.end(data);
//   });
// });
// server.on('request',(req,res) => {
//   let rs = fs.createReadStream('./files/large_file.txt');

//   rs.on('data',(chunk) => {
//     res.write(chunk);
//     res.end();
//   });
//   rs.on ('end',() =>{
//     res.end();
// });
//   rs.on('error',(error)=> {
//     res.end(error.message);
//   })
// });
// server.on('request',(req,res) =>{
//   let rs = fs.createReadStream('./files/large_file.txt');
//   rs.pipe(res);
// });

// console.log('program has started');

// setTimeout(() => {
//   console.log('Timer callback executed');
// }, 0);
// fs.readFile('./files/input.txt',() => {
//   console.log('File read complete');
// });

// setImmediate(() =>{
//   console.log('Set immediate callback executed');
// });

// console.log('Program has compleated');


console.log('program has started');


fs.readFile('./files/input.txt',() => {
  console.log('File read complete');

  setTimeout(() => {
    console.log('Timer callback executed');
  }, 0);

  setImmediate(() =>{
    console.log('Set immediate callback executed');
  });
  process.nextTick(() =>{
    console.log('Process.next tick callback executed');
  });


});


console.log('Program has compleated');

