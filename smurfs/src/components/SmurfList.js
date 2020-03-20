import React, { useContext } from 'react';
import Smurf from './Smurf';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfList = () => {
    const { smurfs } = useContext(SmurfContext);
    //console.log('smurfs in smurflist.js', smurfs)

    return (
        <div>
            {smurfs.map(smurf => {
                return (
                    <Smurf 
                        key={smurf.id}
                        smurf={smurf}
                    />
                )
            })}
        </div>
    )
}

export default SmurfList;