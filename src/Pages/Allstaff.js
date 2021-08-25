import { BDiv, Row, Card, Col, Button, BP } from "bootstrap-4-react";
import axios from "axios";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

import Breadcrumb from "../Components/Bread";

const Allstaff = () => {
  const url = "/api/staff";
  const [staff, setStaff] = useState([]);
  var content = null;
  const history = useHistory();

  //fetch data
  useEffect(() => {
    axios.get(url).then((res) => {
      setStaff(res);
    });
  }, []);

  var columns = [
    { title: "#", render: (rowData) => rowData.tableData.id + 1 },
    {
      title: "Avatar",
      field: "imageUrl",
      render: (rowData) => (
        <img
          src={"uploads/images/" + rowData.image}
          style={{ width: 50, height: 50, borderRadius: "50%" }}
          alt="staff"
        />
      ),
      filtering: false,
      sorting: false,
    },
    { title: "First Name:", field: "fname", filtering: false },
    { title: "Surname:", field: "surname", filtering: false },
    { title: "Email:", field: "email", filtering: false },
    { title: "Phone:", field: "phone", filtering: false },
    { title: "Designation", field: "designation" },
  ];

  if (staff.loading) {
    content = <BP> Loading ...</BP>;
  }
  if (staff.error) {
    content = (
      <BP>
        Encountered Error. Relax, it is not your fault. kindly refresh page...
      </BP>
    );
  }

  if (staff.data) {
    content = (
      <MaterialTable
        title="All company product staff"
        columns={columns}
        data={staff.data}
        options={{
          filtering: true,
          search: false,
          exportButton: true,
          sorting: true,
          paging: false,
          padding: "dense",
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
        }}
      />
    );
  }

  return (
    <BDiv className="page-wrapper">
      <Breadcrumb pageTitle={"All staff"} pageCategory={"Staff & Users"} />
      <Row m="2">
        <Col col="col-12">
          <Button
            onClick={(e) => {
              e.preventDefault();
              history.push("/newstaff");
            }}
            primary
          >
            Add A New Staff
          </Button>
        </Col>
      </Row>
      <Row>
        <Col col="col-12">
          <Card>
            <Card.Header>
              <h3>All Staff</h3>
            </Card.Header>
            <Card.Body>{content}</Card.Body>
          </Card>
        </Col>
      </Row>
    </BDiv>
  );
};

export default Allstaff;
