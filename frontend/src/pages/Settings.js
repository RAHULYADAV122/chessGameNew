import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);

  return (
    <div className="settings-page">
      <h2 className="page-title">Settings</h2>

      {/* APPEARANCE */}
      <div className="settings-card">
        <h3>Appearance</h3>

        <div className="setting-row">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="settings-card">
        <h3>Notifications</h3>

        <div className="setting-row">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={() => setEmailNotif(!emailNotif)}
          />
        </div>
      </div>

      {/* ACCOUNT */}
      <div className="settings-card danger">
        <h3>Account</h3>
        <button className="danger-btn">Logout</button>
      </div>
    </div>
  );
};

export default Settings;
