import axios from "axios";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Card, Button, BDiv, BP } from "bootstrap-4-react";

import Newpackagemod from "../Components/Newpackage";

const Packages = () => {
  //variables
  const url = "/api/packages";
  const [packages, setPackges] = useState([]);
  var content = null;

  //fetch data
  useEffect(() => {
    axios.get(url).then((res) => {
      setPackges(res);
    });
  }, []);

  // draw table
  var columns = [
    { title: "#", render: (rowData) => rowData.tableData.id + 1 },
    { title: "Product", field: "Product.name" },
    { title: "Package Quantity", field: "quantity", filtering: false },
    { title: "Measure In:", field: "Product.measure", filtering: false },
    { title: "Pieces Available", field: "number", filtering: false },
    { title: "Price in KSh", field: "price", filtering: false },
  ];

  if (packages.loading) {
    content = <BP> Loading ...</BP>;
  }
  if (packages.error) {
    content = (
      <BP>
        Encountered Error. Relax, it is not your fault. kindly refresh page...
      </BP>
    );
  }

  if (packages.data) {
    content = (
      <MaterialTable
        title="All company product packages"
        columns={columns}
        data={packages.data}
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
    <Card style={{ height: 35 + "rem" }}>
      <Card.Header>Products</Card.Header>
      <Card.Body p="0">{content}</Card.Body>
      <Card.Footer>
        <BDiv mt="auto">
          <Button
            data-toggle="modal"
            data-target="#newpackage"
            style={{ color: "White", backgroundColor: "#01579b" }}
          >
            New Package
          </Button>
          <Newpackagemod />
        </BDiv>
      </Card.Footer>
    </Card>
  );
};

export default Packages;
