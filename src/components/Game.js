import Counter from "./Counter";
import Questions from "./Questions";
import WrongResponse from "./WrongResponse";

const Game = ({ image, counter, showList, answers, correctCharacter, question, nextQuestion, icrementCounter, decreaseCounter, minusPoint, setMinusPoint, userHouse, setUserHouse}) => {

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
                decreaseCounter={decreaseCounter} 
                counter = {counter}
                minusPoint ={minusPoint}
                setMinusPoint = {setMinusPoint}
                userHouse = {userHouse}
                setUserHouse= {setUserHouse}
            />
            <Counter 
                counter={counter} 
            />
            {/* <WrongResponse /> */}
        </>
    );
}

export default Game;