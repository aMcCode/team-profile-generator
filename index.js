const inquirer = require("inquirer");
const { managerQuestions, employeeQuestions, mock_inputs } = require("./utils/questions.js");

const DEBUG = true;

const prompManagerQuestions = () => {
    return inquirer.prompt(managerQuestions);
};

const promptEmployeeQuestions = employee_data => {
    if(!employee_data.employeeInfo) {
        employee_data.employeeInfo = [];
    }
    return inquirer.prompt(employeeQuestions)
      .then(answer => {
        if(answer.nextStep != "Finish building my team")
            employee_data.employeeInfo.push(answer);
      if(answer.nextStep != "Finish building my team") {
        return promptEmployeeQuestions(employee_data);
      } else {
        return employee_data;
      }
    });
};

// Function call to initialize app
function init() {
    prompManagerQuestions()
      .then(promptEmployeeQuestions)
      .then(employee_data => { console.log(employee_data) })
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
