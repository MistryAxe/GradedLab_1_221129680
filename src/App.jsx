import { useState } from 'react'
import { products } from './data'
import Filter from './Components/Filter'
import ProductList from './Components/ProductList'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showInStock, setShowInStock] = useState(false);

  const categories = ['All', ...new Set(products.map(product => product.category))];
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesStock = !showInStock || product.inStock;

    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <>
    <div className="Filter-App" style={{ padding: '20px' }}> 
      <h1>ShopEasy Product Catalog</h1>
      <Filter 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder} 
        showInStock={showInStock} 
        setShowInStock={setShowInStock}
      />
      <ProductList products={filteredProducts} sortOrder={sortOrder} />

    </div>
    </>
  )
}

export default App
