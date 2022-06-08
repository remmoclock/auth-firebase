import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="cointainer p-5">
      <h1 className="display-3 text-light">
        {currentUser ? "Welcome " + currentUser.email : " Hi, Sign Up or Sign In"}
      </h1>
    </div>
  );
}

export default Home;
