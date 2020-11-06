import React from 'react';
import './App.css';
import Row from "./Row";
import requests from './requests';

function App() {
  
  return (
    <div className="App">

	<h1> Hey Cleaver Programmer! Lets buid our Netflix clone app</h1>
	<Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
	<Row title="Trending Now" fetchUrl={requests.fetchTopRated} />
 
    </div>
  );
}

export default App;
