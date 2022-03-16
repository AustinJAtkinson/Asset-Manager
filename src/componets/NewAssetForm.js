import React, { useState } from "react";
import Button from "./Button";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";

class Asset {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.guid = createUUID();
  }
}

export const NewAssetForm = ({ addNewAsset }) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && value) {
      addNewAsset(new Asset(name, value));
      setName("");
      setValue("");
    } else {
      console.log("Invalid Input");
    }
  };

  return (
    <>
      <h4>Add a new asset</h4>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingInputGrid" label="Asset Name">
            <Form.Control
              type="text"
              placeholder="Asset Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInputGrid" label="Asset Value">
            <Form.Control
              type="text"
              placeholder="Asset Value"
              onChange={handleValueChange}
              value={value}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <Button format="success" onClick={onSubmit} text="Add Asset" />
        </Col>
      </Row>
    </>
  );
};

function createUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
