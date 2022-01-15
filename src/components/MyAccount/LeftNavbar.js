import React from "react";
import {ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LeftNavbar() {
  return (
    <>
      <ListGroup className="">
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/profile'>
        <ListGroup.Item className="navlistitem">
          <i className="bx bx-user icon bx-sm p-2">
          </i>
          <span id="nav">Profile</span>
        </ListGroup.Item>
        </Link>
        <ListGroup.Item>
          <i className="bx bxs-package icon bx-sm p-2">
          </i>
            <span id="nav">Orders</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <i className="bx bx-heart icon bx-sm p-2">
          </i>
            <span id="nav">Wishlist</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <i className="bx bx-home-alt icon bx-sm p-2">
          </i>
            <span id="nav">Addresses</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <i className="bx bx-log-in icon bx-sm p-2">
          </i>
            <span id="nav">Sign out</span>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
