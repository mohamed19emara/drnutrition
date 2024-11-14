// src/components/ProductRecommendations.js
import React from 'react';
import './products.css';

const products = [
  { name: "Multivitamins", description: "Supports daily health.", link: "#" },
  { name: "Protein Powder", description: "For muscle gain.", link: "#" },
  { name: "Omega-3 Supplements", description: "For heart health.", link: "#" }
];

const ProductRecommendations = () => {
  return (
    <div className="product-card">
      <h2>Recommended Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer">Buy Now</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRecommendations;
