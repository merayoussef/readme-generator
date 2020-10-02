// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'project title',
        message: 'What is the name of your project? (Required)',
        validate: projectName => {
            if (projectName) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'project description',
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
        type: '',
        name: '',
        message: '',
        default: true
    },
    {
        type: '',
        name: '',
        message: '',
    }
]

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
