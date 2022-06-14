import React, { useState } from 'react';

function Form(){

    const [ansID, setansID] = useState(0);

    
    return(<>
    <label>Enter your answer:</label>
    <input type="text" placeholder="hit me up"></input>
    </>)
}
export default Form;
