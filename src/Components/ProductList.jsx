const ProductList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        color: '#666'
      }}>
        <h3>No products found</h3>
        <p>Try adjusting your search criteria or filters.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: '15px' }}>
        Products ({products.length} found)
      </h2>
      <div>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};