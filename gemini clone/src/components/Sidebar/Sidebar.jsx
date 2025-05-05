import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const { onsent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onsent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((curr) => !curr)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="New Chat" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {Array.isArray(prevPrompt) && prevPrompt.length > 0 ? (
              prevPrompt.map((item, index) => (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={index}
                >
                  <img src={assets.message_icon} alt="Message Icon" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              ))
            ) : (
              <p>No recent prompts</p>
            )}
          </div>
      ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Help Icon" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="History Icon" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Settings Icon" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;