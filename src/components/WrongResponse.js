import { useEffect, useState } from "react";

const WrongResponse = (minusPoint, counter, userHouse) => {

    // when the game starts, the number of right points is 0.
    // if the user gets the answer wrong at this point, they should get a different message
    // than if they had gained points, and then got the answer wrong

    useEffect(() => {
        console.log(userHouse);
    }, [])

    return ( 
        <>
            <h2>Wrong answer! Try again!</h2>
            <p>{userHouse}</p> 
        </>
     );
}
 
export default WrongResponse;