import { useEffect, useState } from "react";
import List from "../components/List";
import logo from "./Harry-potter-Logo.png"
import Counter from "../components/Counter";
import HouseForm from "../components/HouseForm";

const Container = () => {

    const [listOfCharacters, setListOfCharacters] = useState([]);
    const [image, setImage] = useState(null);
    const [showList, setShowList] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [correctCharacter, setCorrectCharacter] = useState("");
    const [showCounter, setShowCounter] = useState(false);
    const [question, setQuestion] = useState("");
    const [randomCharacter, setRandomCharacter] = useState({});
    const [counter, setCounter] = useState(0);
    const [showForm, setShowForm] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://hp-api.onrender.com/api/characters");
            const jsonData = await response.json();

            setListOfCharacters(jsonData);
        }

        fetchData();
    }, []);

    // only want the game to show if 'start game' has been clicked- need css to do this ??
    // set button 'gamestarted' attribute to 'false'
    // use handleStartGame that will change 'gamestarted'to true.
    // when 'gamestarted' is true, then the image and list of answers will show.

    const validCharacter = listOfCharacters.filter((character) => character.image);

    // need to get random image from api and display in container 
    // not all objects have an image 
    // need to filter out the objects that do have a valid image 
    // need to make sure that app goes through all the images in the list

    const startGame = () => {
        const startButton = document.querySelector("button");
        const newGame = startButton.getAttribute("gamestarted");
        const newGameStarting = newGame === "true";
        const booleanInvented = !newGameStarting;   
        startButton.setAttribute("gamestarted", booleanInvented);

        
        if(newGame === "false"){
        // REMOVE 'START GAME' BUTTON WHEN GAME HAS STARTED:
            startButton.style.display = "none";
            
        // REMOVE HOUSE FORM WHEN GAME HAS STARTED:
            setShowForm(false);
            

        // GET RANDOM CHARACTER IMAGE WHEN GAME HAS STARTED
            // get only objects that have an image
            // get a random index in my validCharacter:
            const randomIndex = Math.floor(Math.random()* validCharacter.length);
            const randomCharacter = validCharacter[randomIndex];
            setImage(randomCharacter.image);

            // set the correct character to the random character object being shown
            setCorrectCharacter(randomCharacter);
            // render an img tag with an image of the character
            console.log(randomCharacter.name);


        // SHOW COUNTER WHEN GAME HAS STARTED:
            setShowCounter(true);

        // SET QUESION/IMAGE INDEX TO BE AT ONE:
            setQuestion(randomCharacter.id);
            console.log("id ", randomCharacter.id);


        // SHOW ANSWER LIST WHEN GAME HAS STARTED:
            setShowList(true);
        }  
    }


// GET THE ANSWER LIST:
            // get 3 random names and then .push() the name of the character that is being show 
            //          how do i get the name- through the id?
            // shuffle that array
            // pass it down to list 
            // map through and have them be displayed as the 'Answer' component
    const getNames = () => {
        const randomNames = [];
        
        const randomOrder = [...validCharacter].sort(() => Math.random() -0.5).filter((character) => character.name !== correctCharacter.name);
        for(let i=0 ; i< 3; i++){
            if(randomOrder[i]){
                randomNames.push(randomOrder[i].name)
            }
        }

        const randomInsertion = (name, string) => {
            const randomIndex= Math.floor(Math.random() * (randomNames.length +1));
            randomNames.splice(randomIndex, 0, string);
        }
        
        randomInsertion(randomNames, correctCharacter.name);
        console.log(correctCharacter);
        setAnswers(randomNames);
    }


// GET RANDOM CHARACTER.ID SO THAT I CAN MOVE ON TO NEXT QUESTION
    const nextQuestion =() => {
        let randomIndex = Math.floor(Math.random() * validCharacter.length);
        let randomCharacter = validCharacter[randomIndex];
        while(randomCharacter.name === correctCharacter.name){
            console.log(randomCharacter.name);
            console.log(correctCharacter.name);
            randomIndex = Math.floor(Math.random() * validCharacter.length);
            randomCharacter = validCharacter[randomIndex];
        }

        setQuestion(randomCharacter.id);
        setImage(randomCharacter.image);
        setCorrectCharacter(randomCharacter);

        console.log(randomCharacter.id);
        // getNames();
    }

// getNames will now wait for the correct character to be 
// set to the new random character 
    useEffect(() => {
        getNames();
    }, [correctCharacter])
    
    const icrementCounter = () => {
        setCounter(counter + 1);
    }

    const decreaseCounter = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    }


    return ( 
        <>
        <body>
        <header>
        <img id="logo" src={logo} alt="hp_logo"></img>
        <h1>Guess who?</h1>
        </header>

        <main>
        {/* {showForm && <HouseForm />} */}
        
        {showCounter && <Counter counter={counter}/>}

        <img id="character" src={image}/>
        <button gamestarted= "false" onClick={startGame}>Start Game!</button>
        {showList && <List 
                        answers={answers} 
                        correctCharacter={correctCharacter}
                        question={question} 
                        nextQuestion={nextQuestion}
                        icrementCounter={icrementCounter}
                        decreaseCounter={decreaseCounter}
                        />
        }
        </main>

        <footer></footer>
        </body>
        </>
     );
}
 
export default Container;