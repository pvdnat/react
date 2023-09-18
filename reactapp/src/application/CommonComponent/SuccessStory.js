import React from "react";

{/* 7. create SuccessStory as another component, pass this as props in SuccessChild from Success component */}
let  SuccessStory = (props) => {
    //10. pass a random value from SuccessStory component back to Success
    const getRandomValue = () => {
        props.generateRandomValue();
    };

    return (
        <>
            <h3>Sucess Story</h3>
            <p>{props.story}</p>
            <button onClick={getRandomValue}>Generate Random Value</button>
        </>
      );
}

export default SuccessStory;