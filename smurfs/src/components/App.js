import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfList from './SmurfList';

function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
      setSmurfs(res.data)
    })
    .catch(err => console.log('There was an error fetching data from the server: ', err))
  }, [])

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Context API</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfContext.Provider value={smurfs}>
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
