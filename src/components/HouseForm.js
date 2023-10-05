import { useState } from "react";

const input = document.getElementsByName("house");

const HouseForm = ({props, handleFormValidation, startGame, housePicked, setHousePicked}) => {

    // get value and pass information to game.js
    const handleHouseSelection = () => {
        setHousePicked(true);
    }

    return ( 
        <>

            <select id="house-dropdown" required onChange={handleHouseSelection}>
                <option value ="" disabled selected>Select your house</option>
                <option>Gryffindor</option>
                <option>Slytherin</option>
                <option>Ravenclaw</option>
                <option>Hufflepuff</option>
            </select>

            {/* the original "enter" button is reduntant, as "start game" will handle everythig after the house has been picked*/}
            {/* REMOVE "ENTER" BUTTON */}
            {/* <button onClick={handleSubmission}>Enter</button> */}


            {/* need to make a coniditon using state, if dropdown was selected then button shown and game can start */}
            {housePicked ? 
                <button gamestarted= "false" onClick={startGame}>Start Game!</button> 
                :
                <button disabled gamestarted= "false" onClick={startGame}>Start Game!</button> }
        </>
     );
}
 
export default HouseForm;