import React, { Component } from 'react';
import RailsSignUpForm from '../AuthComponents/RailsSignUpForm'

 class RailsSignUp extends Component {
     state = {
        //  username: "",
        //  password: "",
        //  email: ""
     }
     render(){
        return (
            <RailsSignUpForm/>
        );
    }
}
export default RailsSignUp