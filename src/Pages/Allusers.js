import { BDiv, Row, Card, Col, Button, BP } from "bootstrap-4-react";
import axios from "axios";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";

import Breadcrumb from "../Components/Bread";
const Allusers = () => {
  const url = "/api/staff";
  const [staff, setStaff] = useState([]);
  var content = null;

  //fetch data
  useEffect(() => {
    axios.get(url).then((res) => {
      setStaff(res);
    });
  }, []);
  return (
    <BDiv className="page-wrapper">
      <Breadcrumb pageTitle={"All users"} pageCategory={"Staff & Users"} />
    </BDiv>
  );
};

export default Allusers;
