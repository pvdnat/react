import React, {Component} from "react";

{/* 8. create UserSignIn component using uncontrolled way, should be class component*/}
export default class UserSignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            uName : "natpvd",
        }

        this.userNameRef = React.createRef();
        this.userPasswordRef = React.createRef();

    }

    formSubmit = (evt)=>{
        let userName = this.userNameRef.current.value;

        this.setState({
            uName : userName,
        })
        evt.preventDefault();
    }

    render(){
        
        return(
            <>
                <h1>UserSignIn Component</h1>

                {/* 8. create UserSignIn component using uncontrolled way, should be class component */}
                <form action="/UserSignIn" onSubmit={this.formSubmit}>
                        <b>User Name</b>
                        <input type="text" ref={this.userNameRef} ></input>
                        <b>Password</b>
                        <input type="text" ref={this.userPasswordRef} ></input>
                        <button type="submit" >Log in</button>
                </form>
            </>
        )
    }
}