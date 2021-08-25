import { Modal, Form, Button } from "bootstrap-4-react";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

const Newproducmod = () => {
  //declare variables
  const url = "/api/products";
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const addData = async (event) => {
    event.preventDefault();
    const response = await axios.post(url, formData);
    if (response) {
      setFormData({});
      swal("success!", "Record Added Suucessfully!", "success");
      document.getElementById("myform").reset();
    }
  };

  return (
    <Modal id="newproduct" fade>
      <Modal.Dialog>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.Close>
              <span aria-hidden="true">&times;</span>
            </Modal.Close>
          </Modal.Header>
          <Form autocomplete="off" id="myform" onSubmit={addData}>
            <Modal.Body>
              <Form.Group>
                <label htmlFor="name">Product Name:</label>
                <Form.Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter product name"
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="description">Description:</label>
                <Form.Input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Enter product descripton"
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="measure">To be measured in:</label>
                <Form.Input
                  type="text"
                  id="measure"
                  name="measure"
                  placeholder="Enter product measure"
                  required
                  onChange={handleChange}
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

export default Newproducmod;
