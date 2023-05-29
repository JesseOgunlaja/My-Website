import { useState, useEffect } from "react";

const Container = ({ grid, randomiseGrid, reset }) => {
  useEffect(() => {
    randomiseGrid();
  }, []);

  const amount = grid.length * grid[0].length;
  const [goes, setGoes] = useState(0);
  const [flipped, setFlipped] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [prevRow, setPrevRow] = useState(0);
  const [prevColumn, setPrevColumn] = useState(0);

  const [revealedGrid, setRevealedGrid] = useState(
    grid.map((row) => {
      return row.map(() => false);
    })
  );

  const playAgain = () => {
    setRevealedGrid(
      grid.map((row) => {
        return row.map(() => false);
      })
    );
    setFlipped(0);
    setGoes(0);
    randomiseGrid();
    reset();
  };

  const clicked = (row, column) => {
    if (clicks !== 0 && revealedGrid[row][column]) {
    } else {
      const newGrid = [...revealedGrid];
      newGrid[row][column] = true;
      setRevealedGrid(newGrid);
      setClicks(clicks + 1);

      if (clicks === 0) {
        setPrevRow(row);
        setPrevColumn(column);
      }

      if (clicks === 1) {
        setGoes(goes + 1);
        if (grid[row][column] === grid[prevRow][prevColumn]) {
          setTimeout(() => {
            setFlipped(flipped + 2);
            setClicks(0);
          }, 500);
        } else {
          setTimeout(() => {
            newGrid[row][column] = false;
            newGrid[prevRow][prevColumn] = false;
            setRevealedGrid(newGrid);
            setClicks(0);
          }, 1500);
        }
      }
    }
  };

  return (
    <div className="container">
      <style jsx>{`
      .container button:hover {
        border: 2px solid black;
      }
      
      .container {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
      }
      .row {
        display: flex;
        gap: 10px;
      }
      .grid{
        display: flex;
        flex-direction: column;
        gap:10px;
      }
      .card {
        border-radius: 10px;
        height: 100px;
        width: 100px;
        text-align: center;
        font-weight: 300;
        font-size: 40px;
        box-sizing: border-box;
        padding: 20px;
        background-color: white;
        cursor: pointer;
      }
      .card:hover {
        border: 2px solid black;
        transform: scale(1.075, 1.075);
      }
      
      #message {
        width: 350px;
        text-align: center;
        font-size: 35px;
      }
      .gameModeSelector {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
      }
      #restart {
        margin-top: 20px;
        width: 300px;
      }
      .gameModeSelector button {
        width: 350px;
      }
      .gameModeSelector button:hover {
        border: 2px solid black;
      }
      
      .cardHover{
        transform: rotateY(180deg);
      }
      .flipCard{
        height:100px;
        width:100px;
      }
      .front-layer,.back-layer{
        height: 100%;
        width: 100%;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      .inner-layer{
        height: 100%;
        width:100%;
        transition: transform 0.6s;
        transform-style:preserve-3d;
      }
      .back-layer{
        transform: rotateY(180deg);
      }
      button {
        border-radius: 10px;
        width: 265px;
        background-color: white;
        color: black;
        border: none;
        font-size: 37.5px;
        text-align: center;
        font-weight: 300;
        cursor: pointer;
        padding: 14.5px;
      }
      
      
      `}</style>
      <h1>Memory Game</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((number, colIndex) => (
              <div key={colIndex} className="flipCard">
                <div
                  className={
                    revealedGrid[rowIndex][colIndex]
                      ? "inner-layer cardHover"
                      : "inner-layer"
                  }
                >
                  <div key={colIndex} className="front-layer">
                    <div
                      onClick={() =>
                        clicks !== 2 && clicked(rowIndex, colIndex)
                      }
                      key={colIndex}
                      className="card"
                    ></div>
                  </div>

                  <div className="back-layer">
                    <div
                      onClick={() =>
                        clicks !== 2 && clicked(rowIndex, colIndex)
                      }
                      key={colIndex}
                      className="card"
                    >
                      {number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {flipped === amount ? (
        <>
          <div id="message">You won in {goes} tries</div>
          <button onClick={playAgain}>Play again</button>
        </>
      ) : (
        <button id="restart" onClick={playAgain}>
          Go back to start
        </button>
      )}
    </div>
  );
};

export default Container;
