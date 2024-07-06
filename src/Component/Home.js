import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import "./footer.css";
import Logindetails from "./Logindetails";
const Home = () => {
  return (
    <div className="HomePage">
      <div className="container">
        <h1 className="welcome" id="Welcome">Welcome to PressCart</h1>
        <Login />
        <button type="submit" className="btn btn-bg-black" id="SubmitButton">
          <Link to="/Logindetails" element={<Logindetails />}>
            <h4 id="NewUser">New user</h4>
          </Link>
          {/* <Link to="/dashboard">Dashboard</Link> */}
        </button>
      </div>
    </div>
  );
};
export default Home;
