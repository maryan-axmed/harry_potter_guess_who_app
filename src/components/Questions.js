import List from "./List";

const Questions = ({ image, showList, answers, correctCharacter, question, nextQuestion, icrementCounter, decreaseCounter }) => {
    return (
        <>
            <img id="character" src={image} />
            {showList && <List
                answers={answers}
                correctCharacter={correctCharacter}
                question={question}
                nextQuestion={nextQuestion}
                icrementCounter={icrementCounter}
                decreaseCounter={decreaseCounter}
            />
            }
        </>
    );
}

export default Questions;