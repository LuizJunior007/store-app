import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';
import { formatUrl } from '../../helpers/produtctsHelper';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

type HeaderProps = {

    categories: string[]

};

const Header = ({ categories } : HeaderProps) => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {

        if(!localStorage.getItem('theme')){

            localStorage.setItem('theme', 'light');

        }

        const html = document.querySelector('html');
        html?.classList.add(localStorage.getItem('theme') || 'light');
        
    }, []);

    return(
        <Navbar expand="lg" className="bg-primary navbar-dark">
            <Container fluid>
                <Link to="/" className='navbar-brand'>Store-app</Link>
                <Navbar.Toggle aria-controls="navbarScroll" id='toggleNav' />
                <Navbar.Collapse id="navbarScroll" in={true}>
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <a href="#" className='nav-link' onClick={ toggleTheme } data-testid="change-theme">
                            <i className={theme == 'dark' ? 'bi bi-brightness-high-fill' : 'bi bi-moon-stars-fill'}></i>
                        </a>

                        <NavDropdown className='dropdown-menu-start' title="Categorias" id="basic-nav-dropdown" data-testid="basic-nav-dropdown">
                            {categories.length == 0 ? <NavDropdown.Item><Spinner animation="grow" size='sm' /></NavDropdown.Item> : categories.map((c) =>
                                <Link className='dropdown-item' to={`/categoria/${formatUrl(c)}`} key={c}>{c}</Link>
                            )}
                        </NavDropdown>

                        <Link to="/contato" className='nav-link'>Contato</Link>
                        <Link to="/sobre" className='nav-link'>Sobre</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Header;