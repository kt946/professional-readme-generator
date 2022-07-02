// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license === 'MIT License') ? '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)'
    : (license === 'GNU GPLv3') ? '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    : (license === 'GNU AGPLv3') ? '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    : (license === 'GNU LGPLv3') ? '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    : (license === 'Mozilla Public License 2.0') ? '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)'
    : (license === 'Apache License 2.0') ? '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    : (license === 'Boost Software License 1.0') ? '[![License](https://img.shields.io/badge/License-Boost_1.0-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    : (license === 'Unlicense') ? '[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](http://unlicense.org/)'
    : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license === 'MIT License') ? 'https://opensource.org/licenses/MIT'
    : (license === 'GNU GPLv3') ? 'https://www.gnu.org/licenses/gpl-3.0'
    : (license === 'GNU AGPLv3') ? 'https://www.gnu.org/licenses/agpl-3.0'
    : (license === 'GNU LGPLv3') ? 'https://www.gnu.org/licenses/lgpl-3.0'
    : (license === 'Mozilla Public License 2.0') ? 'https://opensource.org/licenses/MPL-2.0'
    : (license === 'Apache License 2.0') ? 'https://opensource.org/licenses/Apache-2.0'
    : (license === 'Boost Software License 1.0') ? 'https://www.boost.org/LICENSE_1_0.txt'
    : (license === 'Unlicense') ? 'http://unlicense.org/'
    : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license) ? `This application is covered under the [${license}](${renderLicenseLink(license)}).`
  : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}

  ## Description
  ${renderLicenseBadge(data.license)}

  ${data.description}

  ## Table of Contents

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

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.github}

  ${data.email}
  `;
}

module.exports = generateMarkdown;
