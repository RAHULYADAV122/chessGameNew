// import React, { useState } from 'react';
// import "./component-styles/SideNav.css";
// import { FaChessPawn, FaSun, FaCog, FaBars } from 'react-icons/fa';  // Icons for the menu items

// const SideNav = () => {
//   const [lightMode, setLightMode] = useState(false);  // To toggle between light and dark UI

//   const handleToggleLightMode = () => {
//     setLightMode(!lightMode);
//   };

//   return (
//     <div className={`side-nav ${lightMode ? 'light-mode' : ''}`}>
//       <div className="logo">
//         <h2>Chess.com</h2>
//         <FaChessPawn size={40} />
//       </div>

//       <div className="menu">
//         <button className="menu-item">
//           <FaChessPawn size={20} />
//           Play
//         </button>
//       </div>

//       <div className="settings">
//         <button className="settings-item" onClick={handleToggleLightMode}>
//           <FaSun size={20} />
//           Light UI
//         </button>
//         <button className="settings-item">
//           <FaBars size={20} />
//           Collapse
//         </button>
//         <button className="settings-item">
//           <FaCog size={20} />
//           Settings
//         </button>
//         <button className="settings-item">
//           <FaBars size={20} />
//           Support
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SideNav;






import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./component-styles/SideNav.css";
import { FaChessPawn, FaSun, FaCog, FaBars, FaUser } from 'react-icons/fa';

const SideNav = () => {
  const [lightMode, setLightMode] = useState(false);
  const navigate = useNavigate();   // ✅ IMPORTANT

  return (
    <div className={`side-nav ${lightMode ? 'light-mode' : ''}`}>

      <div className="logo">
        <h2>Chess.com</h2>
        <FaChessPawn size={40} />
      </div>

      {/* PLAY */}
      <div className="menu">
        <button className="menu-item" onClick={() => navigate("/home")}>
          <FaChessPawn size={20} />
          Play
        </button>
      </div>

      {/* SETTINGS */}
      <div className="settings">

        <button
          className="settings-item"
          onClick={() => setLightMode(!lightMode)}
        >
          <FaSun size={20} />
          Light UI
        </button>

        <button
          className="settings-item"
          onClick={() => navigate("/profile")}
        >
          <FaUser size={20} />
          Profile
        </button>

        <button
          className="settings-item"
          onClick={() => navigate("/settings")}
        >
          <FaCog size={20} />
          Settings
        </button>

        <button
          className="settings-item"
          onClick={() => navigate("/support")}
        >
          <FaBars size={20} />
          Support
        </button>

      </div>
    </div>
  );
};

export default SideNav;
