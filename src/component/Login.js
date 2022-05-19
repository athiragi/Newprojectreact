import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
             <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h1>User Login</h1>
            <div className="row">
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label for="" className="form-label">  User Name</label>
                    
                    <input type="text" className="form-control"/>
                </div>
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label for="" className="form-label">  Password</label>
            
                    <input type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <button className="btn btn-success">Login</button>
                </div>
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <ul>
                        <li>
                        <Link to="/register">New User</Link>

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

export default Login