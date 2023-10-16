import List from "./List";

const Questions = ({ image, showList, answers, correctCharacter, question, nextQuestion, icrementCounter, decreaseCounter, minusPoint, setMinusPoint, counter, userHouse, setUserHouse }) => {
    return (
        <>
            <img id="character" src={image} />
            <List 
                answers={answers}
                correctCharacter={correctCharacter}
                question={question}
                nextQuestion={nextQuestion}
                icrementCounter={icrementCounter}
                decreaseCounter={decreaseCounter}
                minusPoint = {minusPoint}
                setMinusPoint = {setMinusPoint}
                counter = {counter}
                setUserHouse = {setUserHouse}
                userHouse = {userHouse}
            />
        </>
    );
}

export default Questions;