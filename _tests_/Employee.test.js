const Employee = require("../lib/Employee")

//const emp = new Employee();
const emp = new Employee("Alicia", 0, 'g@g.com');

test('can create an employee obj', () => {
    expect(emp.name).toBeTruthy();
    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(Number));
    expect(emp.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

test("can get employee's name", () => {
    expect(emp.getName()).toBeTruthy();
    expect(emp.getName()).toEqual(expect.any(String));
});

test("can get employee's ID", () => {
    expect(emp.getId()).toEqual(expect.any(Number));
});

test("can get employee's email", () => {    
    expect(emp.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

test("can get employee's role", () => {
    expect(emp.getRole()).toBe('Employee');
});
