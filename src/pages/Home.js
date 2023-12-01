import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import MainMenu from '../components/MainMenu'
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [users, setUsers] = useLocalStorage('users', [])
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isloggedin')
  const navigate = useNavigate()
  
  useEffect(() => {
    if(isLoggedIn != null) {
      navigate('/movies')
    }
  }, [])
  
  const handleRegister = e => {
    e.preventDefault()
    const form = e.target
    const user = {
      id: uuidv4(),
      fullname: form[0].value,
      email: form[1].value,
      password: form[2].value,
      favorites: [],
    }
    const existedUser = users.filter(db_user => db_user.email == user.email)
    console.log(users)
    if(existedUser.length > 0) {
      alert(`${user.email} is already is use! Please choose different email address.`)
    }else{
      setUsers([...users, user])
      setIsLoggedIn(user)
      navigate('/movies')
    }
  }

  return (
    <>
    <MainMenu/>
    <div style={{overflow: 'hidden', height:'93.9vh'}} className='bg-dark text-light overflow-hidden'>
      <div style={{padding: '0 150px'}} className='container-fluid h-100 w-auto row'>
        <div className='col-12 row text-center h-100 d-flex justify-content-center align-items-center'>
          <div className='col-7 h-100 d-flex justify-content-center flex-column'>
            <img style={{opacity: '40%', borderRadius: '50'}} className='position-absolute h-50' src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <div style={{zIndex: '40'}} className='d-flex-column'>
              <h1>Unlimited movies, TV shows, and more...</h1>
              <h3>Ready to watch? Please be register first!</h3>
            </div>
          </div>
          <div className='col-1'/>
          <Form className='col-4 text-dark' onSubmit={handleRegister}>
            <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3">
              <Form.Control type="text" name='FullName' placeholder="your full name" required />
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
              <Form.Control type="email" name='email' placeholder="name@example.com" required/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" name='password' placeholder="Password" required/>
            </FloatingLabel>
            <Button type="submit" className='mt-5 px-5' variant="danger">Register</Button>
          </Form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home