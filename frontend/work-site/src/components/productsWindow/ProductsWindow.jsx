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

    const emptyBlock = <div className="empty">Изделия отсутствуют</div>;

    const productsList = (
        <ul>
            {products.map((product) => {
                return <Product key={product.id} product={product} />;
            })}
        </ul>
    );

    const loader = <Loader />;

    const content = isLoading
        ? loader
        : products.length > 0
        ? productsList
        : emptyBlock;

    console.log(content);

    return <div className="products">{content}</div>;
};

const Product = ({product}) => {
    return (
        <li>
            <h3>{product.product_name}</h3>
        </li>
    );
};

export default ProductsWindow;
