import axios from "axios";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Card, Button, BDiv, BP } from "bootstrap-4-react";

import Newproducmod from "../Components/Newproducmod";

const Products = () => {
  //variables
  const url = "/api/products";
  const [products, setProducts] = useState([]);
  var content = null;

  //fetch data
  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res);
    });
  }, []);

  /*const refreshProd = async () => {
    await axios.get(url).then((res) => {
      setProducts(res);
    });
  };*/
  // draw table
  var columns = [
    { title: "#", render: (rowData) => rowData.tableData.id + 1 },
    { title: "Name", field: "name" },
    { title: "Description", field: "description" },
    { title: "Bulk Amount", field: "amount" },
    { title: "Measure In:", field: "measure" },
    { title: "Total Amount:", field: "total" },
  ];
  //(rowData) => rowData.amount + " " + rowData.measure
  //display content
  if (products.loading) {
    content = <BP> Loading ...</BP>;
  }
  if (products.error) {
    content = (
      <BP>
        Encountered Error. Relax, it is not your fault. kindly refresh page...
      </BP>
    );
  }

  if (products.data) {
    content = (
      <MaterialTable
        title="All company products"
        columns={columns}
        data={products.data}
        options={{
          search: false,
          exportButton: true,
          sorting: false,
          paging: false,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
        }}
      />
    );
  }

  // send to screen
  return (
    <Card style={{ height: 35 + "rem" }}>
      <Card.Header>Products</Card.Header>
      <Card.Body p="0">{content}</Card.Body>
      <Card.Footer>
        <BDiv mt="auto">
          <Button
            data-toggle="modal"
            data-target="#newproduct"
            style={{ color: "White", backgroundColor: "#01579b" }}
          >
            New Product
          </Button>
          <Newproducmod />
        </BDiv>
      </Card.Footer>
    </Card>
  );
};

export default Products;
