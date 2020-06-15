import React from "react";

export default function Header() {
  return (
    <header>
      <div className="pageTitle">Home</div>
      <div className="topMenu">
        <div className="userInfo">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="admin"
          />
        </div>
        <li>Logout</li>
      </div>
    </header>
  );
}
