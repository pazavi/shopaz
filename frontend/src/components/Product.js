import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="card my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as="div">
        <Rating
          value={product.rating}
          text={
            product.numReviews === 1
              ? ` ${product.numReviews} review`
              : ` ${product.numReviews} reviews`
          }
        />
      </Card.Text>
      <Card.Text as="h3">
        ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Card.Text>
    </Card>
  );
};

export default Product;
