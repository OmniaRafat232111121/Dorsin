import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import visa from '../../assets/visa.png'
function Footer() {
    return (
        <>
      <footer className='footer' >
        <Container>
          <Row>
            <Col md={3} className='mt-4'>
           <h5>DORSIN</h5>
           <ul>
            <li><a>Home</a></li>
            <li><a>About us</a></li>
            <li><a>Careers</a></li>
            <li><a>COntact us</a></li>
           </ul>
            </Col>
            <Col md={3} className='mt-4'>
             <h5>Information</h5>
             <ul>
            <li><a>Terms & Condition</a></li>
            <li><a>About us</a></li>
            <li><a>Jobs</a></li>
            <li><a>Bookmarks</a></li>
           </ul>
            </Col>
            <Col md={3} className='mt-4'>
              <h5>Support</h5>
              <ul>
            <li><a>FAQ</a></li>
            <li><a>Contact</a></li>
            <li><a>Discussion</a></li>
            
           </ul>
            </Col>
            <Col md={3} className='mt-4'>
              <h5>Subscribe</h5>
              <p>In an ideal world this text wouldn’t<br/> exist, a client would acknowledge the <br/>
              importance of having web copy before<br/> the design starts.</p>
            </Col>
          </Row>
        </Container>
        </footer>
        <div className='footer-alt'>
        <Container >
            <Row>
                <Col md={6}>
                 <p>2019 - 2020 © Dorsin - Themesbrandpayment</p>
                </Col>
                <Col md={6}>
                    <img  className="image"src={visa} alt=""/>
                    </Col>
            </Row>
        </Container>
        </div>
       </>
      


    );
  }
export default Footer