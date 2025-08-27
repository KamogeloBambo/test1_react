import React from "react";

function ProductCard({ product }) {
  const styles = {
    card: {
      width: "200px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
    },
    image: { width: "100%", height: "200px", objectFit: "contain" },
    title: { fontWeight: "600", margin: "10px 0", color: "#333" },
    price: { color: "#007bff", fontWeight: "700", fontSize: "1.2em" },
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.price}>${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
