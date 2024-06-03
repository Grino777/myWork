import { useEffect, useState } from 'react';

import Loader from '../loader/Loader';

import { getAllProducts } from '../../services/DbConnect';
import './productsWindow.scss';

const ProductsWindow = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            const data = await getAllProducts();
            setProducts(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="products">
            {isLoading ? (
                <Loader />
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.product_name}</h3>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductsWindow;
