function ProductList({ products}) {
    if (products.length === 0) {
        return <p>No products found.</p>;
    }

    return(
        <div className="product-list">
            {products.map(product => ( 
                <div key={product.id} className="product-item">
                    <h2>{product.name}</h2>
                    <p>Category: {product.category}</p>
                    <p>Price: R{product.price}</p>
                    <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
                    </div>
            ))}
        </div>
    )
}