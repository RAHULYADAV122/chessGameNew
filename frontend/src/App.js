// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginCard from './components/LoginCard';
// import SignupCard from "./components/SignUpCard";
// import HomeCard from "./pages/HomeCard";
// import HomePage from "./pages/Home";
// import './App.css';
// import Game from "./pages/Game";


// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<HomeCard />} />
//       <Route path="/home" element={<HomePage />} />
//       <Route path="/game" element={<Game />} />
//       </Routes> 
//     </Router>
//   );
// }

// export default App;



// import Profile from "./pages/Profile";


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";

// import LoginCard from "./components/LoginCard";
// import SignupCard from "./components/SignUpCard";
// import HomePage from "./pages/Home";
// import Game from "./pages/Game";

// import "./App.css";

// function App() {
//   const [showSignup, setShowSignup] = useState(false);

//   return (
//     <Router>
//       <Routes>

//         {/* 🔥 LOGIN / SIGNUP PAGE (CENTERED) */}
//         <Route
//           path="/"
//           element={
//             <div className="auth-page">
//               {showSignup ? (
//                 <SignupCard handleToggleLogin={() => setShowSignup(false)} />
//               ) : (
//                 <LoginCard handleToggleSignup={() => setShowSignup(true)} />
//               )}
//             </div>
//           }
//         />

//         {/* 🏠 HOME DASHBOARD */}
//         <Route path="/home" element={<HomePage />} />

//         {/* ♟ GAME PAGE */}
//         <Route path="/game" element={<Game />} />

//         {/* 🧩 EXTRA ROUTES (FOR SIDENAV / HEADER ICONS) */}
//         <Route path="/profile" element={<div>Profile Page</div>} />
//         <Route path="/settings" element={<div>Settings Page</div>} />
//         <Route path="/support" element={<div>Support Page</div>} />
//         <Route path="/messages" element={<div>Messages Page</div>} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;








import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginCard from "./components/LoginCard";
import SignupCard from "./components/SignUpCard";

import HomePage from "./pages/Home";
import Game from "./pages/Game";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

import "./App.css";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      <Routes>

        {/* 🔐 LOGIN / SIGNUP */}
        <Route
          path="/"
          element={
            <div className="auth-page">
              {showSignup ? (
                <SignupCard handleToggleLogin={() => setShowSignup(false)} />
              ) : (
                <LoginCard handleToggleSignup={() => setShowSignup(true)} />
              )}
            </div>
          }
        />

        {/* 🏠 HOME */}
        <Route path="/home" element={<HomePage />} />

        {/* ♟ GAME */}
        <Route path="/game" element={<Game />} />

        {/* 👤 PROFILE */}
        <Route path="/profile" element={<Profile />} />

        {/* ⚙ SETTINGS */}
        <Route path="/settings" element={<Settings />} />

        {/* 🆘 SUPPORT */}
        <Route path="/support" element={<Support />} />

      </Routes>
    </Router>
  );
}

export default App;
