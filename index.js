const inquirer = require("inquirer");
const axios = require("axios");

const generateHTML = require("./generateHTML");
const pdf = require('html-pdf');

//User Input for github name and desired color
const questions = [
  {
    type: "input",
    message: "What is your github user name?",
    name: "username"
  },
  {
    type: 'list',
    name: 'color',
    message: 'Pick one of the following colors : ',
    choices: [
      'green',
      'blue',
      'pink',
      'red'
    ]
  }
];

//Prompt user input with questions array
inquirer.prompt(questions).then(function({ username, color }) {
  console.log(username, color);

  // Query Github with username input
  const queryUrl = `https://api.github.com/users/${username}`;

  axios.get(queryUrl).then(function(response) {
    console.log(response.data)

    // Generate html with axios response and color input and create pdf.
    pdf.create(generateHTML(response, color)).toFile('./profile.pdf', function(err, res) {
       if (err) return console.log(err);
        console.log(res); 
   });
  })
});