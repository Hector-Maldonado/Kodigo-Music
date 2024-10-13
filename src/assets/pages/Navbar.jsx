import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../context/UserDataContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/login'); 
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };
  return (
<>
      {user && (
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Kodigo Music</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/explorer">Explorar</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user.email}
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <li>
              <button className="dropdown-item" onClick={logout} >Cerrar sesión</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
)}
</>
  );
};


