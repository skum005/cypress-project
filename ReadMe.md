# Cypress Project

## Setting up a project

### Pre-requisites: 
    - Make sure nodejs is installed
    - Make sure VS Code IDE is installed

### Create NPM project and install Cypress
    - create a node project using the below command and enter required details
    ```npm init```
    - add cypress dependency using the command below 
    ```npm install cypress --save-dev```
    - make sure the package.json is updated with cypress dependencies
    - open cypress test runner using the command below
    ```npx cypress open``` 
    - Select E2E tests options in the test runner and click continue in the next screen
    - Make sure required cypress files/folders are created in your project
        - cypress.config.js
        - cypress/fixtures folder
        - cypress/support folder
            - command.js and e2e.js files in support folder
    - In the next screen of Cypress test runner, select a browser to start creating your tests
    - Click on create a new spec option on cypress test runner and give a name to your first spec file
    - ensure cypress/e2e folder is created in the project post and the spec file must be saved under this folder

### Update cypress.config.js

    Changes to cypress.config.js purely depends user requirement. Below are few examples of basic config changes. The default config can be found in project settings screen(settings -> project settings -> resolved configuration section) of cypress test runner
        
    - spec pattern
        - for .js spec files the following spec pattern can be used ```specPattern : 'cypress/e2e/**/*.{js,jsx,ts,tsx}'```
        - for bdd feature files the following spec pattern can be used ```specPattern : 'cypress/e2e/**/*.{js,jsx,ts,tsx}'```
    - reporting plugins
        - cypress-mochawesome-reporter is one of the famous reporting plugins that can be used. Follow the [official documentation](https://www.npmjs.com/package/cypress-mochawesome-reporter) to set up the plugin. Below is the sample set up. 
    - default timeout
    - url
    - screenshots
    - videos        