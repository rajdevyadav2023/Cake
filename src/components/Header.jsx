import logo from '../img/logo.png';
import '../css/header.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);
    const login = useSelector(state => state.user.details.login);

    return (
        <header>
            <div className="logo-box">
                <img src={logo} alt="this is logo" />
            </div>
            <div className="search-box">
                <input type="search" placeholder='Search Cake Here 🧁' />
            </div>
            <ul className='large-screen-nav'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/cakes'}>Cakes</NavLink></li>
                <li><NavLink to={'/cart'}>My Cart</NavLink></li>
                <li>
                    {
                        login ? (<NavLink to={'/profile'}>My Profile</NavLink>) : (<NavLink to={'/login'}>Log In</NavLink>)
                    }
                </li>
            </ul>
            <nav className='small-screen-nav'>
                <button><i className="fa-solid fa-bars" onClick={() => setShow(!show)}></i></button>
                <ul className='small-screen-navlinks' style={{ display: show ? "block" : "none" }}>
                    <button><i className="fa-solid fa-xmark" onClick={() => setShow(!show)}></i></button>
                    <li onClick={() => setShow(!show)}><NavLink to={'/'}>Home</NavLink></li>
                    <li onClick={() => setShow(!show)}><NavLink to={'/cakes'}>Cakes</NavLink></li>
                    <li onClick={() => setShow(!show)}><NavLink to={'/cart'}>My Cart</NavLink></li>
                    <li onClick={() => setShow(!show)}>
                        {
                            login ? (<NavLink to={'/profile'}>My Profile</NavLink>) : (<NavLink to={'/login'}>Log In</NavLink>)
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;