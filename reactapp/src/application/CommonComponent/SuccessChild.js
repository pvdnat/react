import React from "react";
import SuccessStory from "./SuccessStory";

{/* 6. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success*/}
let SuccessChild = (props) => {
    return (
        <>
            <h2>SuccessChild Details</h2>
            <p>Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <SuccessStory story={props.successStory} generateRandomValue={props.generateRandomValue}/>
        </>
    );
}

export default SuccessChild;