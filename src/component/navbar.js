import { Link, Outlet } from "react-router-dom";
import "./Navbar.css"

const navbar = () => {
    return (   
        <>
            <nav>
                <div className="block">
                    <Link to = "/" className="link">Home</Link>
                    <Link to = "/profile"className="link">Profile</Link>
                    <Link to = "/dept"className="link">Dept</Link>
                </div>
            </nav> 
            <Outlet/>
        </> 
    );
}

export default navbar;