import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Header = () => {
  return (
    <div className="container-header ">
      <Card className="shadow-sm rounded-4">
        <Card.Body>
          <Card.Title>Punya Masalah Lingkungan?</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button className="btn rounded-4">Lapor Disini</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Header;
