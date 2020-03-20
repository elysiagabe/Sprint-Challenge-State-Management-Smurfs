import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
// context
import { SmurfContext } from '../contexts/SmurfContext';
// components
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

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

  const addNewSmurf = smurf => {
    const newSmurf = {
      id: Date.now(),
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    }
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      console.log('Success!', res)
      setSmurfs([...smurfs, newSmurf])
    })
    .catch(err => console.log('There was an error', err))
  }

  return (
    <SmurfContext.Provider value={{ smurfs, addNewSmurf }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context</h1>
        
        <SmurfForm />
        
        <SmurfList />
        
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
