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
        //TODO: Check if is int
        type: "input",
        name: "managerID",
        message: "What is the team Manager's ID? (Required)",
        validate: (managerID) => {
          if (managerID) {
            return true;
          } else {
            console.log("Please the Manager's ID?");
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
        //TODO: Check if is int
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
        //TODO: Check if is int
        type: "input",
        name: "employeeID",
        message: "What is the team employee's ID? (Required)",
        validate: (employeeID) => {
          if (employeeID) {
            return true;
          } else {
            console.log("Please the employee's ID?");
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

const mock_inputs = [
  {
    type: 'Manager',
    name: 'Lisa',
    id: '1',
    email: 'lisa@gmail.com',
    officeNumber: '15B'
  },
  {
    type: 'Engineer',
    name: 'Alicia',
    id: '342',
    email: 'mcneila1997@gmail.com',
    github: 'aMcCode'
  },
  {
    type: 'Intern',
    name: 'Kia',
    id: '379',
    email: 'kiaj@gmail.com',
    school: 'NCCU'
  },
  {
    type: 'Engineer',
    name: 'Alicia',
    id: '342',
    email: 'mcneila1997@gmail.com',
    github: 'aMcCode'
  },
  {
    type: 'Intern',
    name: 'Heidi',
    id: '235',
    email: 'heidi@gmail.com',
    school: 'NCCU'
  },
  {
    type: 'Intern',
    name: 'Mya',
    id: '111',
    email: 'mya@gmail.com',
    school: 'NC State'
  }
]

module.exports = { managerQuestions, employeeQuestions, mock_inputs };