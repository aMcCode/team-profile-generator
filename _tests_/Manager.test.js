const Manager = require("../lib/Manager")

//const manager = new Manager();
const manager = new Manager("Lisa", 1, 'x@x.com', '1432M');

test('can create a manager obj', () => {
    expect(manager.name).toBeTruthy();
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

test("can get manager's name", () => {
    expect(manager.getName()).toBeTruthy();
    expect(manager.getName()).toEqual(expect.any(String));
});

test("can get manager's ID", () => {
    expect(manager.getId()).toEqual(expect.any(Number));
});

test("can get manager's email", () => {    
    expect(manager.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

test("can get manager's office number", () => {
    expect(manager.getOfficeNum()).toBeTruthy();
    expect(manager.getOfficeNum()).toEqual(expect.any(String));
});

test("can get manager's role", () => {
    expect(manager.getRole()).toBe('Manager');
});