import { Link } from "react-router-dom";

const Navbar = () => {
    
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Colleges</Link></li>
        <li><Link to="/">Admission</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="w-3/12" src="" alt="" />
                    <h2 className="md:text-2xl  md:block font-bold">CollegeBooker</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-5">
                <div>
                    {/* User Info */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;