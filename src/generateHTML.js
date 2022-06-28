const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

let managerName, manager_id, manager_email, officeNum, manager_role;
let engineers = []
let interns = [];

const getTeam = (team_data) => {

	for (let i = 0; i < team_data.length; i++) {
		let itm = team_data[i];
		if (itm && itm instanceof Manager) {
			managerName = itm.name;
			manager_id = itm.id;
			manager_email = itm.email;
			officeNum = itm.getOfficeNum();
			manager_role = itm.getRole();
		} else if (itm && itm instanceof Engineer) {
			engineers.push(itm);
		} else if (itm && itm instanceof Intern) {
			interns.push(itm);
		}
	}
};

const getEmployees = (employee_list) => {
  let names = [];
  let txt = '';

	for (let i = 0; i < employee_list.length; i++)
    names.push(employee_list[i].name)

    names.sort();

    names.forEach(itm => {
      employee_list.find(e => {
        if(e.name === itm) {

          let roleSpecificTxt = e.getRole() === "Manager" ? "Office Number" : e.getRole() === "Engineer" ? "Github" : "School";
          let roleSpecificFunction = e.getRole() === "Manager" ? e.getOfficeNum() : e.getRole() === "Engineer" ? e.getGithub() : e.getSchool();

          txt += `
          <div class="card-wrapper" >
          <div class="card-header">
            ${e.getRole()} <i class="fas fa-baby"></i>
          </div>
          <ul class="list">
            <li class="list-item">Name: ${e.getName()}</li>
            <li class="list-item">Employee ID: ${e.id}</li>
            <li class="list-item">${roleSpecificTxt}: ${roleSpecificFunction}</li>
            <li class="list-item">Email: <a href="mailto:${e.email}">${e.email}</a></li>
          </ul>
        </div>`
      }
    });
  });

  return txt;
};

const html_text = (team_data) => {
  getTeam(team_data);
  // console.log(engineers);

	return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Details</title>
    </head>
    <body>
    <div id="headerDiv">
      <h1>${managerName}'s Team</h1>
    </div>
    <main id="mainDiv">
    <div class="card-wrapper" >
    <div class="card-header">
      ${manager_role} <i class="fas fa-baby"></i>
    </div>
    <div class="card-wrapper" >
    <div class="card-header">
    <ul class="list">
      <li class="list-item">Name: ${managerName}</li>
      <li class="list-item">Employee ID: ${manager_id}</li>
      <li class="list-item">Office Number: ${officeNum}</li>
      <li class="list-item">Email: <a href="mailto:${manager_email}">${manager_email}</a></li>
    </ul>
    </div>
    </div>
      ${getEmployees(engineers)}
      ${getEmployees(interns)}
    </main>
    </body>
    </html>
    `;

};

module.exports = html_text;
