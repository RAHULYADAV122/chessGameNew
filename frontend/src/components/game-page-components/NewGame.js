// import React from "react";

// const NewGame = () => {
//   return (
//     <div>
//       <h2>New Game</h2>
//       <button>Start New Game</button>
//       <button>Play a Friend</button>
//       <button>Custom Challenge</button>
//       <button>Tournaments</button>
//     </div>
//   );
// };

// export default NewGame;





import React from "react";
import { useNavigate } from "react-router-dom";

const NewGame = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>New Game</h2>

      <button onClick={() => navigate("/game")}>
        Start New Game
      </button>

      <button onClick={() => alert("Play Friend coming soon")}>
        Play a Friend
      </button>

      <button onClick={() => alert("Custom Challenge coming soon")}>
        Custom Challenge
      </button>

      <button onClick={() => alert("Tournaments coming soon")}>
        Tournaments
      </button>
    </div>
  );
};

export default NewGame;
