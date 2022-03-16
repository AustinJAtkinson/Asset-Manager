const EMPLOYEE_ENDPOINT =
  "https://crudcrud.com/api/101a2e2292e04cd68b028ef44b51e92c/employees";

class EmployeeApi {
  get = async () => {
    try {
      const resp = await fetch(EMPLOYEE_ENDPOINT);
      return await resp.json();
    } catch (e) {
      console.log(e);
    }
  };
  createEmployee = async (employee) => {
    try {
      const resp = await fetch(EMPLOYEE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(employee),
        headers: { "Content-Type": "application/json" },
      });
      return await resp.json();
    } catch (e) {
      console.log(e);
    }
  };
  deleteEmployee = async (employee) => {
    try {
      await fetch(`${EMPLOYEE_ENDPOINT}/${employee._id}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export const employeeApi = new EmployeeApi();
