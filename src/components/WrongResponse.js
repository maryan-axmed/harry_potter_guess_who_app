import { useState } from "react";

const WrongResponse = (minusPoint) => {

    
    return ( 
        <>
            {minusPoint === 1 ? <h2>Wrong answer! Try Again!</h2> : <h2>Wrong answer! -1 point! Try again!</h2> }
        </>
     );
}
 
export default WrongResponse;