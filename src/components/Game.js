import Counter from "./Counter";
import Questions from "./Questions";
import WrongResponse from "./WrongResponse";

const Game = ({ image, counter, showList, answers, correctCharacter, question, nextQuestion, icrementCounter, decreaseCounter}) => {
    return (
        <>
            <Questions 
                image={image} 
                showList={showList} 
                answers={answers}
                correctCharacter={correctCharacter}
                question={question}
                nextQuestion={nextQuestion}
                icrementCounter={icrementCounter}
                decreaseCounter={decreaseCounter} />
            <Counter counter={counter} />
            {/* <WrongResponse /> */}
        </>
    );
}

export default Game;