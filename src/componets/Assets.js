import Button from "./Button";
import { Row, Col } from "react-bootstrap";

const Assets = ({ department, deleteAsset }) => (
  <>
    {department.assets.map((asset, index) => (
      <Row key={index}>
        <Col>
          <span>
            <strong>Name: </strong>
            {asset.name}
          </span>
        </Col>
        <Col>
          <span>
            <strong>Value: </strong>
            {asset.value}
          </span>
        </Col>
        <Col>
          <Button
            format="danger"
            onClick={(e) => deleteAsset(asset.guid)}
            text="Delete"
          />
        </Col>
      </Row>
    ))}
  </>
);

export default Assets;
