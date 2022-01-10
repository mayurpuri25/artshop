import React from "react";
import "../assets/css/homepage/artnetwork.css";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import artist from "../assets/images/new.jpg";

export default function ArtNetwork() {
  return (
    <div id="artnetwork">
    <div className="card">
      <Card className="outer" style={{ width: "15rem" }}>
        <Image className="artist-img" variant="top" src={artist} roundedCircle />
        <Card.Body>
          <Card.Title className="name">Shweta Malhotra</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="place">New Delhi, India</ListGroupItem>
          <ListGroupItem className="place"><a href="##">Portfolio</a></ListGroupItem>
        </ListGroup>
      </Card>
      <Card className="outer" style={{ width: "15rem" }}>
        <Image className="artist-img" variant="top" src={artist} roundedCircle />
        <Card.Body>
          <Card.Title className="name">Nitesh Mohanty</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="place">Mumbai, India</ListGroupItem>
          <ListGroupItem className="place"><a href="##">Portfolio</a></ListGroupItem>
        </ListGroup>
      </Card>
      <Card className="outer" style={{ width: "15rem" }}>
        <Image className="artist-img" variant="top" src={artist} roundedCircle />
        <Card.Body>
          <Card.Title className="name">Dayanita Singh</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="place">Ahmedabad, India</ListGroupItem>
          <ListGroupItem className="place"><a href="##">Portfolio</a></ListGroupItem>
        </ListGroup>
      </Card>
      <Card className="outer" style={{ width: "15rem" }}>
        <Image className="artist-img" variant="top" src={artist} roundedCircle />
        <Card.Body>
          <Card.Title className="name">Naman Srivastava</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="place">Indore, India</ListGroupItem>
          <ListGroupItem className="place"><a href="##">Portfolio</a></ListGroupItem>
        </ListGroup>
      </Card>
      
    </div>
    </div>
  );
}
