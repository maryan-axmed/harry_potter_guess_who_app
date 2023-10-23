import { useEffect, useState } from "react";

const input = document.getElementsByName("house");

const HouseForm = ({handleFormValidation, startGame, housePicked, setHousePicked, setUserHouse, userHouse}) => {

    // use this useState to set the users house and pass down to WrongResponse.js.
    // const [userHouse, setUserHouse] = useState("");

    // get house and pass information to game.js so that message can be personalise
    const handleHouseSelection = (e) => {
        setHousePicked(true);
        setUserHouse(e.target.value);
    }

    return ( 
        <>

            <select id="house-dropdown" required onChange={handleHouseSelection}>
                <option value ="" disabled selected>Select your house</option>
                <option value="Gryffindor" >Gryffindor</option>
                <option value="Slytherin" >Slytherin</option>
                <option value="Ravenclaw" >Ravenclaw</option>
                <option value="Hufflepuff">Hufflepuff</option>
            </select>

            <div class="tooltip">&#8505;
                <span class="tooltiptext">
                    Find out your Hogwarts House <a href="https://www.wizardingworld.com/news/discover-your-hogwarts-house-on-wizarding-world" target="blank">here</a>.
                </span>
            </div>
            

            {housePicked ? 
                <button gamestarted= "false" onClick={startGame} id="start_game_button">Start Game!</button> 
                :
                <button disabled gamestarted= "false" onClick={startGame} id="start_game_button">Start Game!</button> }
        </>
     );
}
 
export default HouseForm;