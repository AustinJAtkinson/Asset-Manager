import React, { useState } from "react";
import Button from "./Button";
import { Row, Col, FloatingLabel, Form } from "react-bootstrap";

class Department {
  constructor(name) {
    this.name = name;
    this.assets = [];
  }
}

export const NewDepartmentForm = ({ addNewDepartment }) => {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newDepartment = new Department(name);
      addNewDepartment(newDepartment);
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
            label="New Department Name"
          >
            <Form.Control
              type="text"
              placeholder="Department"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <Button format="success" onClick={onSubmit} text="Add Department" />
        </Col>
      </Row>
    </>
  );
};
