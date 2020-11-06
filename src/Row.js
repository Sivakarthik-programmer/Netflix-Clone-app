import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({title, fetchUrl }){

const [movies, setMovies] = useState([]);

// A snippet of code which runs based on a specific condition/variable

useEffect(()=>{
// if [], run once when the row loads, and  dont run again 
	// when this async function called it runs and return the url like this, which the API key is replaced with our Api key
	// "https://api.themoviedb.org/3/discpver/tv?api_key=${API_KEY}&with_network=213`"
async function fetchData(){
	const request = await axios.get(fetchUrl);
	setMovies(request.data.results);
	return request;

}
fetchData();
 
}, [fetchUrl]);;

return(

	<div>

		<h2>{title}</h2>


	</div>
)

}

export default Row;