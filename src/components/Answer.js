const Answer = ({name, correctCharacter, nextQuestion, icrementCounter, returnResponse, decreaseCounter }) => {

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
    if({name}.name == correctCharacter.name){
        console.log("right answer");
        nextQuestion();
        icrementCounter();
        returnResponse(false);
    } else if({name}.name !== correctCharacter.name){
        decreaseCounter();
        returnResponse(true);
    }
}

    return ( 
        <>
        <button onClick={handleAnswerResponse}>{name}</button>
        </>
     );
}
 
export default Answer;