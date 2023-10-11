import List from "./List";

const Questions = ({ image, showList, answers, correctCharacter, question, nextQuestion, icrementCounter, decreaseCounter, minusPoint, setMinusPoint }) => {
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
            />
        </>
    );
}

export default Questions;