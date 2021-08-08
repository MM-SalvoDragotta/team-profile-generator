const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const emp  = new Employee();
        expect(typeof emp).toBe("object");
    });
    it("Can get name via getName()", () => {
        const name = "Salvo";
        const emp = new Employee(name);
        expect(emp.getName()).toBe(name);
      });
    it("Can get email via getEmail()", () => {
    const email = "Salvo@sample.com";
    const emp = new Employee("Salvo", 1234, email);
    expect(emp.getEmail()).toBe(email);
    });
    it(`getRole() should return Employee`, () => {
        const role = "Employee";
        const emp = new Employee("Salvo", 1234, "Salvo@sample.com");
        expect(emp.getRole()).toBe(role);
      });
});


