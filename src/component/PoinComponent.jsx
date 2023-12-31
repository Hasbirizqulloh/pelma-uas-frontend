import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const PoinComponent = () => {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Celengan Poin</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Tambah Poin</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#ad">Riwayat</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Tempat Untuk Menukar Poin dan Hadiah</Card.Title>
        <Card.Text>Fitur Ini masih dalam tahap pengembangan</Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Card>
  );
};

export default PoinComponent;
