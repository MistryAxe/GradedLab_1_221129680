import React from 'react';
import ProductItem from './productItem';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div>
        <p>No products found</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Products ({products.length} found)</h2>
      <div>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;