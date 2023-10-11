import { useState } from "react";
import Answer from "./Answer";
import WrongResponse from "./WrongResponse";

const List = ({answers, correctCharacter, nextQuestion, icrementCounter, decreaseCounter, minusPoint, setMinusPoint}) => {

    const [showWrongResponse, setShowWrongResponse] = useState(false);
    // i need the 'Answer' component to show names of characters
    //      including the correct one (which i will get using props)
    // for now i need to display three random names
    //      i need to pass this info down as well

    // this func makes sure the return response is removed after the question moves on.
    // i do not exactly remember why or how this works??
    const returnResponse = (option) => {
            setShowWrongResponse(option);
    }

    // check if counter is 0
    // if 0, then return intialWrongResponse

    const answerComponents = answers.map((name, index) =>{
        return <Answer 
                    key={index}
                    name={name}
                    correctCharacter={correctCharacter}
                    nextQuestion={nextQuestion}
                    icrementCounter={icrementCounter}
                    returnResponse={returnResponse}
                    decreaseCounter={decreaseCounter}
                    minusPoint = {minusPoint}
                    setMinusPoint = {setMinusPoint}
                />
    })


    return ( 
        <>
       {answerComponents}
       {showWrongResponse && <WrongResponse minusPoint= {minusPoint}/> }
       
        </>
     );
}
 
export default List;