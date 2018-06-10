import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
	
	renderContent(){

		switch(this.props.auth){
			case null:
				return 'Still deciding';
			case false:
				return <li><a href="/auth/google">Login with Google</a></li>;
			default:
				return <li><a href="http://localhost:8080/api/logout2">Loginout</a></li>
		}
	}

	render(){
		console.log(this.props);
		return(
			<div className="container">
				<nav>
				      <a href="" className="brand-logo">Logo</a>
				      	<ul className="right">
					        {
								/*<li><a href="">Login with Google</a></li>*/
								this.renderContent()
							}
				      </ul>
				  </nav>
			</div>
		);
	}
}

function mapStateToProps({auth}){
	return {auth};
}

export default connect(mapStateToProps)(Header);