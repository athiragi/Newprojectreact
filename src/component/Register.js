import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
            <div className="container">
    <div className="row">
        <div className="col col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label for="" className="form-label">Name</label>
                  <input placeholder="Enter name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">email</label>
                    <input type="email" name="" id="" className="form-control" placeholder="Enter email"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">User Name</label>
                    <input placeholder="Enter  user name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input placeholder="Enter Password" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    <button className="btn btn-success">Register</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                <ul>
                        <li>
                        <Link to="/">userlogin</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Register