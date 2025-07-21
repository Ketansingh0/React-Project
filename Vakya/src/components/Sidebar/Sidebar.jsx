import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import "./Sidebar.css";

function Sidebar() {
  const [extend, setExtend] = useState(false);
  return (
    <div className="sidebar">
      <GiHamburgerMenu
        id="ham"
        onClick={() => {
          setExtend((prev) => !prev);
        }}
      />
      <div className="newchat">
        <FaPlus />
        {extend ? <p>New Chat</p> : null}
      </div>
      <div className="recent">
        <MdOutlineMessage />
        {extend ? <p>Who are you?</p> : null}
      </div>
    </div>
  );
}

export default Sidebar;
