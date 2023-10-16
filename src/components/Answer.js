import { useEffect } from "react";

const Answer = ({name, correctCharacter, nextQuestion, icrementCounter, returnResponse, decreaseCounter, minusPoint, setMinusPoint, setUserHouse, userHouse }) => {

    // this function should: 
    //  • stop the webpage reloading when it is clicked
    //  • show user that this is the correct answer - if it the right answers
    //          if {name} clicked === randomCharacter.name => return true;
    //          if true is return => add to counter + move on to next question
    //  • show user that this is the wrong answer - if it the wrong answers
    //          if {name} clicked !== randomCharacter.name => return false;
    //          if false is return => move on to next question   
    //  • load a new image and a new multiple choice selection
const handleAnswerResponse = (e) => {
    e.preventDefault();
    if(name == correctCharacter.name){
        console.log("right answer");
        nextQuestion();
        icrementCounter();
        returnResponse(false);
    } else if(name !== correctCharacter.name){
        console.log("wrong answer");
        decreaseCounter();
        returnResponse(true);
        setMinusPoint(minusPoint + 1);
    }
}


    return ( 
        <>
        <button onClick={handleAnswerResponse}>{name}</button>
        </>
     );
}
 
export default Answer;