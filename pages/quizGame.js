import { useState } from "react";
import Meta from "@/components/Meta";

function App() {
  const [show, setShow] = useState(false);
  const [showResultButton, setShowResultButton] = useState(true);
  const [result, setResult] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const correctAnswer = [4, 2, 4, 3, 1];
  const questions = [
    "What's my favourite book series?",
    "What's my least favourite subject?",
    "What's my favourite snack?",
    "What's my favourite rice?",
    "What's my favourite restaurant?",
  ];

  const answers = [
    [
      "A: Alex rider",
      "B: Harry Potter",
      "C: Skullduggery pleasent",
      "D: Keeper of the lost cities",
    ],
    [
      "A: French",
      "B: Geography",
      "C: Verbal reasoning",
      "D: Non verbal reasoning",
    ],
    ["A: Twix", "B: Haribo's", "C: MOAAM's", "D: Strawberry laces"],
    ["A: Ayamase", "B: Jollof rice", "C: Fried rice", "D: White rice"],
    ["A: Gokuzu", "B: Nando's", "C: TGI friday", "D: Pizza express"],
  ];

  const amount = questions.length;

  const submit = (e) => {
    e.preventDefault();
    if (e.target[correctAnswer[index] - 1].checked) {
      const thisResult = [...result];
      thisResult.push([
        "For the question " + questions[index],
        ` You chose ${e.target[correctAnswer[index] - 1].value}`,
        ` Which was the correct answer.`,
        true,
      ]);
      setResult(thisResult);
      setCorrect(correct + 1);
    } else {
      for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].checked) {
          const thisResult = [...result];
          thisResult.push([
            "For the question " + questions[index],
            ` You chose ${e.target[i].value}`,
            ` Which was wrong. The answer was ${
              answers[index][correctAnswer[index] - 1]
            }`,
            false,
          ]);
          setResult(thisResult);
          break;
        }
        const thisResult = [...result];
        thisResult.push([
          "For the question " + questions[index],
          ` You chose nothing.`,
          ` The answer was ${answers[index][correctAnswer[index] - 1]}`,
          false,
        ]);
        setResult(thisResult);
      }
    }
    setIndex(index + 1);
  };

  const reset = () => {
    setShowResultButton(true);
    setResult([]);
    setIndex(0);
    setCorrect(0);
    setShow(false);
  };

  const view = () => {
    if (show === false) {
      setShow(true);
      setShowResultButton(false);
    }
  };

  return (
    <div className="App">
        <Meta title="Quiz Game"/>
        <style jsx>{`
            .App{
              font-family: 'Poppins', sans-serif;
              background-image: linear-gradient(rgb(0,140,255),rgb(255,140,255));
              display: flex;
              align-items: center;
              justify-content: center;
              height:100vh;
              color: black;
              width: 100vw;
            }
            button{
              border-radius: 5px;;
              margin-top: 10px;;
              padding: 10px;
              font-size: 25px;
              color:black;
              background-color: #007fff;
              border: none;
              cursor: pointer;
            }
            .buttons{
              padding:5px;
              display:flex;
              align-items: center;
              justify-content: center;
              gap:10px;
              margin-bottom: 50px;
            }
            .container{
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              background-color: white;
              min-width: 350px;
            }
            .question{
              text-align: center;
              padding:15px;
              background-color: rgb(255,140,255);
            }
            #submit{
              border:none;
              font-size: 25px;
              padding:15px;
              background-color: rgb(255,140,255);
              cursor: pointer;
            }
            .answers{
              padding: 10px;
              margin-top: 15px;
              padding-left: 7.5px;
            }
            .end-result{
              background-color: white;
              min-width:300px;
              min-height:175px
            }
            .result{
              padding:10px;
            }
            .top{
              min-width:300px;
              min-height:15px;
              background-color: rgb(255,140,255);
            }
            .bottom{
              min-width:300px;
              min-height:15px;
              background-color: rgb(255,140,255);
            }
            #message{
              display: flex;
              justify-content: center;
            }
            #not-showing-yet{
              display: flex;
              justify-content: center;
            }
            .wrong{
              font-weight: 100;
              color:red;
            }
            .right{
              font-weight: 100;
              color:#007fff;
            }
            .answer {
                margin-left: 5px;
            }
        `}</style>
      {index < amount ? (
        <form className="container" onSubmit={submit}>
          <div className="question">
            <label>{questions[index]}</label>
            <br />
          </div>
          <div className="answers">
            {answers[index].map((answer) => (
              <div key={Math.random()}>
                <input
                  type="radio"
                  key={answer}
                  id={answer}
                  name={questions[index]}
                  value={answer}
                />
                <label className="answer" key={answer.toLowerCase()} htmlFor={answer}>
                  {answer}
                </label>
                <br />
              </div>
            ))}
          </div>
          <input type="submit" id="submit" value="Next" />
        </form>
      ) : (
        <div className="end-result">
          <div className="top"></div>
          <div className="buttons">
            <button onClick={reset}>Try again</button>
            {showResultButton && <button onClick={view}>View results</button>}
          </div>
          {show ? (
            <div className="result">
              <p id="message">
                You got {correct} out of {amount} correct!
              </p>
              <p>
                {result.length > 1 && "These are your results:"}
                <br />
                <br />
                <span key={Math.random()} className="results">
                  {result.map((question) => (
                    <span
                      className={question[3] === true ? "right" : "wrong"}
                      key={Math.random()}
                    >
                      {question.map(
                        (section) =>
                          section !== true &&
                          section !== false && (
                            <span key={Math.random()}>
                              <span key={Math.random()}>{section}</span>
                              <br />
                            </span>
                          )
                      )}
                      <br />
                    </span>
                  ))}
                </span>
              </p>
            </div>
          ) : (
            <p id="not-showing-yet">
              You got {correct} out of {amount} correct!
            </p>
          )}
          <div className="bottom"></div>
        </div>
      )}
    </div>
  );
}

export default App;
