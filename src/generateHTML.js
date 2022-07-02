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

          let roleSpecificTxt = e.getRole() === "Engineer" ? "Github" : "School";
          let roleSpecificFunction = e.getRole() === "Engineer" ? `<a href="https://github.com/${e.getGithub()}">${e.getGithub()}</a>` : e.getSchool();
          let favacon = e.getRole() === "Engineer" ? `<i class="fas fa-laptop-code"></i>` : `<i class="fas fa-user-graduate"></i>`;

          txt += `
          <div class="four columns">
          <div class="card-header">
            ${e.getName()}<br/>
            ${e.getRole()} ${favacon}
          </div>
          <div class="card-body">
          <ul class="list">
            <li class="list-item"><span>Employee ID:</span> ${e.id}</li>
            <li class="list-item"><span>${roleSpecificTxt}:</span> ${roleSpecificFunction}</li>
            <li class="list-item"><span>Email:</span> <a href="mailto:${e.email}">${e.email}</a></li>
          </ul>
        </div>
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
      <link rel="stylesheet" href="normalize.css">
      <link rel="stylesheet" href="skeleton.css">
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    </head>
    <body>
    <section class="u-full-width">
    <div class="page-header"><h1>${managerName}'s Team</h1></div>
        <div class="container">
          <div class="row">
            <div class="four columns">
              <div class="card-header">
              ${managerName}<br/>
              ${manager_role} <i class="fas fa-glasses"></i>
              </div>
              <div class="card-body" >
                <ul class="list">
                  <li class="list-item"><span>Employee ID:</span> ${manager_id}</li>
                  <li class="list-item"><span>Office Number:</span> ${officeNum}</li>
                  <li class="list-item"><span>Email:</span> <a href="mailto:${manager_email}">${manager_email}</a></li>
                </ul>
              </div>
            </div>
            ${getEmployees(engineers)}
            ${getEmployees(interns)}
          </div> <!-- row -->
        </div>
   </section>
  </body>
  </html>
    `;

};

module.exports = html_text;
