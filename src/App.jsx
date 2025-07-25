const App = () => {
  // State management using useState hooks
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Filtering logic - always filter from the original products array
  const filteredProducts = products.filter(product => {
    // Filter by name (case-insensitive)
    const matchesName = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    // Filter by stock status
    const matchesStock = !showInStockOnly || product.inStock;
    
    // Return true only if all conditions are met
    return matchesName && matchesCategory && matchesStock;
  });

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333', margin: '0' }}>
          ShopEasy Product Catalog
        </h1>
        <p style={{ color: '#666', margin: '10px 0' }}>
          Find the perfect products with our advanced filtering system
        </p>
      </header>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;