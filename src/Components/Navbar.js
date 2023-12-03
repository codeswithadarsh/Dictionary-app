import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="nav">
            <div>
            <h1>Dictionary App</h1>
            </div>
            <div className='Link'>
            <NavLink to="/" className='home'> Home </NavLink>
            <NavLink to="/history" className='history'> History </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;