import axios from 'axios';

import {FETCH_USER} from './types';

export const fetchUserMain = () => {
	return function(dispatch){
		axios
		.get('/api/current_user')
		.then(res => dispatch({type:FETCH_USER,payload:res}));
	}
};

// export const fetchUserMain = () => async dispatch=>{
// 	const res = await axios.get('/api/current_user');
// 	dispatch({type:FETCH_USER, payload:res});
// };


// cors is not working that why testing by testlogin
export const fetchUser = () => async dispatch=>{
	const res = await axios.get('http://localhost:8080/api/test/curent_user');
	dispatch({type:FETCH_USER, payload:res});
};

