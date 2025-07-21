import React from "react";
import "./ChatSection.css";
import { TbSend2 } from "react-icons/tb";
import Darkmode from "../Darkmode/Darkmode";
function ChatSection() {
  return (
    <div className="chatsection">
      <div className="topsection">
        <div className="headings">
          <span>Hello Adarsh</span>
          <span>I'm Your own Assistant</span>
          <span>How can I help you...?</span>
        </div>
      </div>
      <div className="bottomsection">
        <input type="text" placeholder="Enter a prompt" id="" />
        <button id="sendbtn">
          <TbSend2 />
        </button>
        <Darkmode />
      </div>
    </div>
  );
}

export default ChatSection;
