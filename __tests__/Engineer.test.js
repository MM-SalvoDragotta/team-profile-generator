const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it(`getRole() should return Engineer`, () => {
        const value = "Engineer";
        const emp = new Engineer("Salvo", 1234, "Salvo@sample.com", "MM-SalvoDragotta");
        expect(emp.getRole()).toBe(value);
    });

    it("Can get GitHub username via getGithub()", () => {
        const github = "GHuser";
        const emp = new Engineer("Salvo", 1234, "Salvo@sample.com", github);
        expect(emp.getGithub()).toBe(github);
    });

});
