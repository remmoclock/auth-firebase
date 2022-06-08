import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

function Navbar() {
  const navigate = useNavigate();
  const { toggleModals, currentUser, signInGoogle } = useContext(UserContext);
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert("Error connexion Retry");
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        Auth JS
      </Link>
      <div>
        {!currentUser && (
          <div>
            <button
              onClick={() => toggleModals("signUp")}
              className="btn btn-primary"
            >
              Sign Up
            </button>
            <button
              onClick={() => toggleModals("signIn")}
              className="btn btn-primary ms-2"
            >
              Sign In
            </button>
            <button
              onClick={() => signInGoogle()}
              className="btn btn-primary ms-2"
            >
              Google Sign In
            </button>
          </div>
        )}
        {currentUser && (
          <div>
            <button className="btn btn ms-2">
              <Link to="/private/private-home" className="navbar-brand">
                Gif
              </Link>
            </button>
            <button onClick={logout} className="btn btn-danger ms-2">
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
