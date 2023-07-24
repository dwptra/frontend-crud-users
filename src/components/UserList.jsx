import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((result) => {
      setUsers(result);
    });
  }, []);

  const getUsers = async () => {
    const userData = await axios.get(`${baseUrl}/users`);
    return userData.data;
  };

  const deleteUser = async (id) => {
    try {
      const confirm = window.confirm("Yakin ingin menghapus data ini?");
      if (confirm) {
        await axios.delete(`${baseUrl}/users/${id}`);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-5">User List</h1>
            <a
              className="btn btn-success my-2 rounded-0"
              href="/createform"
            >
              Add New
            </a>
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                      <a
                        className="btn btn-primary rounded-0"
                        href={`/editform/${user.id}`}
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="btn btn-danger rounded-0"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserList;
