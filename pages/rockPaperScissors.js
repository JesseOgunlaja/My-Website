import Meta from "@/components/Meta";
import { useState } from "react";

function App() {
  const [choice, setChoice] = useState(" ");
  const [computerChoice, setComputerChoice] = useState(" ");
  const [result, setResult] = useState(" ");

  const generateChoice = () => {
    const num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
      case 1:
        setComputerChoice("Rock");
        break;
      case 2:
        setComputerChoice("Paper");
        break;
      case 3:
        setComputerChoice("Scissors");
        break;
      default:
        break;
    }
  };

  const findWinner = () => {
    switch (computerChoice) {
      case "Rock":
        if (choice === "Rock") {
          setResult("It's a draw");
        }
        if (choice === "Paper") {
          setResult("You win");
        }
        if (choice === "Scissors") {
          setResult("You lose");
        }
        break;
      case "Paper":
        if (choice === "Rock") {
          setResult("You lose");
        }
        if (choice === "Paper") {
          setResult("It's a draw");
        }
        if (choice === "Scissors") {
          setResult("You win");
        }
        break;
      case "Scissors":
        if (choice === "Rock") {
          setResult("You win");
        }
        if (choice === "Paper") {
          setResult("You lose");
        }
        if (choice === "Scissors") {
          setResult("It's a draw");
        }
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setChoice(" ");
    setComputerChoice(" ");
    setResult(" ");
  };

  return (
    <div className="App">
        <Meta title="Rock Paper Scissors"/>
        <style jsx>{`
            .App {
              color:white;
              font-family: "Poppins", sans-serif;
              background: linear-gradient(rgb(0,140,255),rgb(255,140,255));
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100vw;
            }
            #buttons button{
              width:125px;
              padding:5px;
              padding: none;
              background-color:rgb(0,140,255);
              font-size: 30px;
              border-radius: 10px;
              color:white;
            }
            #buttons button:hover {
              cursor: pointer;
              border: 2px solid white;
            }
            #buttons {
              display: flex;
              justify-content: space-evenly;
              transform: translateY(50px);
            }
            .container {
              min-height: 400px;
              min-width: 450px;
              background-color: #333;
              border-radius: 10px;
              padding: 5px;
            }
            #choice {
              padding: 10px;
            }
            #win {
              color: #2ECC40;
            }
            .end-result{
              transform: translateY(50px);
              text-align: center;
            }
            #lose {
              color:red;
            }
            #draw {
              color:blue;
            }
            #draw,#lose,#win{
              font-weight:100;
              padding: 10px;
              padding-bottom:105px;
            }
            #reset-button{
              min-width:204px;
              text-align: center;
              padding:5px 15px;
              font-size: 35px;
              background-color: rgb(0,140,255);
              cursor:pointer;
              color:white;
              border-radius:10px;
              transform: translateY(-75px);
            }
            #reset-button:hover{
              border:2px solid white;
              cursor:pointer;
            }
        `}</style>
      <div className="container">
        <div id="buttons">
          <button onClick={() => choice === " " && setChoice("Rock")}>
            Rock
          </button>
          <button onClick={() => choice === " " && setChoice("Paper")}>
            Paper
          </button>
          <button onClick={() => choice === " " && setChoice("Scissors")}>
            Scissors
          </button>
        </div>
        {choice !== " " && result === " " && findWinner()}

        {choice !== " " && computerChoice === " " && generateChoice()}

        {choice !== " " && (
          <>
            <div className="end-result">
              <div id="choice">Your choice: {choice}</div>
              <div id="choice">Computer choice: {computerChoice}</div>
              <div
                id={
                  result === "You win"
                    ? "win"
                    : result === "You lose"
                    ? "lose"
                    : "draw"
                }
              >
                Result: {result}
              </div>
              <button id="reset-button" onClick={reset}>
                Play again
              </button>
            </div>
              
          </>
        )}
      </div>
    </div>
  );
}

export default App;
