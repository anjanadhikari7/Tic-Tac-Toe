import React from "react";
import { Button } from "react-bootstrap";

function Square({ value, onClick }) {
  return (
    <Button variant="outline-primary" className="square" onClick={onClick}>
      {value}
    </Button>
  );
}

export default Square;
