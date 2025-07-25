import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div style={{
      backgroundColor: product.inStock ? '#fff' : '#f9f9f9'
    }}>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: R{product.price}</p>
      <p style={{ 
        color: product.inStock ? '#86e59cff' : '#ec7d88ff'
      }}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductItem;