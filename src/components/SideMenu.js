import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useEffect, useState } from 'react';
import '../assets/style/sideMenuStyle.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation } from 'react-router-dom';

function SideMenu(search) {
    const navigate = useNavigate()
    const getLocation = useLocation()
    const [location, setLocation] = useState(getLocation.pathname)
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isloggedin')

    const handleSearch = (e) => {
        e.preventDefault()
        search.sendDataToParent(e.target.value);
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        search.sendDataToParent(e.target.value);
    }
    if (isLoggedIn == null){
        navigate("/");
    }
    const handleLogout = () => {
        setIsLoggedIn(null)
        navigate("/");
    }
    
    const show = () =>{
        const allSpan = document.querySelectorAll('span')
        const searchIcon = document.querySelector('.bi-search')
        const search = document.querySelector('input')
        for(let span of allSpan){
            span.classList.remove('d-none')
            span.classList.add('d-inline')
        }
        searchIcon.classList.add('d-none')
        search.classList.remove('d-none')
    }
    const hide = () =>{
        const allSpan = document.querySelectorAll('span')
        const searchIcon = document.querySelector('.bi-search')
        const search = document.querySelector('input')
        for(let span of allSpan){
            span.classList.remove('d-inline')
            span.classList.add('d-none')
        }
        searchIcon.classList.remove('d-none')
        search.classList.add('d-none')
    }
  return (
    <Navbar className="navBar" onMouseEnter={show}  onMouseLeave={hide} bg="black" data-bs-theme="dark">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto d-flex flex-column text-nowrap gap-5 pt-5">
                <Form inline onSubmit={handleSearchSubmit}>
                    <i className="ms-2 bi bi-search d-inline"></i>
                    <Form.Control style={{width: '140px',pointerEvents: (location == '/movies/favorites') ? 'none' : 'auto'}} onKeyUp={handleSearch} className='d-none m-1' type="text" placeholder="Search movie"/>
                    
                </Form>
                <Nav.Link className={(location == '/movies') ? 'active' : ''}  href="/movies">
                    <i className="bi bi-house"></i>
                    <span className='ms-2 d-none'>Home</span>
                </Nav.Link>
                <Nav.Link className={(location == '/movies/favorites') ? 'active' : ''} href="/movies/favorites">
                    <i className="bi bi-star"></i>
                    <span className='ms-2 d-none'>Favourites</span>
                </Nav.Link>
                <Nav.Link  onClick={handleLogout}>
                    <i className="bi bi-box-arrow-left"></i>
                    <span className='ms-2 d-none'>Logout</span>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default SideMenu