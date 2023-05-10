import React from 'react';
import '../styles/login.css'


const Login: React.FunctionComponent = () => {
  return (

    <div>
		<div className='container'>
	<form id="form" >
			<div className="form-item">
				<input id="username" type="text" name="username" placeholder="Username" autoComplete="on" required></input>
			</div>

			<div className="form-item">
				<input id="password" type="password" name="password" placeholder="Password" autoComplete="on" required></input>
			</div>
			<div className="form-item">
				<button id="button" className="button" type="submit" value="Login">Sign In</button>
			</div>
		</form>
		</div>
	</div>
  );
}


export default Login;