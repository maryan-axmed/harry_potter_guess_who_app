import { useState } from "react";
import Answer from "./Answer";
import WrongResponse from "./WrongResponse";

const List = ({answers, correctCharacter, nextQuestion, icrementCounter, decreaseCounter}) => {

    const [showWrongResponse, setShowWrongResponse] = useState(false);
    // i need the 'Answer' component to show names of characters
    //      including the correct one (which i will get using props)
    // for now i need to display three random names
    //      i need to pass this info down as well
    const returnResponse = (option) => {
       setShowWrongResponse(option);
    }

    const answerComponents = answers.map((name, index) =>{
        return <Answer 
                    key={index}
                    name={name}
                    correctCharacter={correctCharacter}
                    nextQuestion={nextQuestion}
                    icrementCounter={icrementCounter}
                    returnResponse={returnResponse}
                    decreaseCounter={decreaseCounter}
                />
    })


    return ( 
        <>
       {answerComponents}
       {showWrongResponse && <WrongResponse /> }
        </>
     );
}
 
export default List;