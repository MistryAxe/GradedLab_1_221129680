function Filter({
        searchTerm,
        setSearchTerm, 
        categories,
        selectedCategory, 
        setSelectedCategory, 
        sortOrder, 
        setSortOrder, 
        showInStock, 
        setShowInStock,
}){
    return(
        <div className="filter-container">
            <input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <select 
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
            <label>
                <input 
                    type="checkbox" 
                    checked={showInStock} 
                    onChange={(e) => setShowInStock(e.target.checked)} 
                />
                Show In Stock Only
            </label>
        </div>
    )
}