const inquirer = require("inquirer");
const { managerQuestions, employeeQuestions, mock_inputs } = require("./utils/questions.js");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team_data = []

const DEBUG = true;

const prompManagerQuestions = () => {
    return inquirer.prompt(managerQuestions)
      .then(answers => {
        team_data.push(new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum));
      });
};

const promptEmployeeQuestions = () => {
    return inquirer.prompt(employeeQuestions)
      .then(answers => {
        if(answers.nextStep === "Add an engineer")
          team_data.push(new Engineer(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.github));
        if(answers.nextStep === "Add an intern")
          team_data.push(new Intern(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.school));
        if(answers.nextStep != "Finish building my team") {
          return promptEmployeeQuestions();
      }
    });
};

// Function call to initialize app
function init() {
    prompManagerQuestions()
      .then(promptEmployeeQuestions)
      .then(() => {
        //console.log(team_data);
        team_data.forEach(itm => {
          if(itm instanceof Intern)
            console.log(itm);
        });
    
       })
    //   .then(employee_data => { return generateHTML(employee_data); })
    //   .then(HTML_Txt => { return writeFile(HTML_Txt); })
      .catch(err => {
        console.log(err);
      });
}

// TEST Function call to initialize app
async function testInit() {
    // const mockTxt = generateMarkdown(mock_inputs)
    // await writeFile(mockTxt);
    console.log(mock_inputs);
  };
  
  if(!DEBUG)
    init();
  else
    testInit();
