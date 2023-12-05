import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    let {productID} = useParams();
    console.log(productID);
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch(`http://localhost:9000/products/${productID}`)
        .then((res)=> res.json())  
        .then((product) => {
            setProduct(product);
        });
    }, [])
        console.log(product);
    return (
        <>
            <h2>{product&&product.title}</h2>
            <br></br>
            <h3>Price: {product&&product.price}</h3>
            <br></br>
            <p>Description: <br></br>{product&&product.description} </p>
            <br></br>
            <img src={product&&product.image} alt="Logo" />

        </>
    )
}
export default ProductDetails;