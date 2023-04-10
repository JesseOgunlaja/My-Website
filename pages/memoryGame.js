import { useState } from "react";
import Meta from "@/components/Meta";
import Container from "@/components/Container";

const App = () => {
  const [canGo, setCanGo] = useState(false);
  const [grid, setGrid] = useState(0);

  const randomiseGrid = () => {
    if (grid !== 0) {
      setGrid(
        grid.sort(() => {
          return Math.random() - 0.5;
        })
      );
      setGrid(
        grid.map((row) => {
          return row.sort(() => {
            return Math.random() - 0.5;
          });
        })
      );
    }
  };

  const reset = () => {
    setGrid(0);
    setCanGo(false);
  };

  return (
    <div className="app">
      <Meta title="Memory Game"/> 
      <style jsx>{`
        *{
          margin: 0;
          padding: 0;
          border: 0;
          box-sizing: border-box;
        }
        .app {
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
          font-family: "Poppins", sans-serif;
          height: 100vh;
          width: 100vw;
          background-image: linear-gradient(#1da0f1, rgb(255, 140, 255));
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
        .gameMode-selector {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 10px;
        }
        .gameMode-selector button {
          width: 350px;
        }
        .gameMode-selector button:hover {
          border: 2px solid black;
        }
      `}</style>
      {canGo === false ? (
        <div className="gameMode-selector">
          <h1>Memory game</h1>
          <button
            onClick={() =>
              setGrid([
                [1, 2, 2, 0],
                [3, 1, 3, 0],
              ]) & setCanGo(true)
            }
          >
            Easy <span>2x4</span>
          </button>
          <button
            onClick={() =>
              setGrid([
                [5, 4, 3, 0],
                [1, 2, 5, 4],
                [0, 3, 2, 1],
              ]) & setCanGo(true)
            }
          >
            Normal <span>3x4</span>
          </button>
          <button
            onClick={() =>
              setGrid([
                [5, 4, 1, 0],
                [6, 2, 5, 4],
                [0, 3, 2, 7],
                [7, 1, 6, 3],
              ]) & setCanGo(true)
            }
          >
            Hard <span>4x4</span>
          </button>
          <button
            onClick={() =>
              setGrid([
                [5, 4, 1, 0, 8],
                [6, 9, 5, 4, 2],
                [8, 3, 2, 7, 0],
                [7, 1, 6, 3, 9],
              ]) & setCanGo(true)
            }
          >
            Nightmare <span>4x5</span>
          </button>
          <button
            onClick={() =>
              setGrid([
                [5, 4, 1, 0, 8, 10],
                [6, 9, 5, 10, 2, 4],
                [8, 3, 2, 7, 0, 11],
                [11, 1, 6, 3, 9, 7],
              ]) & setCanGo(true)
            }
          >
            Horror <span>4x6</span>
          </button>
        </div>
      ) : (
        <Container grid={grid} randomiseGrid={randomiseGrid} reset={reset} />
      )}
    </div>
  );
};

export default App;
