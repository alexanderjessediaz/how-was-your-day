import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import RailsSignUpForm from "./RailsSignUpForm"

    function SignUpModal() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="info" onClick={handleShow}>
              Sign-in
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Sign up</Modal.Title>
              </Modal.Header>
              <Modal.Body><RailsSignUpForm/></Modal.Body>
            </Modal>
          </>
        );
      }
    

export default SignUpModal
