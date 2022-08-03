// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // This function uses conditional (ternary) operators to generate license badges
  return (license === 'MIT' || license === 'Unlicense') ? `[![License](https://img.shields.io/badge/License-${license}-blue)]`
    : (license === 'GPL-3.0') ? `[![License](https://img.shields.io/badge/License-GPL--3.0-blue)]`
    : (license === 'AGPL-3.0') ? `[![License](https://img.shields.io/badge/License-AGPL--3.0-blue)]`
    : (license === 'LGPL-3.0') ? `[![License](https://img.shields.io/badge/License-LGPL--3.0-blue)]`
    : (license === 'MPL-2.0') ? `[![License](https://img.shields.io/badge/License-MPL--2.0-blue)]`
    : (license === 'Apache-2.0') ? `[![License](https://img.shields.io/badge/License-Apache--2.0-blue)]`
    : (license === 'BSL-1.0') ? `[![License](https://img.shields.io/badge/License-BSL--1.0-blue)]`
    : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license) ? `(https://opensource.org/licenses/${license})`
  : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license) ? `This application is covered under the [${license} license]${renderLicenseLink(license)}.`
  : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation

  How to install:

  ${data.installation}

  ## Usage

  How to use:

  ${data.usage}

  ## Contributing

  How to contribute:

  ${data.contribution}

  ## Tests

  How to test:

  ${data.tests}

  ## Credits
  
  Special thanks to these developers:

  ${data.credits}

  ## Questions

  You can reach me at the following links for questions, issues, or suggestions regarding the application.

  - GitHub: https://github.com/${data.github}

  - Email: ${data.email}

  ## License

  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;
