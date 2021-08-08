const Intern = require("../lib/Intern")

describe("Intern", () => {

    it(`getRole() should return "Intern"`, () => {
        const value = "Intern";
        const emp = new Intern("Salvo", 1234, "Salvo@sample.com", "Sydney Uni");
        expect(emp.getRole()).toBe(value);
    });
    it("Can get school via getSchool()", () => {
        const school = "Sydney Uni";
        const emp = new Intern("Salvo", 1234, "Salvo@sample.com", school);
        expect(emp.getSchool()).toBe(school);
      });
    
});
