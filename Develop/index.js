// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const generateREADME = ({title, description, license, github, email}) => 
`# ${title}

## ${description}

## ${license}

# ${github}

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
        message: 'What is the description of your repo?',
        name: 'description'
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
     fs.writeFile("README.md", index, (err) =>
     err ? console.log(err) : console.log('Success!'))
   });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
