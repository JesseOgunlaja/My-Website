import Meta from "@/components/Meta";
import { useEffect, useState, useRef } from "react";

function App() {
  const symbols = "!£$%^&*()-¬`'|/@:;~#><,.[]{}+=_";
  const [go, setGo] = useState(1);
  const [stages, setStages] = useState(0);
  const [wordInputted, setWordInputted] = useState("");
  const [word, setWord] = useState([]);
  const [resultReached, setResultReached] = useState("nothing");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const inputWordBox = useRef(null);
  const [alphabet, setAlphabet] = useState([
    { letter: "A", status: "no-click" },
    { letter: "B", status: "no-click" },
    { letter: "C", status: "no-click" },
    { letter: "D", status: "no-click" },
    { letter: "E", status: "no-click" },
    { letter: "F", status: "no-click" },
    { letter: "G", status: "no-click" },
    { letter: "H", status: "no-click" },
    { letter: "I", status: "no-click" },
    { letter: "J", status: "no-click" },
    { letter: "K", status: "no-click" },
    { letter: "L", status: "no-click" },
    { letter: "M", status: "no-click" },
    { letter: "N", status: "no-click" },
    { letter: "O", status: "no-click" },
    { letter: "P", status: "no-click" },
    { letter: "Q", status: "no-click" },
    { letter: "R", status: "no-click" },
    { letter: "S", status: "no-click" },
    { letter: "T", status: "no-click" },
    { letter: "U", status: "no-click" },
    { letter: "V", status: "no-click" },
    { letter: "W", status: "no-click" },
    { letter: "X", status: "no-click" },
    { letter: "Y", status: "no-click" },
    { letter: "Z", status: "no-click" },
  ]);

  function click(item) {
    if (item.status === "no-click" && resultReached === "nothing") {
      let currentWord = [...word];
      let currentAlphabet = [...alphabet];
      if (
        word.every(
          (val) => val.letter.toLowerCase() !== item.letter.toLowerCase()
        )
      ) {
        currentAlphabet[currentAlphabet.indexOf(item)].status = "wrong";
        setStages(stages + 1);
        if (stages === 5) {
          lose();
        }
      } else {
        if (indexOfLetter().length > 1) {
          indexOfLetter().forEach((index) => {
            currentWord[index].showing = true;
          });
        } else {
          currentWord[indexOfLetter()[0]].showing = true;
        }
        currentAlphabet[currentAlphabet.indexOf(item)].status = "correct";
      }
      word.every((val) => val.showing === true) && word.length !== 0 && win();
      setWord(currentWord);

      function indexOfLetter() {
        let returnValue = [];
        currentWord.forEach((val, index) => {
          if (val.letter.toLowerCase() === item.letter.toLowerCase()) {
            returnValue.push(index);
          }
        });
        return returnValue;
      }

      function lose() {
        word.forEach((value) => {
          if (value.showing === false) {
            value.red = true;
          }
        });
        setResultReached("loses");
        go === 1
          ? setPlayer1Score(player1Score + 1)
          : setPlayer2Score(player2Score + 1);
      }
    }
    function win() {
      setResultReached("wins");

      go === 1
        ? setPlayer2Score(player1Score + 1)
        : setPlayer1Score(player2Score + 1);
    }
  }

  function submit() {
    if (
      wordInputted.length >= 4 &&
      wordInputted.length <= 15 &&
      !wordInputted.includes(" ") &&
      checkForSymbols() === false
    )
      setWord(
        wordInputted.split("").map((value, index) => {
          return {
            letter: value.toUpperCase(),
            showing: false,
            red: false,
          };
        })
      );
  }

  function playAgain() {
    setResultReached("nothing");
    go === 1 ? setGo(2) : setGo(1);
    setWordInputted("");
    setWord([]);
    setStages(0);
    resetAlphabet();
  }

  function resetAlphabet() {
    setAlphabet([
      { letter: "A", status: "no-click" },
      { letter: "B", status: "no-click" },
      { letter: "C", status: "no-click" },
      { letter: "D", status: "no-click" },
      { letter: "E", status: "no-click" },
      { letter: "F", status: "no-click" },
      { letter: "G", status: "no-click" },
      { letter: "H", status: "no-click" },
      { letter: "I", status: "no-click" },
      { letter: "J", status: "no-click" },
      { letter: "K", status: "no-click" },
      { letter: "L", status: "no-click" },
      { letter: "M", status: "no-click" },
      { letter: "N", status: "no-click" },
      { letter: "O", status: "no-click" },
      { letter: "P", status: "no-click" },
      { letter: "Q", status: "no-click" },
      { letter: "R", status: "no-click" },
      { letter: "S", status: "no-click" },
      { letter: "T", status: "no-click" },
      { letter: "U", status: "no-click" },
      { letter: "V", status: "no-click" },
      { letter: "W", status: "no-click" },
      { letter: "X", status: "no-click" },
      { letter: "Y", status: "no-click" },
      { letter: "Z", status: "no-click" },
    ]);
  }

  function reset() {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setGo(1);
    setResultReached("nothing");
    setWordInputted("");
    setWord([]);
    resetAlphabet();
    setStages(0);
    inputWordBox.current?.focus();
  }

  function checkForSymbols() {
    for (let i = 0; i < wordInputted.split("").length; i++) {
      if (
        symbols.includes(wordInputted.split("")[i]) ||
        wordInputted.split("")[i] === '"'
      ) {
        return true;
      }
    }
    return false;
  }
  if(typeof(window) !== "undefined") {

      window.onkeydown = (e) => {
        if (e.code === "Enter") {
          if (inputWordBox.current === document.activeElement) {
            submit();
          }
        }
      };
  }

  useEffect(() => {
    inputWordBox.current?.focus();
  }, [alphabet]);

  return (
    <div className="App">
        <Meta title="Hangman"/>
        <style jsx>{`
        .App {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(rgb(0, 140, 255), rgb(255, 140, 255));
          font-family: "Poppins", sans-serif;
          width: 100vw;
          flex-direction: column;
        }

        .hangman {
            transform: translateY(-20px)
        }
        
        .bottom {
          height: 5px;
          width: 100px;
          background: black;
        }
        
        .side {
          height: 300px;
          width: 5px;
          background: black;
          transform: translateX(50px);
        }
        
        .top {
          height: 5px;
          width: 175px;
          background: black;
          transform: translateX(50px);
        }
        
        .overhang {
          position: absolute;
          width: 5px;
          height: 50px;
          background: black;
          left: 16.5vw;
        }
        
        .person {
          position: absolute;
        }
        
        .face {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          border: 5px solid black;
          transform: translate(198px, 50px);
        }
        
        .body {
          width: 5px;
          height: 100px;
          background-color: black;
          transform: translate(220px, 50px);
        }
        
        .left-arm {
          width: 60px;
          height: 5px;
          background: black;
          transform: rotateZ(25deg) translate(150px, -70px);
        }
        
        .right-arm {
          width: 60px;
          height: 5px;
          background: black;
          transform: rotateZ(-25deg) translate(200px, 87.5px);
        }
        
        .left-leg {
          width: 60px;
          height: 5px;
          background: black;
          transform: rotateZ(-55deg) translate(51px, 179px);
        }
        
        .right-leg {
          width: 60px;
          height: 5px;
          background: black;
          transform: rotateZ(55deg) translate(165px, -140px);
        }
        
        .word {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          top: 55vh;
          width:100vw;
        }
        
        .letter {
          width: 50px;
          text-align: center;
          display: inline;
          font-size: 50px;
          border-bottom: 5px solid black;
        }
        
        .hiding {
          color: rgba(0, 0, 0, 0)
        }
        
        .red {
          color: red;
        }
        
        .alphabet {
          display: grid;
          grid-template-columns: repeat(9, auto);
          column-gap: 5px;
          row-gap: 5px;
          align-items: center;
          justify-content: center;
          justify-items: center;
          transform: translateY(11vh);
        }
        
        .alphabet-letter {
          height: 60px;
          width: 60px;
          background: white;
          cursor: pointer;
          font-size: 20px;
          border: 2.5px solid black;
          padding: 10px;
        }
        
        .wrong {
          opacity: 0.5;
        }
        
        .correct {
          background: rgb(0, 140, 255);
          color: white;
        }
        
        .enter {
          font-size: 17.5px;
          text-align: center;
        }
        
        .input {
          display: block;
          padding: 5px;
          font-size: 20px;
          text-align: center;
          width: 275px;
        }
        
        .submit {
          height: 35px;
          margin-top: 10px;
          padding: 5px 10px;
          background: white;
          font-size: 20px;
          width: 275px;
          cursor: pointer;
        }
        
        .warning {
          text-align: center;
          margin: 2px;
          display: flex;
        }
        
        .warning-text {
          color: red;
          font-weight: 1000;
          text-align: center;
          display: inline;
        }
        
        .warning-icon {
          height: 20px;
          width: 20px;
          padding: 5px;
          border-radius: 50%;
          background: red;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-right: 5px;
        }
        
        .playAgain {
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 10vh;
          right: 40vw;
          gap: 10px;
          z-index: 2;
        }
        
        .playAgainParagraph {
          display: inline;
          font-size: 20px;
        }
        
        .playAgainButton {
          background: white;
          padding: 5px 10px;
          font-size: 20px;
          cursor: pointer;
        }
        
        .scores {
          font-size: 20px;
          position: absolute;
          display: flex;
          justify-content: space-between;
          left: 0vh;
          width: 100vw;
          top: 7.5vh;
        }
        
        .scores > * {
          margin: 10px;
        }
        
        .playerScore > * {
          text-align: center;
        }
        
        .reset {
          position: absolute;
          cursor: pointer;
          bottom: 2.5%;
          right: 0%;
          padding: 7.5px 15px;
          font-size: 20px;
          background: rgb(0, 160, 255);
        }
        
        `}</style>
      {resultReached !== "nothing" && (
        <div className="playAgain">
          <p className="playAgainParagraph">
            Player {go === 1 ? 2 : 1} {resultReached}
          </p>
          <button className="playAgainButton" onClick={() => playAgain()}>
            Play again
          </button>
        </div>
      )}
      <div className="scores">
        <div className="playerScore">
          <p>Player 1 Score:</p>
          <p>{player1Score}</p>
        </div>
        <div className="playerScore">
          <p>Player 2 Score:</p>
          <p>{player2Score}</p>
        </div>
      </div>
      {word.length !== 0 ? (
        <>
          <div className="hangman">
            <div className="person">
              {stages >= 1 && <div className="face"></div>}
              {stages >= 2 && <hr className="body" />}
              {stages >= 3 && <hr className="left-arm" />}
              {stages >= 4 && <hr className="right-arm" />}
              {stages >= 5 && <hr className="left-leg" />}
              {stages >= 6 && <hr className="right-leg" />}
            </div>
            <hr className="overhang" />
            <hr className="top" />
            <hr className="side" />
            <hr className="bottom" />
          </div>
          <div className="word">
            {word.map((character) => (
              <div
                key={Math.random()}
                className={
                  character.red
                    ? "letter red"
                    : character.showing
                    ? "letter"
                    : "letter hiding"
                }
              >
                {character.showing ? character.letter : "X"}
              </div>
            ))}
          </div>
          <div className="alphabet">
            {alphabet.map((item) => (
              <button
                key={Math.random()}
                className={
                  item.status === "wrong"
                    ? "alphabet-letter wrong"
                    : item.status === "correct"
                    ? "alphabet-letter correct"
                    : "alphabet-letter"
                }
                onClick={() => click(item)}
              >
                {item.letter}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="enter">Player {go}: Enter a word</p>
          <input
            className="input"
            ref={inputWordBox}
            type="text"
            value={wordInputted}
            onChange={(e) => setWordInputted(e.target.value)}
          />
          {wordInputted.length > 15 || wordInputted.length < 4 ? (
            <div className="warning">
              <div className="warning-icon">!</div>
              <p className="warning-text">Word must be 4-15 letter long</p>
            </div>
          ) : null}
          {wordInputted.includes(" ") && (
            <div className="warning">
              <div className="warning-icon">!</div>
              <p className="warning-text">Word must not include spaces</p>
            </div>
          )}
          {checkForSymbols() && (
            <div className="warning">
              <div className="warning-icon">!</div>
              <p className="warning-text">Word must not have symbols in it</p>
            </div>
          )}
          <button onClick={() => submit()} className="submit">
            Submit
          </button>
        </>
      )}
      <button className="reset" onClick={() => reset()}>
        Restart
      </button>
    </div>
  );
}

export default App;
