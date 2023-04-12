// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const generateREADME = ({title, descriptionOne, descriptionTwo, descriptionThree, descriptionFour, license, github, email}) => 
`# ${title}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

-What was your motivation
${descriptionOne}
-Why did you build this project?
${descriptionTwo}
-What problem does it solve?
${descriptionThree}
-What did you learn?
${descriptionFour}

## ${license}

## (${github})

## ${email}

`

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your title for README file?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description using these prepromted questions. What was your motivation?',
        name: 'descriptionOne'
      },
      {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'descriptionTwo'
      },
      {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'descriptionThree'
      },
      {
        type: 'input',
        message: 'What did you learn?',
        name: 'descriptionFour'
      },
      {
        type: 'input',
        message: 'What license did you use for repo?',
        name: 'license'
      },
      {
        type: 'input',
        message: 'What is your github repo link?',
        name: 'github'
      },
      {
        type: 'input',
        message: 'Enter email to reach you?',
        name: 'email'
      }
])
.then((answer) => {
    const index = generateREADME(answer)
     fs.writeFile("./README.md", index, (err) =>
     err ? console.log(err) : console.log('Success!'))
   });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
