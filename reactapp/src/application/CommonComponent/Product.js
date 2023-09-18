import React from "react";

{/* //9. create Product component to accept ProductName and ProductPrice */}
let Product = (props) => {
    return (
        <>
            <h2>Product Details</h2>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
        </>
    );
}

export default Product;