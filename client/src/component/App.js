import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';
import Header from './Header';
const Dashboard =() =><h2>Dashboard</h2>
const SurveyNew =() =><h2>SurveyNew</h2>
const Landing =() =><h2>Landing</h2>


class App extends Component {
	componentDidMount(){
		this.props.fetchUser();
	}

	//  constructor () {
  //   super()
	// 		//this.props.fetchUser();
  // }

	 handleClick () {
				console.log('Success!')
			 axios.get('http://localhost:8080/api/test')
			.then(response => console.log(response));
  }


	render(){
		 //const { records } = this.props;
	    return (
	          <div className="container">
		        <BrowserRouter>
		          <div>
		            <Header />
		            <Route exact path="/" component={Landing} />
		            <Route exact path="/surveys" component={Dashboard} />
		            <Route path="/surveys/new" component={SurveyNew} />
		          </div>
		        </BrowserRouter>
							<div className='button_container'>
							<button className='button' onClick={this.handleClick}>Click Me</button>
						</div>
	      	</div>

	    );
	}
} 

export default connect(null, actions)(App);
