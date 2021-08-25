import { Form, Modal, Button } from "bootstrap-4-react";
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";

const Newpackagemod = () => {
  //variables
  const url3 = "/api/packages";
  const url2 = "/api/products";
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({});
  const [measure, setMeasure] = useState([]);
  var jj = "";

  //fetch data
  useEffect(() => {
    axios.get(url2).then((res) => {
      setProducts(res.data);
    });
  }, []);

  // reveiive form data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMeasure(products.find((o) => o.oid === formData.oid));
  };

  const addData = async (event) => {
    event.preventDefault();
    const response = await axios.post(url3, formData);
    if (response) {
      setFormData({});
      swal("success!", "Record Added Sucessfully!", "success");
      document.getElementById("myform0").reset();
    }
  };
  if (measure) {
    jj = measure.measure;
  }
  return (
    <Modal id="newpackage" fade>
      <Modal.Dialog>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Add Packges</Modal.Title>
            <Modal.Close>
              <span aria-hidden="true">&times;</span>
            </Modal.Close>
          </Modal.Header>
          <Form autocomplete="off" id="myform0" onSubmit={addData}>
            <Modal.Body>
              <Form.Group inline>
                <label htmlFor="Product" inline>
                  Product Name:
                </label>
                <Form.CustomSelect
                  mb="3"
                  name="product"
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

              <Form.Group inline>
                <label htmlFor="quantity" inline>
                  Quantity in {jj}:
                </label>
                <Form.Input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="Enter quantity amount"
                  required
                  onChange={handleChange}
                  inline
                />
              </Form.Group>

              <Form.Group inline>
                <label htmlFor="price" inline>
                  price in KSh:
                </label>
                <Form.Input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter price..."
                  required
                  onChange={handleChange}
                  inline
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button primary type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Content>
      </Modal.Dialog>
    </Modal>
  );
};

export default Newpackagemod;
