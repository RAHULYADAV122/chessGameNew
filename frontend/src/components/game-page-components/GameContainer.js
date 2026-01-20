// import React, { useState } from "react";
// import BoardLayout from "./BoardLayout";
// import GamePlayControlContainer from "./GamePlayControlContainer";



// const GameContainer = () => {
//   // Function to add move to the list

//   const [moves, setMoves] = useState([]);  // Holds the list of moves

//   // Function to add a move to the history
//   const addMove = (move) => {
//     // we will check if it is white move or black move
//     if(move.piece !== move.piece.toLowerCase())
//     {
//       const newMove = {move, moveToWhite : move.moveTo };
//       setMoves((moves) => [...moves, newMove]);
//     }
//     else{
//       setMoves((prevMoves) => {
//       const newMoves = [...prevMoves];
//       const lastMove = { 
//         ...newMoves[newMoves.length - 1], 
//         moveToBlack: move.moveTo,
//         tc: `Black's Turn: ${move.tc}`,
//         tr: move.tr
//       };
//       newMoves[newMoves.length - 1] = lastMove;  // Update the last move
//       return newMoves;  // Return a new array to trigger re-render
//     });
//     }
//   };

//   return (
//     <div className="game-container">
      
//       <BoardLayout addMove={addMove}/>
//       <GamePlayControlContainer moves={moves}/>
//     </div>
//   );
// };

// export default GameContainer;










import React, { useState } from "react";
import BoardLayout from "./BoardLayout";
import GamePlayControlContainer from "./GamePlayControlContainer";

const GameContainer = () => {

  const [moves, setMoves] = useState([]);     // move history
  const [gameId, setGameId] = useState(0);   // 🔥 game reset key

  // Add move to history
  const addMove = (move) => {
    if (move.piece !== move.piece.toLowerCase()) {
      const newMove = { move, moveToWhite: move.moveTo };
      setMoves((moves) => [...moves, newMove]);
    } else {
      setMoves((prevMoves) => {
        const newMoves = [...prevMoves];
        const lastMove = {
          ...newMoves[newMoves.length - 1],
          moveToBlack: move.moveTo,
          tc: `Black's Turn: ${move.tc}`,
          tr: move.tr,
        };
        newMoves[newMoves.length - 1] = lastMove;
        return newMoves;
      });
    }
  };

  // 🔥 NEW GAME HANDLER
  const handleNewGame = () => {
    setMoves([]);                 // clear move history
    setGameId((prev) => prev + 1); // force board reset
  };

  return (
    <div className="game-container">
      
      {/* Board resets when gameId changes */}
      <BoardLayout key={gameId} addMove={addMove} />

      {/* Pass new game handler */}
      <GamePlayControlContainer
        moves={moves}
        onNewGame={handleNewGame}
      />

    </div>
  );
};

export default GameContainer;
