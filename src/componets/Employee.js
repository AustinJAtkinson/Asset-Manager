import React from "react";
import Button from "./Button";
import Card from "react-bootstrap/Card";

const Employee = ({ employee, updateEmployee, deleteEmployee }) => {
  return (
    <Card>
      <Card.Header>
        <h2 className="h2">{employee.name}</h2>
        <Button
          format="danger"
          onClick={(e) => deleteEmployee(employee)}
          text="Delete"
        />
      </Card.Header>
    </Card>
  );
};

export default Employee;
