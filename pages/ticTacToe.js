import { useState, useEffect } from "react";
import Meta from "@/components/Meta";
import styles from '@/styles/TicTacToe.module.css'

function App() {
  const [startingPlayer, setStartingPlayer] = useState("X");
  const [player, setPlayer] = useState("X");
  const [winningLine, setWinningLine] = useState([]);
  const [endMessage, setEndMessage] = useState("");
  const [xScore, setXscore] = useState(0);
  const [oScore, setOscore] = useState(0);
  const [grid, setGrid] = useState(Array.from({ length: 9 }).fill(""));

  const click = (index) => {
    if(grid[index] === ""){
      if (winningLine.length === 0) {
        const currentGrid = [...grid];
        currentGrid[index] = player;
        setGrid(currentGrid);
        player === "X" ? setPlayer("O") : setPlayer("X");
      }
    }
  };

  const checkWin = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningLines.forEach((element) => {
      const [a, b, c] = element;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        if (grid[a] !== "") {
          setWinningLine(element);
          setTimeout(() => {
            setEndMessage(grid[a]);
          }, 1250);
        }
      }
    });
  };

  const reset = (playAgain) => {
    if(playAgain){  
      if (startingPlayer === "X") {
        setStartingPlayer("O");
        setPlayer("O");
      } else {
        setStartingPlayer("X");
        setPlayer("X");
      }
    }
    else{
      setPlayer(startingPlayer)
    }

    setWinningLine([]);
    setEndMessage("");
    setGrid(Array.from({ length: 9 }).fill(""));
  };

  useEffect(() => {
    if (grid.every((val) => val !== "")) {
      setEndMessage("It's a draw");
    } else {
      checkWin();
    }
  }, [grid]);

  useEffect(() => {
    if (endMessage === "X") {
      setXscore((xScore) => xScore + 1);
    } else if (endMessage === "O") {
      setOscore((oScore) => oScore + 1);
    }
  }, [endMessage]);

  return (
    <div className={styles.app}>  
    <Meta title="Tic Tac Toe"/> 
      {endMessage === "" ? (
        <>
          <div className={styles.container}>
            <div className={styles.score}>
              <span className={styles.Xscore}>
                <span>X</span>
                <span>-</span>
                <span>{xScore}</span>
              </span>
              <span className={styles.Oscore}>
                <span>O</span>
                <span>-</span>
                <span>{oScore}</span>
              </span>
            </div>
            <div className={styles.grid}>
              {grid.map((element, index) => (
                <div
                  key={index}
                  className={
                    winningLine.includes(index) ? [`${styles.cell} ${styles.winningLine}`] : styles.cell
                  }
                  onClick={() => click(index)}
                >
                  <span className={element === "X" ? styles.X : element === "O" ? styles.O : null}>
                    {element === "X" && (
                      <>
                        <hr className={styles.line1} /> <hr className={styles.line2} />
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>
            <button className={styles.reset} onClick={() => reset(false)}>
              Restart game
            </button>
          </div>
        </>
      ) : (
        <div className={styles.endcontainer}>
          {endMessage !== "" && (
            <div className={styles.result}>
              {endMessage === "X" ? (
                <div className={styles.endresult}>
                  <div className={styles.bigX}>
                    <hr className={styles.bigline1} /> <hr className={styles.bigline2} />
                  </div>
                  <p className={styles.winner}>Winner!</p>
                </div>
              ) : endMessage === "O" ? (
                <div className={styles.endresult}>
                  <p className={styles.bigO}>O</p>
                  <p className={styles.winner}>Winner!</p>
                </div>
              ) : (
                <div className={styles.draw}>
                  <div className={styles.OandX}>
                    <div className={styles.drawcontainer}>
                      <div className={styles.bigX}>
                        <hr className={styles.bigline1} />{" "}
                        <hr className={styles.bigline2} />
                      </div>
                      <p className={styles.bigO}>O</p>
                    </div>
                  </div>
                  <p className={[styles.winner, styles.drawWinner]}>Draw!</p>
                </div>
              )}
              <button className={styles.playagain} onClick={() => reset(true)}>
                Play again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
