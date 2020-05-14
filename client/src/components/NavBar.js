import React from `react`;
import { Link } from `react-router-dom`;

function NavBar() {
    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <Link to="/" className={
                    window.location.pathname === `/` ? `nav-link active` : `nav-link`
                }
                >
                    Book Search
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/savedbooks" className={
                    window.location.pathname === `/savedbooks` ? `nav-link active` : `nav-link`
                }
                >
                    Saved Books
                </Link>
            </li>
        </ul>
    )
}

export default NavBar;