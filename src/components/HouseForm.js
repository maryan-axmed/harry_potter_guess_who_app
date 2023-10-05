import { useState } from "react";

const input = document.getElementsByName("house");

const HouseForm = ({props, handleFormValidation, startGame, housePicked, setHousePicked}) => {

    // get house and pass information to game.js so that message can be personalised
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

            {housePicked ? 
                <button gamestarted= "false" onClick={startGame}>Start Game!</button> 
                :
                <button disabled gamestarted= "false" onClick={startGame}>Start Game!</button> }
        </>
     );
}
 
export default HouseForm;