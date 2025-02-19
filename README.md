# **My Cypress Automation**  

This project utilizes **Cypress** to automate the testing of a **login feature** and a **user update feature**. Cypress is a **JavaScript-based end-to-end testing framework** that allows developers to write and execute tests in a real browser.  

## **Prerequisites**  
Before installing the project, ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (LTS version recommended)  
- [npm](https://www.npmjs.com/) (comes with Node.js)  

## **Installation**  
To install the dependencies, run the following commands:  

```bash
npm install 
npm install chance
```

**Note**:
**The Chance.js library is required for generating random test data.**

# **Running the Tests**
You can execute the Cypress tests in two different ways:

**1. Running Cypress UI (Interactive Mode)**
```bash
npx cypress open
```
This opens the Cypress Test Runner, allowing you to run tests interactively.

**2. Running Tests via Command Line (Headless Mode)**
```bash
npx cypress run
```
This runs the tests in the terminal without opening the Cypress UI.

