import React from 'react';
import { Component } from 'react';


class Header extends Component {
	
	render(){
		return(
			<div className="container">
				<nav>
				      <a href="#" className="brand-logo">Logo</a>
				      	<ul  className="right">
					        <li><a href="#">Login with Google</a></li>
				      </ul>
				  </nav>
			</div>
		);
	}
}


export default Header;