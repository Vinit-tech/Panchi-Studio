import React, { useState } from 'react';
import Lcard from './longcard';
import Cmp from './cmpapi'

const Detail = () =>{
    const [cmpState, cmpSetstate] = useState(Cmp);
    return(
        <>
        <div class="container">
            <div class="container-fluid box-container">
                <Lcard cmpState = {cmpState} /> 
            </div>
        </div>
        </>
    )
}

export default Detail;