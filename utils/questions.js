const Manager = require('C:\\Users\\mcnei\\repos\\challenges\\team-profile-generator\\lib\\Manager');
const Engineer = require('C:\\Users\\mcnei\\repos\\challenges\\team-profile-generator\\lib\\Engineer');
const Intern = require('C:\\Users\\mcnei\\repos\\challenges\\team-profile-generator\\lib\\Intern');

const managerQuestions = [
    {
      type: "input",
      name: "managerName",
      message: "What is the team Manager's name? (Required)",
      validate: (managerName) => {
        if (managerName) {
          return true;
        } else {
          console.log("Please provide the Manager's name?");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "managerID",
        message: "What is the team Manager's ID? (Required)",
        validate: (managerID) => {
          if (managerID && !isNaN(managerID)) {
            return true;
          } else {
            console.log("Please provide the Manager's ID as a number. (Please clear any previous input.)");
            return false;
          }
        },
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter the Manager's email address. (Required)",
        validate: (managerEmail) => {
          if (
            managerEmail &&
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)
          ) {
            return true;
          } else {
            console.log("Please enter a valid email address.");
            return false;
          }
        },
    },
    {
        type: "input",
        name: "managerOfficeNum",
        message: "What is the team Manager's office number? (Required)",
        validate: (managerOfficeNum) => {
          if (managerOfficeNum) {
            return true;
          } else {
            console.log("Please the Manager's office number?");
            return false;
          }
        },
    }, 
];

const employeeQuestions = [
    {
        type: "list",
        name: "nextStep",
        message: "What would you like to do?",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building my team"
        ],
        default: "Finish building my team"
    },
    {
      type: "input",
      name: "employeeName",
      message: "What is the employee's name? (Required)",
      validate: (managerName) => {
        if (managerName) {
          return true;
        } else {
          console.log("Please provide the employee's name?");
          return false;
        }
      },
      when: (answers) => answers.nextStep != "Finish building my team"
    },
    {
        type: "input",
        name: "employeeID",
        message: "What is the team employee's ID? (Required)",
        validate: (employeeID) => {
          if (employeeID && !isNaN(employeeID)) {
            return true;
          } else {
            console.log("Please the employee's ID as a number. (Please clear any previous input.)");
            return false;
          }
        },
        when: (answers) => answers.nextStep != "Finish building my team"
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "Please enter the employee's email address. (Required)",
        validate: (managerEmail) => {
          if (
            managerEmail &&
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)
          ) {
            return true;
          } else {
            console.log("Please enter a valid email address.");
            return false;
          }
        },
        when: (answers) => answers.nextStep != "Finish building my team"
    },
    {
        type: "input",
        name: "github",
        message: "What is the employee's github name? (Required)",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please provide the employee's github name?");
            return false;
          }
        },
        when: (answers) => answers.nextStep === "Add an engineer"
    }, 
    {
        type: "input",
        name: "school",
        message: "What school does the employee attend? (Required)",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please provide the name of the school?");
            return false;
          }
        },
        when: (answers) => answers.nextStep === "Add an intern"
    }, 
];

// const mock_inputs = [
//   new Manager('Lisa', 1, 'lisa@gmail.com', '15B'),
//   new Engineer('Rocky', 4, 'rock@msn.com', 'rocCode'),
//   new Engineer('Alicia', 2, 'mcneila1997@gmail.com', 'aMcCode'),
//   new Intern('Kia', 3, 'kiaj@gmail.com', 'NCCU'),
//   new Intern('Mya', 6, 'mya@gmail.com', 'NC State'),
//   new Intern('Heidi', 5, 'heidi@gmail.com', 'NCCU')
// ]

module.exports = { managerQuestions, employeeQuestions/*, mock_inputs*/ };