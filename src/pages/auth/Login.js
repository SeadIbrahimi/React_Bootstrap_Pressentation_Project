import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [users, setUsers] = useLocalStorage('users', [])
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isloggedin')
  const navigate = useNavigate()

  useEffect(() => {
    if(isLoggedIn != null) {
      navigate("/movies");
    }
  }, [])
  
  const handleLogin = e => {
    e.preventDefault()
    const form = e.target.elements
    const email = form[0].value
    const password = form[1].value
    const db_users = users.filter(user => (user.email == email && user.password == password))
  
    if(db_users.length > 0) {
      setIsLoggedIn(users[0])
      navigate("/movies");
    } else {
      alert(`Invalid credentials!`)
    }
  }
  return (
        <div style={{overflow: 'hidden', height:'100vh'}} className='bg-dark text-light d-flex align-items-center justify-content-center'>
          <Form className='text-center col-4 text-dark' onSubmit={handleLogin}>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" required/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" required/>
            </FloatingLabel>
            <div className='d-flex justify-content-between'>
              <Button href='/' className='mt-5 px-5' variant="danger"><i className="bi bi-arrow-left-square"></i> Register</Button>
              <Button type="submit" className='mt-5 px-5' variant="danger">Login</Button>
            </div>
          </Form>
        </div>
  )
}

export default Login