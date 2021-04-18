import React ,{useState}from 'react'
import {Link, useHistory} from 'react-router-dom';
import './Signup.css';
const Signup = () => {
	const history = useHistory();
	const [user, setuser] = useState({
		name:"", email:"", phone:"", work:"", password:"",cpassword:""
	});

	const myinput = (e) =>{
		let name,value;
		name= e.target.name;
		value=e.target.value;
		setuser({...user,[name]:value});
	}

	const postData = async(e) =>{
		e.preventDefault();
		const {name, email, phone, work, password,cpassword}=user;
		const res = await fetch('/register',{
			method:"POST",
			headers:{
				"Content-Type":"application/json",
				'crossDomain': true
			},
			body:JSON.stringify({
				name, email, phone, work, password,cpassword
			})
		});
		const data  = await res.json();
		console.log(data);
		if(data.status === 422 || !data )
		{
			window.alert("Invalid Registration!");
			console.log("Invalid Registration!");
		}else{
			window.alert(" Registration success!");
			console.log(" Registration success!");
		}
		history.push("/login");
	}
    return (
        <>
	<div className="main">
		<div className="main-w3l"><br/><br/>
				
			<div className="w3layouts-main">
			<h2><span>Register now</span></h2>
			<form method="POST">
			<input placeholder="Full Name" name="name" type="text" value={user.name} onChange={myinput} required />
			<input placeholder="Email" name="email" type="email"   value={user.email}  onChange={myinput} required=""/>
			<input placeholder="Phone Number" name="phone" type="text"  value={user.phone} onChange={myinput} required="" />
            <input placeholder="Your work" name="work" type="text"   value={user.work} onChange={myinput} required="" />
			<input placeholder="Password" name="password" type="password"  id="password1"  value={user.password} onChange={myinput}  required="" />
			<input placeholder="Confirm Password" name="cpassword" type="password"  id="password2"  value={user.cpassword} onChange={myinput}  required="" />
			<input type="submit" value="Register" name="login" onClick={postData}/>
			</form>
            <Link to='/login' style={{color:'white'}}>I'm already Register</Link>
			</div>
            
            </div>
            </div>
			
        </>
    )
}

export default Signup
