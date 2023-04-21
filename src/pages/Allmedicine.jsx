import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from 'react-bootstrap';
import DeleteConfirmation from '../component/shared/DeleteConfirmation';
function Allmedicine() {
    const [allMedicines, setAllMedicines] = useState([]);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [itemToDeleteId, setItemToDeleteId] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:4000/medicine").then((response) => {
            setAllMedicines(response.data);
        });
      }, []);
      const openConfirmDeleteModalHandler = (id) => {
        setShowModal(true);
        setItemToDeleteId(id);
      };
     
      const hideDeleteModalHandler = () => {
        setShowModal(false);
        setItemToDeleteId(0);
      };
     
      const confirmDeleteHandler = () => {
        axios
          .delete(`http://localhost:4000/medicine/${itemToDeleteId}`)
          .then((response) => {
            setAllMedicines((previousState) => {
              return previousState.filter((_) => _.id !== itemToDeleteId);
            });
            setItemToDeleteId(0);
            setShowModal(false);
          });
      };
  return (
    <>
          <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
 <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" onClick={() => navigate("/addmedicine")}>
            Add New Medicine
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-2">
        {allMedicines.map((item) => (
          <Col key={item.id}>
            <Card >
              <Card.Img variant="top" src={item.imageUrl} style={{height:"300px",width:"300px"}} />
              <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Quantity(per Units) - {item.quantity}</Card.Text>
            <Card.Text>Price - {item.price}</Card.Text>
            <Button
                variant="primary"
                onClick={() => navigate(`/update-medicine/${item.id}`)}
            >
                Edit
            </Button>
            <Button
                  variant="danger"
                  onClick={() =>{openConfirmDeleteModalHandler(item.id)}}
                >
                  Delete
                </Button>
            </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Allmedicine;