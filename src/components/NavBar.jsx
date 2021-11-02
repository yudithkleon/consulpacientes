import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/actiones/actionLogin";

export const NavBar = () => {
    const dispatch = useDispatch();
  
    const history = useHistory();
  
    const handleLogout = () => {
      dispatch(logout());
    
      history.push("/login");
    };
  
    return (
        <div>
        <Navbar bg="dark" variant="dark">
          <img
    style={{ width: "70px", margin: "3px" }}
            src="https://res.cloudinary.com/danimel/image/upload/v1635784762/medical-symbol_z9wjaf.png"
            alt=""
          />

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "violet" }} href="/home">
                <Link
                  to="/"
                 >
                  <img
                    style={{ width: "40px", margin: "3px", marginLeft: '20px' }}
                    src="https://res.cloudinary.com/danimel/image/upload/v1633825804/house_sin7vi.png"
                  />
                </Link>
              </Nav.Link>
              <Nav.Item>
                <Nav.Link
                   eventKey="link-1"
                >
                  <Link
                    to="/registerPaciente"
                    style={{  margin: "3px",  marginLeft: '20px' }}
                  >
                    <img
                      style={{ width: "40px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1635784501/documento-medico_w0eva2.png"
                    />
                   
                  </Link>
                </Nav.Link>
              </Nav.Item>
                <Nav.Item>
                <Nav.Link
                  style={{ fontSize: "14px",    }}
                  eventKey="link-2"
                >

                  <Link style={{ color: "violet", fontSize: "14px",    }}
                //    to="/personal"
                   >
                    <img
                      style={{ width: "40px", margin: "3px",  marginLeft: '20px'  }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1635784762/sala-de-espera_1_pkklkv.png"
                    />
                    
                  </Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                
                <Nav.Link
                   eventKey="link-4"
                > <Link 
                // to="/agendar" 
                style={{ color: "violet", fontSize: "14px", }}>
                  <img
                    style={{ width: "40px", margin: "3px",  marginLeft: '20px'  }}
                    src="https://res.cloudinary.com/danimel/image/upload/v1635784762/sala-de-espera_t2udqu.png"
                  />
                </Link>
                </Nav.Link>
                
                
              </Nav.Item>
            
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link
                  style={{ color: "violet", fontSize: "14px", margin: "3px" }}
                  eventKey="link-1"
                >
                  <Link 
                 to="/login"
                   style={{  margin: "3px" }}>
                    <img
                      style={{ width: "40px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1635784501/login_1_p33a7m.png"
                    />
                   
                  </Link>
                </Nav.Link>
                </Nav.Item>
               
                <Nav.Link eventKey={2} href="#memes">
                <Nav.Item>
                  <NavDropdown.Item
                    eventKey={2}
                    href="#action/3.4"
                    onClick={handleLogout}
                   
                    eventKey="link-7"
                  >
                 
                    <img
                      style={{ width: "30px", margin: "3px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633823741/logout_1_jivecp.png"
                    />
                  </NavDropdown.Item>
                </Nav.Item>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}
