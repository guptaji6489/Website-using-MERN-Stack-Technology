import React from 'react'

const Contact = () => {
    return (
        <div>
             <div className="main" style={{paddingTop:'30px'}}>
		<div className="main-w3l">
			{/* <h1 className="logo-w3"></h1> */}
			<div className="w3layouts-main " >
				<h2 ><span>Contact Us</span></h2>
                {/* <h4><span>Feel free to drop us a line below!</span></h4> */}
                        <input placeholder="Full Name" name="Name" type="text" required=""/>
						<input placeholder="Email" name="Email" type="email" required=""/>
						<input placeholder="Phone Number" name="phone" type="text" required=""/>
                        <input placeholder="Your Message" name="message" type="text" required=""/>
						<input type="submit" value="Submit" name="login"/>
                       
			</div>
            
            </div>
            </div>
        </div>
    )
}

export default Contact
