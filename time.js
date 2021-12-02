const fs = require('fs');
const express=require("express");

const app=express();

const PORT=9000;

let today = new Date()
today = `(${today.getMonth()+1})-${today.getDate()}-${today.getFullYear()})`;
const str = new Date().toString();
console.log(str);

async function create() {
  await fs.writeFile(`./timeFiles/${today}.txt`,str,(err)=>{
    if(err){
      console.log("error:",err);
    }
    else
     console.log("file creted")
 })
 }
  // create();

//  async function read(){
//   //  let result="hi";
//   try{
//    return await fs.readdir("./timeFiles",(err,files)=>{
//       if(err){
//         console.log("error",err);
//       }
//       else{
//         result=files;
//         //  console.log("All files inside timeFiles",result);
//         // return files;
//       }
//   })
//   // return f;
//   }
//   catch (e) {
//     return 'caught';
//   }

// }
 //read();

 app.get("/",async (request,response)=>{
   response.send(str);
 });

 app.get("/allFiles",(request,response)=>{
    fs.readdir("./timeFiles",(err,files)=>{
    if(err){
      console.log("error",err);
    }
    else{
      response.send(files)
      //  console.log("All files inside timeFiles",result);
      // return files;
    }
})
});

 app.listen(PORT,()=>console.log("App started in ",PORT));