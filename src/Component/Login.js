import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
// import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
class Signin extends React.Component {
    
    render() { 
        return (
            <>
            <form className='m-5'id="LoginForm">
<div className="mb-3  w-50">
    <label htmlFor="exampleInputEmail1" className="form-label" id="Email">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
<div className="mb-3 w-50">
    <label htmlFor="exampleInputPassword1" className="form-label" id="Password">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-bg-primary" id="button">
    <Link to="/Products">Submit</Link>

  </button>
</form>

            </>
        );
    }
}
 
export default Signin;