import { NavLink } from "react-router-dom";

const Header = () => {
    const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors pb-1 border-b-2 ${
      isActive
        ? 'text-sky-400 border-sky-400'
        : 'text-slate-300 border-transparent hover:text-white'
    }`;
    return (
     <header className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white shadow-md">
      <div className="text-xl font-bold tracking-wide">
        <NavLink to="/" className="hover:text-sky-400 transition-colors">
          easyBuy
        </NavLink>
      </div>
      
      <nav className="flex items-center gap-6">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        
        <NavLink to="/login" className={navLinkClass}>
          Login
        </NavLink>
        
        <NavLink to="/register" className={navLinkClass}>
          Register
        </NavLink>
      </nav>
    </header>
    )
}

export default Header