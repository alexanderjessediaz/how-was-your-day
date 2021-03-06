import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

 function RailsSignUpForm(props) {
     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")
     const [email, setEmail] = useState("")

     const userURL = "http://localhost:3000/users"

     const handleSubmit = (event) => {
         event.preventDefault()
         let user = {
             username,
             email,
             password
         }
         fetch(userURL, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({user})
         })
     }

     const handleChange = ({target}) => {
        return target.name === "username" 
            ? setUsername(target.value) 
            :setPassword(target.value) && setEmail(target.value)
        }

        
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChange} />
            <Form.Text className="text-muted">
                We'll never share your email
            </Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" value={username} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange}/>
        </Form.Group>

        <Button variant="info" type="submit">Submit</Button>
    </Form>
  );
}
export default RailsSignUpForm