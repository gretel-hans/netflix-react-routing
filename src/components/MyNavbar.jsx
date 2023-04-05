import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyNavbar = () => {
    const location=useLocation()
    return(
<header>
        <Navbar className="navbar pb-1" expand="lg" data-bs-theme="dark">
            <Container fluid className="container-fluid align-center p-0">
                <Link to='/' className="navbar-brand"><img src="../assets/netflix_logo.png" alt="Netflix Logo" /></Link>               
                <div className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" id='menuTendina'></span>
                </div>
                
                <div className="collapse navbar-collapse align-center" id="navbarSupportedContent">


                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                        <Link to='/' id='link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/tvShows' id='link'>Tv Shows</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/' id='link'>Movies</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/' id='link'>Recently Added</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/' id='link'>My List</Link> 
                        </li>
                        
                    </ul>

                    <div className="d-flex justify-content-between align-items-center d-none d-lg-flex" id="navRight">
                        <div><Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form></div>
                        <div>KIDS</div>
                        <div><i className="bi bi-bell-fill fs-5"></i></div>
                        <div>
                        
                            <li className="nav-item dropstart list-unstyled" id="marker">
                                <Dropdown>
                                <Dropdown.Toggle className='pe-0' id="generesDropdownII">
                                    <img src="../assets/avatar.png" width="20px" alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-dark text-light">
                                <Dropdown.Item href="#/action-1">Epicode</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Pippo</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Pluto</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>                             
                                </Dropdown.Menu>
                                 </Dropdown>
                            </li>
                           
                        </div>
                    </div>

                </div>
            </Container>
        </Navbar>
        


    </header>
    )

    
    

}

export default MyNavbar