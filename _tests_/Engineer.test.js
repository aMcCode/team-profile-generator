const Engineer = require("../lib/Engineer")

//const engineer = new Engineer();
const engineer = new Engineer("Rachel", 3, 'r@r.com', 'aMcCode');

test('can create a engineer obj', () => {
    expect(engineer.name).toBeTruthy();
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

test("can get engineer's name", () => {
    expect(engineer.getName()).toBeTruthy();
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("can get engineer's ID", () => {
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test("can get engineer's email", () => {    
    expect(engineer.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

test("can get engineer's github", () => {
    expect(engineer.getGithub()).toBeTruthy();
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("can get engineer's role", () => {
    expect(engineer.getRole()).toBe('Engineer');
});