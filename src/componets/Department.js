import React from "react";
import { NewAssetForm } from "./NewAssetForm";
import Button from "./Button";
import Assets from "./Assets";
import Card from "react-bootstrap/Card";

const Department = ({ department, updateDepartment, deleteDepartment }) => {
  const addAsset = (asset) => {
    console.log(asset);
    console.log(department);
    updateDepartment({ ...department, assets: [...department.assets, asset] });
  };

  const deleteAsset = (assetGuid) => {
    const updatedDepartment = {
      ...department,
      assets: department.assets.filter((a) => a.guid !== assetGuid),
    };
    updateDepartment(updatedDepartment);
  };

  return (
    <Card>
      <Card.Header>
        <h2 className="h2">{department.name}</h2>
        <Button
          format="danger"
          onClick={(e) => deleteDepartment(department)}
          text="Delete"
        />
      </Card.Header>
      <Card.Body>
        <NewAssetForm addNewAsset={addAsset} />
        <Assets deleteAsset={deleteAsset} department={department} />
      </Card.Body>
    </Card>
  );
};

export default Department;
