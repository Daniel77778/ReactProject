import { data } from '../data'; // Importing data from '../data'

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) { // Checking if the product is already in the list
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 } // Increasing the quantity if the product already exists
					: item
			);
			setTotal(total + product.price * product.quantity); // Updating the total price by adding the price of the product multiplied by its quantity
			setCountProducts(countProducts + product.quantity); // Updating the count of products by adding the quantity of the product
			return setAllProducts([...products]); // Updating the list of products with the modified quantities
		}

		setTotal(total + product.price * product.quantity); // Updating the total price by adding the price of the product multiplied by its quantity
		setCountProducts(countProducts + product.quantity); // Updating the count of products by adding the quantity of the product
		setAllProducts([...allProducts, product]); // Adding the product to the list of products
	};

	return (
		<div className='container-items'>
			{data.map(product => ( // Iterating over the 'data' array and rendering each product
				<div className='item' key={product.id}> 
					<figure>
						<img src={product.img} alt={product.nameProduct} /> 
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2> 
						<p className='price'>{product.price}€</p> 
						<button onClick={() => onAddProduct(product)}> 
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
