# Cypress-POM-Automation [![Cypress-POM-Automation](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/aitrgn&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/aitrgn/runs)   [![<CircleCI>](https://circleci.com/gh/kalpeshchilka/Cypress-POM-Automation.svg?style=shield)](https://app.circleci.com/pipelines/github/kalpeshchilka)

This Project automates SauceDemo.com website using Cypress.io and Page Object Model. Also generates Mochawesome Reports.


## Pre-Requisites
- Install latest Chrome browser
- Install Node.js (6 or higher)


## Setup
- To install the project dependencies by running command: `npm install`

## Run Test
- Open the Cypress console by running command: `npm run cy:open`
- Run the test on Chrome browser in headed mode using command: ` npm run test:headed`
- Run the test on Chrome browser in headedless mode using command: `npm run test:headless`

## Mochawesome Report
- Generates mochawesome HTML reports at project directory: `/mochawesome-report/mochawesome.html`

## Other Features:
- On every code push/change to master branch it run the entire build on CircleCI and Cypress Dashboard as a pre-check
- Can also run this project on Docker using command: `sh docker-cy-run.sh`
