import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/users`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container className="d-flex justify-content-center">
        <div className="w-75">
          <h2 className="text-center mt-5">Create Users</h2>
          <Form onSubmit={saveUser}>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="d-flex">
              <Button className="rounded-0" variant="success" type="submit">
                Save
              </Button>
              <a className="btn btn-danger rounded-0" href="/">
                Cancel
              </a>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default AddUser;
