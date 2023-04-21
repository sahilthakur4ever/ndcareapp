import React, { useState } from "react";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Updatemedicine() {
  const medicineName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  const imageUrl ="" ;

  const { id } = useParams();

  const navigate = useNavigate();

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
      console.log(setFile);
  }

  useEffect(() => {
    axios.get(`http://localhost:4000/medicine/${id}`).then((response) => {
      medicineName.current.value = response.data.name;
      quantity.current.value = response.data.quantity;
      price.current.value = response.data.price;
      imageUrl.current.value = response.data.imageUrl;
    });
  }, []);
  const updateMedicineHandler = () => {
    var payload = {
      name: medicineName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
      imageUrl:file,
    };

    axios
      .put(`http://localhost:4000/medicine/${id}`, payload)
      .then((response) => {
        navigate("/adminhome");
      });
  };
  return (
    <>
      <legend>Update</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={medicineName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label>Quantity(KG Units)</Form.Label>
          <Form.Control type="number" ref={quantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" ref={price} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control type="file"  onChange={handleChange} />
        </Form.Group>
        <img src={file} />
   
        <Button variant="primary" type="button" onClick={updateMedicineHandler}>
          Update
        </Button>
      </Form>
    </>
  );
}

export default Updatemedicine;
