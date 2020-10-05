// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 

  ${data.description}


  ## Table of Content 

  ${data.tableofContent} 
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

  
  

  ## Installation 

  ${data.installation}


  ## Usage 

  ${data.usage}


  ## License 

  ${data.license}


  ## Contributing 

  ${data.contributing}


  ## Tests 

  ${data.tests}

  
  ## Questions 

  ${data.questions}
`
};

module.exports = generateMarkdown;


