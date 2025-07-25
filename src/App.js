import React, { useState } from 'react';
import { products } from './data';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

    return matchesName && matchesCategory;
  });

  return (
    <div className="App" style={{ padding: '50px' }}>
      <h1>ShopEasy Product Catalog</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;