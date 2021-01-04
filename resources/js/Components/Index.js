import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './index.css';
function Index() {
    return (
        <div className="container">
            <div className="headername">
            <h1 className="registerhead">Registration Form</h1>
                <form>
                    <div className="form-group">
                        <label for="FirstName">First Name</label>
                            <input type="text" className="form-control" id="first_name" name="fname" placeholder="First Name"></input>                    
                    </div>
                    <div className="form-group">
                    <label for="FirstName">Last Name</label>
                        <input type="text" className="form-control"name="lname" id="last_name"  placeholder="Last Name"></input>                    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email"></input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                    <label for="FirstName">Enter New Password</label>
                        <input type="password" className="form-control"name="password" id="password" placeholder="Enter Password"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>                    
                    </div>
                   
                    
                    <button type="submit" className="registerbutton">Register</button>
                    
                    
                    
                </form>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
