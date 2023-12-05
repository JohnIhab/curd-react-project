import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Products.css';
import Swal from 'sweetalert2';
import ProductDetails from "./ProductDetails";
import EditProduct from "./EditProduct";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () =>{
        fetch("http://localhost:9000/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    };

    // console.log(products);
    const deleteProduct = (product) => {
        Swal.fire({
            title: `Are You Sure To Delete ${product.title}?`,
            showCancelButton: true
        }).then ((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/products/${product.id}`, {
                    method: "DELETE"
                })
                .then((res) => res.json())
                .then(() => {
                    getAllProducts();
                })
            }
        });
};

    const editProduct = (product) => {
        fetch(`http://localhost:9000/products/${product.id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }
    return (
        <>
            <Link to={'/products/add'} className="btn btn-success mt-3">Add New Product</Link>
            <table className="table table-striped mt-5 products-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Opreations</th>
                    </tr>
                </thead>
                <tbody>
                    {products?(products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => {deleteProduct(product)}}>Delete</button>
                                    <Link to={`${product.id}`} className="btn btn-info btn-sm">View</Link>
                                    <button className="btn btn-primary btn-sm" onClick={() => {EditProduct(product)}}>Edit</button>
                                </td>
                            </tr>
                        );
                    })):(console.log("hello"))}
                </tbody>
            </table>
        </>
    );
}
export default Products;