import { BDiv, Form, Row, Card, Col, Button } from "bootstrap-4-react";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router";

import Breadcrumb from "../Components/Bread";

const Newstaff = () => {
  const url = "/api/staff";
  const history = useHistory();
  const [firstname, setFirstname] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [natid, setNatid] = useState();
  const [designation, setDesignation] = useState();
  const [file, setFile] = useState();

  const upData = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("firstname", firstname);
    data.append("surname", surname);
    data.append("email", email);
    data.append("phone", phone);
    data.append("natid", natid);
    data.append("designation", designation);
    data.append("file", file);

    const response = await axios.post(url, data);
    if (response) {
      swal("success!", "Record Added Suucessfully!", "success");
      document.getElementById("staffform").reset();
      history.push("/allstaff");
    }
  };

  return (
    <BDiv className="page-wrapper">
      <Breadcrumb pageTitle={"New staff"} pageCategory={"Staff & Users"} />
      <Row>
        <Col col="col-12">
          <Card>
            <Card.Header>
              <h3>Register New Staff</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={upData} id="staffform">
                <Form.Group>
                  <Row>
                    <Col col="sm-auto  md-6">
                      <label htmlFor="firstname" inline>
                        First Name :
                      </label>
                      <Form.Input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Enter First Name.."
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setFirstname(value);
                        }}
                      ></Form.Input>
                    </Col>
                    <Col col="sm-auto  md-6">
                      <label htmlFor="surname" inline>
                        Surname :
                      </label>
                      <Form.Input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Enter Surname.."
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setSurname(value);
                        }}
                      ></Form.Input>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group>
                  <Row>
                    <Col col="sm-auto  md-6">
                      <label htmlFor="Email" inline>
                        Email :
                      </label>
                      <Form.Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email.."
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setEmail(value);
                        }}
                      ></Form.Input>
                    </Col>
                    <Col col="sm-auto  md-6">
                      <label htmlFor="phone" inline>
                        Phone Number :
                      </label>
                      <Form.Input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter Phone Number.."
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setPhone(value);
                        }}
                      ></Form.Input>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group>
                  <Row>
                    <Col col="sm-auto  md-6">
                      <label htmlFor="natid" inline>
                        Identification :
                      </label>
                      <Form.Input
                        type="number"
                        name="natid"
                        placeholder="National Id or Passport no..."
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setNatid(value);
                        }}
                      ></Form.Input>
                    </Col>
                    <Col col="sm-auto  md-6">
                      <label htmlFor="designation" inline>
                        Designation :
                      </label>
                      <Form.Input
                        type="text"
                        name="designation"
                        placeholder="Enter Designation.."
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setDesignation(value);
                        }}
                      ></Form.Input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <label htmlFor="staffimg" inline>
                    Staff Image:
                  </label>
                  <Form.File
                    id="staffimg"
                    name="staffimg"
                    accept=".jpeg, .png, .jpg"
                    required
                    onChange={(event) => {
                      const file = event.target.files[0];
                      setFile(file);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Button type="submit" primary style={{ width: 15 + "pc" }}>
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </BDiv>
  );
};

export default Newstaff;
