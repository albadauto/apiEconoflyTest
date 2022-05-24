import React from 'react'
import { Form, Button} from 'react-bootstrap';
import './style.css';


export default function Login() {
  return (
    <div className='container'>
      <div className="title">
        <label htmlFor="">LOGIN NO SISTEMA</label><br />

      </div>
      <Form.Label>Nome:</Form.Label>
      <Form.Control type="text" placeholder="Enter email" className="text-box"/><br/>
      <Form.Label>Senha:</Form.Label>
      <Form.Control type="password" placeholder="EnterPass" className="text-box"/>
      <div className="button-send">
        <Button variant="primary" className="button-sys">Login</Button>

      </div>

    </div>
  )
}
