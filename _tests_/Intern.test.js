const Intern = require("../lib/Intern")

//const intern = new Intern();
const intern = new Intern("Alicia", 2, 'a@a.com', 'School of Life');

test('can create a intern obj', () => {
    expect(intern.name).toBeTruthy();
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

test("can get intern's name", () => {
    expect(intern.getName()).toBeTruthy();
    expect(intern.getName()).toEqual(expect.any(String));
});

test("can get intern's ID", () => {
    expect(intern.getId()).toEqual(expect.any(Number));
});

test("can get intern's email", () => {    
    expect(intern.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

test("can get intern's school", () => {
    expect(intern.getSchool()).toBeTruthy();
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("can get intern's role", () => {
    expect(intern.getRole()).toBe('Intern');
});