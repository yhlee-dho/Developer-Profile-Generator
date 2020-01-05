# Developer-Profile-Generator

Summary

This is a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command: node index.js. The user will be prompted for a GitHub Username and favorite color, which will be used as the background color for cards. The PDF will be populated with the following:

  Profile image
  User -
    name
    bio
    Number of public repositories
    Number of followers
    Number of GitHub stars
    Number of users following
  Links -
    User location via Google Maps
    User GitHub profile
    User blog



Built With

  Node.js - Used for package json and to run js code on terminal for server-side scripting.
  Axios - npm package installed by node used to make a request to GitHub api.
  Inquirer - npm package installed by node used to promt user for GitHub authentication and favorite color to style thier profile.
  Html-pdf - Used to dynamically populate the style and structure of the user profile.
  jQuery - Used to create functions as well as responses returned from axios call.
  javascript - Used to write server side script that executes the funcitons which prompts the user and generates the html file.
  CSS - Styles html elements in pdf.
  GitHub - Hosts repository that can be deployed to GitHub Pages.
  HTML - Written in javascript to be run with node.
  Boostrap - Used bootstrap col and row CSS presets to construct pdf framework.



Instructions

  After clone
    in terminal install inquirer, axios, html-pdf with npm i
  After installing npms
    in terminal use node index.js to run the generator.
    type in the requested user name
  Pdf will generate in folder as profile.pdf

https://github.com/yhlee-dho/Developer-Profile-Generator/blob/master/profileGif.gif
  
