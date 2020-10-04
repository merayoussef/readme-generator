const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log("Please enter your project's description!");
                return false
            }
        }
    },
    {
        type: 'checkbox',
        name: 'tableofContent',
        message: 'Table of Content:',
        choices: ["Installation", "Usage", "License", "contributing", "tests", "questions"],
        default: ["#installation", "#usage", "#license", "#contributing", "#tests", "#questions"]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of use.',
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add guideline to how other developers can contribute:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write Tests for your application and how to run them:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions about the project?',
    }
]

inquirer.prompt(questions).then(answers => {
    //user feedback
    writeToFile('README.md', (generateMarkdown(answers)))
})


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName) , data);
}
