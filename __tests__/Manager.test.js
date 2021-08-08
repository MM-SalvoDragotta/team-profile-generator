const Manager = require("../lib/Manager");

describe("Manager", () => {

    it(`getRole() should return "Manager"`, () => {
        const value = "Manager";
        const emp = new Manager("Salvo", 1234, "Salvo@sample.com", 1234);
        expect(emp.getRole()).toBe(value);
    });
    it("Can set office number via constructor argument", () => {
        const office = 1234;
        const emp = new Manager("Salvo", 1234, "Salvo@sample.com", office);
        expect(emp.officeNumber).toBe(office);
      });

});