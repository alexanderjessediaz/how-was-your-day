import React, { Component } from 'react';
import RailsSignUpForm from '../AuthComponents/RailsSignUpForm'
const userURL = "http://localhost:4000/users"

 class RailsSignUp extends Component {

    
     state = {
         user:{},
         alerts:[]
     }

     signUp = (user) => {
        fetch(userURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(res => {
            if(res.errors){
                this.setState({alerts: res.errors})
            }
            else {
                this.setState({
                    user: res.user,
                    alerts: ["User successfully created!"]
                })
            }
        })
     }
     render(){
        return (
            <RailsSignUpForm/>
        );
    }
}
export default RailsSignUp