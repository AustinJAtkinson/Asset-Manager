import React, { useEffect, useState } from "react";
import { employeeApi } from "../restApi/employeeApi";
import { NewEmployeeForm } from "./NewEmployeeFom";
import Employee from "./Employee.js";
import Container from "react-bootstrap/Container";

function EmployeesList() {
  const [employees, setEmployees] = useState([
    { name: "", _id: "", assets: [] },
  ]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const employeesFromApi = await employeeApi.get();
    setEmployees(employeesFromApi);
  };

  const addNewEmployee = async (employee) => {
    await employeeApi.createEmployee(employee);
    fetchEmployees();
  };

  const deleteEmployee = async (employee) => {
    await employeeApi.deleteEmployee(employee);
    fetchEmployees();
  };

  const updateEmployee = async (employee) => {
    await employeeApi.updateEmployee(employee);
    fetchEmployees();
  };

  return (
    <Container>
      <NewEmployeeForm addNewEmployee={addNewEmployee} />
      <div>
        {employees?.map((employee) => (
          <Employee
            employee={employee}
            key={employee._id}
            updateEmployee={updateEmployee}
            deleteEmployee={deleteEmployee}
          />
        ))}
      </div>
    </Container>
  );
}

export default EmployeesList;
