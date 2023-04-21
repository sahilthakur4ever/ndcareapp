import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Addmedicine() {
  const medicineName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  const imageUrl = useRef("");
  const navigate = useNavigate();

  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log(setFile);
    }

  const addMedicineHandler = () => {
    var payload = {
      name: medicineName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
      imageUrl:file,
    };
    axios.post("http://localhost:4000/medicine", payload).then(() => {
      navigate("/allmedicine");
    });
  };
  return (
    <>
      <legend>Create</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={medicineName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label>Quantity(per Units)</Form.Label>
          <Form.Control type="number" ref={quantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" ref={price} />
        </Form.Group>
        <input type="file" onChange={handleChange} />
        <img src={file} />
        <Button variant="primary" type="button" onClick={addMedicineHandler}>
          Add
        </Button>
      </Form>
    </>
  );
}

export default Addmedicine;
