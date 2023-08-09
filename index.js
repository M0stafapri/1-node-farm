const express = require('express');
const mongodb = require('mongodb');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

///////////////////////////
// FILES

//blocking sync
//const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
//console.log(textIn);
//const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', textOut);
//console.log('File Written');

//Non-blocking async
//fs.readFile('./txt/start.txt', 'utf-8', (err, data1)=>{
  //  if (err) return console.log('ERROR !');


   // fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=>{
   //     console.log(data2);
   //     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3)=>{
  //          console.log(data3);

  //          fs.writeFile('./txt/final.txt',`${data2}\n${data3}`, 'utf-8',err=>{
  //              console.log('Your file has been written ');

 //           });
 //       });
//    });
//});
//console.log('Will Read This');

////////////////////

// SERVER

const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
    // Validate user input
    // Check for email uniqueness
    // Hash the password
    // Store the user data in the database
});

app.post('/login', async (req, res) => {
    // Validate user input
    // Check if the email exists in the database
    // Compare the entered password with the stored password
    // Create a user session
});

app.listen(8000, () => {
    console.log(`Listening to requests on port 8000`);
});