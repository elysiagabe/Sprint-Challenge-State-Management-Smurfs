import React from 'react';

const Smurf = ({ smurf }) => {
    //console.log('a smurf:', smurf)

    return (
        <div>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
}

export default Smurf;