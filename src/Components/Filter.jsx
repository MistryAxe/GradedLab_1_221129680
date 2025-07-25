const SearchBar = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, showInStockOnly, setShowInStockOnly }) => {
  const categories = ["All", "Clothing", "Shoes", "Accessories", "Furniture"];

  return (
    <div style={{ 
      marginBottom: '20px', 
      padding: '20px', 
      backgroundColor: '#f5f5f5', 
      borderRadius: '8px' 
    }}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Search by Name:
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Filter by Category:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={(e) => setShowInStockOnly(e.target.checked)}
            style={{ marginRight: '8px', transform: 'scale(1.2)' }}
          />
          Show only in-stock items
        </label>
      </div>
    </div>
  );
};