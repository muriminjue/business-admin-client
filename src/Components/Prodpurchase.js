import { Form, Col, Row, Button } from "bootstrap-4-react";
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";

const Prodpurchase = () => {
  //variables
  const url = "/api/products";
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({});
  const [measure, setMeasure] = useState([]);
  var jj = "";

  //fetch data
  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, []);
  // reveiive form data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMeasure(products.find((o) => o.id === formData.id));
  };

  if (measure) {
    jj = measure.measure;
  }

  const upData = async (event) => {
    event.preventDefault();
    const response = await axios.post(url + "/" + formData.id, formData);
    if (response) {
      setFormData({});
      swal("success!", "Record Added Suucessfully!", "success");
      document.getElementById("myform1").reset();
    }
  };

  return (
    <Form onSubmit={upData} id="myform1">
      <Row>
        <Col col="sm-auto md-3">
          <Form.Group inline>
            <label htmlFor="id" inline>
              Product Name:
            </label>
            <Form.CustomSelect
              mb="3"
              name="id"
              inline
              onChange={handleChange}
              required
            >
              <option></option>
              {products.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Form.CustomSelect>
          </Form.Group>
        </Col>
        <Col col="sm-auto md-3">
          <Form.Group inline>
            <label htmlFor="amount" inline>
              Amount in {jj} :
            </label>
            <Form.Input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter amount"
              required
              onChange={handleChange}
              inline
            />
          </Form.Group>
        </Col>
        <Col col="sm-auto md-2">
          <Form.Group inline>
            <br></br>
            <Button primary type="submit">
              Save
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Prodpurchase;
