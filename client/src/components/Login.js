import React from 'react'
import {Link} from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div>
            <div className="main" style={{paddingTop:'70px'}}>
		<div className="main-w3l"><br/><br/>
			{/* <h1 className="logo-w3"></h1> */}
			<div className="w3layouts-main">
				<h2><span>Login</span></h2>
			
						<input placeholder="Email" name="Email" type="email" required=""/>
						<input placeholder="Password" name="Password" type="password"  id="password1" required=""/>
						<input type="submit" value="Get Started" name="login"/>
                        <Link to='/signup' style={{color:'white'}}>Create an account</Link>
			</div>
            
            </div>
            </div>
        </div>
    )
}

export default Login
