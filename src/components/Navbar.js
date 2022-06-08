import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

function Navbar() {
  const navigate = useNavigate();
  const { toggleModals, currentUser } = useContext(UserContext);
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
          </div>
        )}
        {currentUser && (
          <button onClick={logout} className="btn btn-danger ms-2">
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
