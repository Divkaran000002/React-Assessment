import React from "react";
import "./Logindetails.css";
// import { Link } from 'react-router-dom'
import { Link } from "react-router-dom";
class Logindetials extends React.Component {
  render() {
    return (
      <>
        <form className="row g-3 p-5" id="form">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>

          <div className="col-md-3">
            <label htmlFor="inputCountryCode" className="form-label">
              Country Code
            </label>
            <select id="inputCountryCode" className="form-select">
              <option value="+91">India (+91)</option>
              <option value="+1">USA (+1)</option>
              <option value="+44">UK (+44)</option>
              <option value="+61">Australia (+61)</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="inputMobile" className="form-label">
              Mobile Number
            </label>
            <input type="tel" className="form-control" id="inputMobile" />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option value="1">Delhi</option>
              <option value="2">Mumbai</option>
              <option value="3">Chennai</option>
              <option value="4">Kolkata</option>
              <option value="5">Chandigarh</option>
              <option value="6">Banglore</option>
              <option value="7">Hyderabad</option>
              <option value="8">Gurgoan</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
        </form>

        <form className="p-5" id="EmailSection">
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Confirm Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  checkbox
                </label>
              </div>
            </div>
          </div>
          <Link to="/Products">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </Link>
        </form>
      </>
    );
  }
}

export default Logindetials;
