import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const jobstemplate = (props) => {
    const a = props.Jobs;
    const keys = Object.keys(props.Jobs);
    console.log(keys);
  return (
    <>
          {/* {console.log(props.Jobs)} */}
          
      <Card style={{ width: "18rem" }} id={props.Jobs}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.type}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default jobstemplate;
