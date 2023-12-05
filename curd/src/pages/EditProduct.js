import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProduct() {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    let navigate = useNavigate();
    const formSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:9000/products/`)
            .then((res) => {
                res.json();
            })
        axios.post(`http://localhost:9000/products/${product.id}`, {
            title,
            price,
            description,
        })
        .then((data) => {
            console.log(data);
            navigate('/products')
        });
        
    };
    return (
        <>
        <h1>Add Product</h1>
        <form onSubmit={formSubmit}>
            <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">
                Title
            </label>
            <input
                type="text"
                className="form-control"
                id="productTitle"
                placeholder="product Title"
                aria-describedby="Product Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
                Price
            </label>
            <input
                type="number"
                className="form-control"
                id="productPrice"
                placeholder="product Price"
                aria-describedby="Product Price"
                onChange={(e) => setPrice(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
                Description
            </label>
            <input
                type="text"
                className="form-control"
                id="productDescription"
                placeholder="product Description"
                aria-describedby="Product Description"
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <button type="submit" className="btn btn-primary">
            Edit Product
            </button>
        </form>
        </>
    );
}

export default EditProduct;
