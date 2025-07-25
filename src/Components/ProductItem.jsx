const ProductItem = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: product.inStock ? '#fff' : '#f9f9f9'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>
        {product.name}
      </h3>
      <p style={{ margin: '4px 0', color: '#666' }}>
        <strong>Category:</strong> {product.category}
      </p>
      <p style={{ margin: '4px 0', color: '#666' }}>
        <strong>Price:</strong> R{product.price}
      </p>
      <p style={{ 
        margin: '4px 0', 
        color: product.inStock ? '#28a745' : '#dc3545',
        fontWeight: 'bold'
      }}>
        {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
      </p>
    </div>
  );
};