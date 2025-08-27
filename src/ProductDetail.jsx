import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Products</Link>
      <div style={{ marginTop: "20px" }}>
        <img src={product.image} alt={product.title} style={{ width: "300px" }} />
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;