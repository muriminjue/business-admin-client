import { BDiv, Form, Row, Card, BP, Col, Button } from "bootstrap-4-react";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router";

import Breadcrumb from "../Components/Bread";

const Newuser = () => {
  const url = "/api/user";
  const url1 = "/api/staff";
  const history = useHistory();

  var username = "";

  const [staff, setStaff] = useState([]);
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState([]);

  //fetch data
  useEffect(() => {
    axios.get(url1).then((res) => {
      setStaff(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
    if (formData.staffId) {
      setEmail(staff.find((o) => o.oid === formData.staffId));
      console.log(email);
    } else {
      console.log("null");
    }
  };

  const addData = async (event) => {
    event.preventDefault();
    const response = await axios.post(url, formData);
    if (response) {
      setFormData({});
      swal("success!", "Record Added Sucessfully!", "success");
      document.getElementById("myform0").reset();
    }
  };
  if (email) {
    username = email.email;
  }
  return (
    <BDiv className="page-wrapper">
      <Breadcrumb pageTitle={"New User"} pageCategory={"Staff & Users"} />
      <Row justifyContent="sm-auto md-center">
        <Col col="sm-12 md-7">
          <Card w="auto">
            <Card.Header>
              <h3>Register New User</h3>
              <BP text="muted">all users must be staff </BP>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={addData} id="staffform">
                <Form.Group inline>
                  <label htmlFor="Product" inline>
                    Staff Name
                  </label>
                  <Form.CustomSelect
                    mb="3"
                    name="staffId"
                    inline
                    onChange={handleChange}
                    required
                  >
                    <option></option>
                    {staff.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.fname} {item.surname}
                      </option>
                    ))}
                  </Form.CustomSelect>
                </Form.Group>
                <Form.Group inline>
                  <label htmlFor="username" inline>
                    Username
                  </label>
                  <Form.Input
                    type="email"
                    id="username"
                    name="username"
                    value={username}
                    placeholder={username}
                    required
                    onChange={handleChange.bind(this)}
                    inline
                    readonly
                  />
                </Form.Group>

                <Form.Group inline>
                  <label htmlFor="password" inline>
                    Password
                  </label>
                  <Form.Input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Enter quantity amount"
                    required
                    onChange={handleChange}
                    pattern=".{8,}"
                    inline
                  />
                </Form.Group>
                {/*<Form.Group inline>
                <label htmlFor="password" inline>
                  tier
                </label>
                <Form.CustomSelect
                  mb="3"
                  name="permission"
                  inline
                  onChange={handleChange}
                  required
                >
                  <option key="1" value="1">
                    1
                  </option>
                  <option key="2" value="2">
                    2
                  </option>
                  <option key="3" value="3">
                    3
                  </option>
                </Form.CustomSelect>
              </Form.Group>*/}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </BDiv>
  );
};

export default Newuser;
