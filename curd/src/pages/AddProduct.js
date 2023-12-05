import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    let navigate = useNavigate();
    const formSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:9000/products", {
            title,
            price,
        })
        .then((data) => {
            console.log(data);
            navigate('/products')
        });
        
        // fetch("http://localhost:9000/products", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "Application/json",
        //     },
        //     body: JSON.stringify({
        //         title,
        //         price,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //     });
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
            <button type="submit" className="btn btn-primary">
            Add Product
            </button>
        </form>
        </>
    );
}

export default AddProduct;
