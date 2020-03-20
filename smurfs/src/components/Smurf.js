import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const Smurf = ({ smurf }) => {
    //console.log('a smurf:', smurf)
    const { deleteSmurf } = useContext(SmurfContext);

    return (
        <div>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
        </div>
    )
}

export default Smurf;