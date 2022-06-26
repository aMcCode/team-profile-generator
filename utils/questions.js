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

const mock_inputs = {

    managerName: 'Lisa',
    managerID: '1',
    managerEmail: 'lisa@gmail.com',
    managerOfficeNum: '15B',
    employeeInfo: [
        {
            nextStep: 'Add an engineer',
            employeeName: 'Alicia',
            employeeID: '342',
            employeeEmail: 'mcneila1997@gmail.com',
            github: 'aMcCode'
        },
        {
            nextStep: 'Add an intern',
            employeeName: 'Kia',
            employeeID: '379',
            employeeEmail: 'kiaj@gmail.com',
            school: 'NCCU'
        },
        {
            nextStep: 'Add an engineer',
            employeeName: 'Alicia',
            employeeID: '342',
            employeeEmail: 'mcneila1997@gmail.com',
            github: 'aMcCode'
        },
        {
            nextStep: 'Add an intern',
            employeeName: 'Heidi',
            employeeID: '235',
            employeeEmail: 'heidi@gmail.com',
            school: 'NCCU'
        },  
        {
            nextStep: 'Add an intern',
            employeeName: 'Mya',
            employeeID: '111',
            employeeEmail: 'mya@gmail.com',
            school: 'NC State'
        }   
    ]
}

module.exports = { managerQuestions, employeeQuestions, mock_inputs };