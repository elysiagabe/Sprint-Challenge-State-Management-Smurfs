import React, { useContext, useState } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const Smurf = ({ smurf }) => {
    //console.log('a smurf:', smurf)
    const { deleteSmurf, updateName } = useContext(SmurfContext);
    
    const [newName, setNewName] = useState();
    const [isEditing, setIsEditing] = useState(false);

    const handleChanges = e => {
        setNewName(e.target.value)
        //console.log({newName})
    }

    const handleUpdateName = e => {
        e.preventDefault();
        updateName(smurf.id, newName);
        setIsEditing(false);
    }

    return (
        <div className="smurf-card">
            
            {!isEditing ? (
                <div className="smurf-name">
                    <h2>{smurf.name}</h2>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            ) : (
                <div className="height">
                    <input 
                        type="text"
                        name="newName"
                        id="newName"
                        value={newName}
                        onChange={handleChanges}
                    />
                    <button onClick={handleUpdateName}>Update</button>
                </div>
            )}
            

            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
        </div>
    )
}

export default Smurf;