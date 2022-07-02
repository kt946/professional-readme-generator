// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter your project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('You need to enter installation instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to enter usage information for your project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: [
            'MIT', 
            'GPL-3.0', 
            'AGPL-3.0', 
            'LGPL-3.0', 
            'MPL-2.0', 
            'Apache-2.0', 
            'BSL-1.0', 
            'Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines for your project. (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for your project. (Required)',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter test instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            // On fail, reject promise and send error to '.catch()' method
            if (err) {
                reject(err);
                return;
            }
            // On success, resolve promise and send message data to '.then()' method
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    // generate markdown of README
    .then((data) => {
        return generateMarkdown(data);
    })
    // write README file to dist folder
    .then((markdown) => {
        return writeToFile("README.md", markdown);
    })
    // display response message
    .then((writeToFileResponse) => {
        console.log(writeToFileResponse.message);
    })
    // display error
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
