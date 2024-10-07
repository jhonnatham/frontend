import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">

            <Link className="navbar-brand" to="/">OPTIMAL TECHNOLGY</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/">
                        Productos
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/create">
                        Crear Producto
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/contact">
                        Contacto
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}