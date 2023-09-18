import React, {Component} from "react";
import SuccessChild from "./SuccessChild";

export default class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {
            successQuote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
            randomVal: null
        };
    }

    getRandomVal = () => {
        const randomVal = Math.random();
        this.setState({ randomVal });
    };


    render() {
        return (
            <>
                <h1>Success Quote</h1>
                <p>{this.state.successQuote}</p>
                <SuccessChild name="Van Phan" address="Boston" 
                successStory="Steve Jobs: Steve Jobs has been known as an iconic figure for the 
                establishment of Apple like the biggest company. However, it is extremely 
                shocking to know that the $2 billion company with over 4000 employees has 
                been started with only two persons in a garage. It is also to be noticed 
                that this great establisher has been dismissed and fired from the company 
                from which he has started his career. Further, realizing his potential and 
                capabilities, Steve Jobs proceeded further towards establishing this biggest 
                company which is famously known as ‘Apple’."
                generateRandomValue={this.getRandomVal}/>
                <p>Random Value from SuccessStory: {this.state.randomVal}</p>
            </>
        );
    }
}