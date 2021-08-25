import Breadcrumb from "../Components/Bread";
import Products from "../Components/Products";
import Packages from "../Components/Packages";

import { Row, Col, BDiv } from "bootstrap-4-react";

const Allproducts = () => {
  return (
    <BDiv className="page-wrapper">
      <Breadcrumb pageTitle={"Products"} pageCategory={"Stock"} />
      <Row>
        <Col col="col md-6">
          <Products />
        </Col>
        <Col col="col md-6">
          <Packages />
        </Col>
      </Row>
    </BDiv>
  );
};

export default Allproducts;
