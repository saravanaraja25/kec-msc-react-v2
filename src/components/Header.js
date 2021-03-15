import React,{useState,useEffect} from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';
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
                            <NavDropdown title="Academics" activeClassName="active" id="basic-nav-dropdown">
                                <Link className="dropdown-item" to="/whymsc" exact><span>Why MSc @ KEC</span></Link>
                                <Link className="dropdown-item" to="/curriculum" exact><span>Curriculum</span></Link>
                            </NavDropdown>
                            <NavLink className="nav-link" to="/contact" exact activeClassName="active"><span>Contact</span></NavLink>
                            <NavLink className="nav-link" to="/admission" exact activeClassName="active"><span>Admission</span></NavLink>                            
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
