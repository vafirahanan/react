import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import {Container,Form,Navbar,NavItem} from 'react-bootstrap';
import { FaSearch,FaRegUserCircle,FaShoppingCart } from "react-icons/fa";

function Snapdeal() {
  return (
    <Fragment>
      <div className='bg-danger container-fuid d-flex' style={{height:'30px',fontSize:'14px',color:'white',}}>
        <p style={{marginLeft:'20px'}}>Brand Waali Quality, Bazaar Waali Deal</p>
        <a href="#" style={{textDecoration:'none',color:'white', marginLeft:"450px"}}>Impact@Snapdeal</a>
        <a href="#" style={{textDecoration:'none',color:'white',marginLeft:"50px"}}>Help Center</a>
        <a href="#" style={{textDecoration:'none',color:'white',marginLeft:"50px"}}>Sell On Snapdeal</a>
        <a href="#" style={{textDecoration:'none',color:'white',marginLeft:"50px"}}>Download On App</a>
      </div>
    <Navbar expand="lg" className="d-flex" style={{height:'80px',overflow:'hidden',background:'#e40046'}} sticky='top'>
    <NavItem><img src="https://www.logo.wine/a/logo/Snapdeal/Snapdeal-White-Dark-Background-Logo.wine.svg" alt="Not found" style={{width:'150px',height:'150px',color:'white',marginLeft:'24px'}} /></NavItem>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <NavItem>
          <Form>
            
            <input type="text" placeholder='Search Products and brands' style={{width:'500px',marginLeft:'150px',height:'40px'}}/>
            <button style={{background:'black', color:'white',height:'40px'}}>
            <FaSearch style={{ width: '20px', height: '20px', color: 'white' }} />&nbsp;&nbsp;Search</button>
          </Form>
          </NavItem>
          <NavItem className='d-flex' >
            <div className='vr' style={{marginLeft:'50px'}}></div>
            <div style={{marginLeft:'20px'}}>Cart&nbsp;&nbsp;
            <FaShoppingCart style={{ width: '20px', height: '50px', color: 'white' }}/>
            </div>
            <div className='vr' style={{marginLeft:'20px'}}></div>
            <div style={{marginLeft:'20px'}}>Sign in&nbsp;&nbsp;
            <FaRegUserCircle style={{ width: '20px', height: '50px', color: 'white'}} />
            </div>
          </NavItem>
          
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    </Fragment>
  );
}

export default Snapdeal;
