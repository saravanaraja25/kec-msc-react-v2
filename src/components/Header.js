import React,{useState,useEffect} from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo1 from '../assets/img/logo1.jpg'

const Header = () => {
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 100 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    return (
        <div className="header">
            <div className="topbar bg-black text-white-0-5">
                <div className="container p-2">
                    <div className="row mr-0">
                        <div className="col-12 text-center">
                            <p className="top-text p-2"><NavLink to="/admission">Admission For 2021 is Open. Click Here</NavLink></p>
                        </div>
                        {/* <div className="col-md-4"></div>
                        <div className="col-md-4"></div> */}
                    </div>
                </div>
            </div>
            <Navbar className={"main-navbar " +(scrolled ? 'fixed-top' : '')} bg="white" expand="lg">
                <div className="container">
                <NavLink to="/" exact className="navbar-brand d-flex">
                    <img src={logo1} alt="" />
                    <div className="d-block p-3">
                        <h5 className="text-dark">Kongu Engineering College</h5>
                        <h6 className="text-dark">Department of CT-PG</h6>
                    </div>
                </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="pb-2" id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink className="nav-link" to="/" exact activeClassName="active"><span>Home</span></NavLink>
                            <NavLink className="nav-link" to="/about" exact activeClassName="active"><span>About</span></NavLink>
                            <NavLink className="nav-link" to="/contact" exact activeClassName="active"><span>Contact</span></NavLink>
                            <NavLink className="nav-link" to="/admission" exact activeClassName="active"><span>Admission</span></NavLink>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
