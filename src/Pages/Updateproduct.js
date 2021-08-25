import { BDiv, Button, Row, Card, Collapse, Col } from "bootstrap-4-react";

import Breadcrumb from "../Components/Bread";
import Newproducmod from "../Components/Newproducmod";
import Prodpurchase from "../Components/Prodpurchase";
import Newpackagemod from "../Components/Newpackage";

const Updateproduct = () => {
  return (
    <BDiv className="page-wrapper">
      <Breadcrumb pageTitle={"Update stock"} pageCategory={"Stock"} />
      <Row p="1" m="2">
        <Button m="2" primary data-toggle="modal" data-target="#newproduct">
          New Product
        </Button>
        <Button m="2" primary data-toggle="modal" data-target="#newpackage">
          New Package
        </Button>
        <Newproducmod />
        <Newpackagemod />
      </Row>

      <Row m="1" id="accordionExample">
        <Col col="col-12">
          <Card>
            <Card.Header mb="0">
              <Collapse.Button
                link
                target="#collapseOne"
                id="headingOne"
                aria-expanded="false"
              >
                <h3> Product Purchase</h3>
              </Collapse.Button>
            </Card.Header>
            <Collapse
              id="collapseOne"
              show
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <Card.Body>
                <Prodpurchase />
              </Card.Body>
            </Collapse>
          </Card>
        </Col>
      </Row>
    </BDiv>
  );
};

export default Updateproduct;
