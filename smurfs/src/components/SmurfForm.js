import React, { useState, useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfForm = () => {
    const { addNewSmurf } = useContext(SmurfContext);

    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChanges = e => {
        //console.log(smurf)
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addNewSmurf(smurf);
        setSmurf({
            name: "",
            age: "",
            height: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    id="name"
                    type="text"
                    name="name"
                    value={smurf.name}
                    onChange={handleChanges}
                />

                <label>Age</label>
                <input 
                    id="age"
                    type="number"
                    name="age"
                    value={smurf.age}
                    onChange={handleChanges}
                />
                
                <label>Height</label>
                <input 
                    id="height"
                    type="text"
                    name="height"
                    value={smurf.height}
                    onChange={handleChanges}
                />

                <button type="submit">Add Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;