import React from "react";
import "./topbar.css";
import {Link} from 'react-router-dom'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DASHBOARD</span>
        </div>
        <div className="topRight">
          <Link to="/logout">
            <button className="topAvatar">LOG OUT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
