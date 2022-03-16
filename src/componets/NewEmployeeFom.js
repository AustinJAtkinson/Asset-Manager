import React, { useState } from "react";
import Button from "./Button";
import { Row, Col, FloatingLabel, Form } from "react-bootstrap";

class Employee {
  constructor(name) {
    this.name = name;
  }
}

export const NewEmployeeForm = ({ addNewEmployee }) => {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newEmployee = new Employee(name);
      addNewEmployee(newEmployee);
      setName("");
    } else {
      console.log("Invalid Input");
    }
  };

  return (
    <>
      <Row>
        <Col>
          <FloatingLabel
            controlId="floatingInputGrid"
            label="New Employee Name"
          >
            <Form.Control
              type="text"
              placeholder="Employee"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <Button format="success" onClick={onSubmit} text="Add Employee" />
        </Col>
      </Row>
    </>
  );
};
