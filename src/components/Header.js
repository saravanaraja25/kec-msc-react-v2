import React,{useEffect,useState} from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {NavLink,Link,useLocation } from 'react-router-dom';
import logo1 from '../assets/img/logo1.jpg'

const Header = () => {
    const location = useLocation();
    const [scrolled,setScrolled]=React.useState(false);
    const [expanded,setExpanded]=useState(false)
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
            <Navbar collapseOnSelect expanded={expanded} className={"main-navbar " +(scrolled ? 'fixed-top' : '')} bg="white" expand="lg">
                <div className="container">
                <NavLink to="/" onClick={()=>setExpanded(false)} exact className="navbar-brand d-flex">
                    <img src={logo1} alt="" />
                    <div className="d-block p-3">
                        <h5 className="text-dark">Kongu Engineering College</h5>
                        <h6 className="text-dark">M.Sc Software Systems (5 Years)</h6>
                    </div>
                </NavLink>
                    <Navbar.Toggle onClick={()=>setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="pb-2" id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink className="nav-link" onClick={()=>setExpanded(false)} to="/" exact activeClassName="active"><span>Home</span></NavLink>
                            <NavLink className="nav-link" onClick={()=>setExpanded(false)} to="/about" exact activeClassName="active"><span>About</span></NavLink>                            
                            <NavDropdown title="Academics"  className={"" +(((location.pathname==='/placement')||(location.pathname==='/whymsc')||(location.pathname==='/curriculum')) ? 'activedrop' : '')} id="basic-nav-dropdown">
                                <NavDropdown.Item className="p-0"><Link onClick={()=>setExpanded(false)} className="dropdown-item" to="/whymsc" exact><span>Why MSc @ KEC</span></Link></NavDropdown.Item>
                                <NavDropdown.Item className="p-0"><Link onClick={()=>setExpanded(false)} className="dropdown-item" to="/curriculum" exact><span>Curriculum</span></Link></NavDropdown.Item>
                                <NavDropdown.Item className="p-0"><Link onClick={()=>setExpanded(false)} className="dropdown-item" to="/placement" exact><span>Placements</span></Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className="nav-link" onClick={()=>setExpanded(false)} to="/gallery" exact activeClassName="active"><span>Gallery</span></NavLink>                            
                            <NavLink className="nav-link" onClick={()=>setExpanded(false)} to="/contact" exact activeClassName="active"><span>Contact</span></NavLink>
                            <NavLink className="nav-link" onClick={()=>setExpanded(false)} to="/admission" exact activeClassName="active"><span>Admission</span></NavLink>                            
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
