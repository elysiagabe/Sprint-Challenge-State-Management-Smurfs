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
  console.log(smurfs)

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
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
      id: Date.now()
    }
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      console.log('Success!', res)
      setSmurfs([...smurfs, newSmurf])
    })
    .catch(err => console.log('There was an error', err))
  }

  const deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log('Successful deletion', res)
      setSmurfs([...res.data])
    })
    .catch(err => console.log('failed to remove due to error', err))
  }

  const updateName = (id, newName) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, {name: newName})
    .then(res => {
      console.log('Successful update:', res)
      setSmurfs([...res.data])
    })
    .catch(err => console.log('Error updating...', err))
  }

  return (
    <SmurfContext.Provider value={{ smurfs, addNewSmurf, deleteSmurf, updateName }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context</h1>
        
        <SmurfForm />
        
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
