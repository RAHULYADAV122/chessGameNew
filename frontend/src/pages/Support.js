import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="support-page">
      <h2 className="page-title">Support</h2>

      <div className="support-grid">
        <div className="support-card">
          <h3>📧 Email Support</h3>
          <p>support@indichess.com</p>
        </div>

        <div className="support-card">
          <h3>❓ FAQ</h3>
          <p>Find answers to common questions</p>
        </div>

        <div className="support-card">
          <h3>🐞 Report a Bug</h3>
          <p>Help us improve IndiChess</p>
        </div>

        <div className="support-card">
          <h3>📞 Contact</h3>
          <p>24/7 Support Available</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
