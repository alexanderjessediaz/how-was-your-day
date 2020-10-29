import React, {useState} from 'react';
// import {Form, Button} from 'react-bootstrap';

 function RailsSignUpForm(props) {
     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")
    //  const [email, setEmail] = useState("")

    //  const userURL = "http://localhost:4000/users"

     const handleSubmit = (event) => {
         event.preventDefault()
         let user = {
             username,
             password
         }
         props.signUp(user)
     }

     const handleChange = ({target}) => {
        return target.name === "username" 
            ? setUsername(target.value) 
            :setPassword(target.value)
        }

    const showAlerts = () => props.alerts.map(alert =><p>{alert}</p>)

        
  return (
      
      <form className="signup-form " onSubmit={handleSubmit}>
      <h1 className="signup-title">H W Y D</h1>
      <h2 className="signup-subtitle">Sign Up</h2>
        <label>Username</label>
        <input name="username" value={username} onChange={handleChange}/>
        <label>Password</label>
        <input name="password" value={password} onChange={handleChange}/>
        <input type="submit"/>
        {props.alerts ? showAlerts(): null}
    </form>
    // <Form onSubmit={handleSubmit}>
    //     <Form.Group >
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control  type="email" placeholder="Enter email" value={email} onChange={handleChange} />
    //         <Form.Text className="text-muted">
    //             We'll never share your email
    //         </Form.Text>
    //     </Form.Group>

    //     <Form.Group>
    //         <Form.Label>Username</Form.Label>
    //         <Form.Control type="username"  placeholder="Enter username" value={username} onChange={handleChange} />
    //     </Form.Group>

    //     <Form.Group >
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange}/>
    //     </Form.Group>
    //     <Button variant="info" type="submit">Submit</Button>
    // </Form>
  );
}
export default RailsSignUpForm