import React, { useState } from "react";
import './Notifi.css';

interface ISetting {
  name: string;
  description: string;
  state: any;
}

const Setting = ({ name, description, state }: ISetting, index: number) => {
  const [setting, setSetting] = state;

  function ChangeSetting() {
      setSetting(!setting);
  }

  return (
      <div className="row setting" key={index}>
          <div className="col-10">
              <h5>{name}</h5>
              <p>{description}</p>
          </div>
          <div className="col-2">
              <button className="btn" onClick={ChangeSetting}>
                  <i
                      className={`fas fa-toggle-${setting ? "on" : "off"}`}
                  ></i>
              </button>
          </div>
      </div>
  );
};

export const NotificationSettings = () => {

  const settings: ISetting[] = [
      {
          name: "Email Notification",
          description: "Commits data and history",
          state: useState(false)
      },
      {
          name: "Push Notification",
          description: "Commits data and history",
          state: useState(true)
      },
      {
          name: "Monthly Reports",
          description: "Commits data and history",
          state: useState(false)
      },
      {
          name: "Quarter Reports",
          description: "Commits data and history",
          state: useState(false)
      },
  ];

  const actualSettings = settings.map(s => {
      const [setting] = s.state
      return {
          name: s.name,
          description: s.description,
          toggleOn: setting
      }
  });

  return (
      <div className="notification container">
          <div className="row col-4 offset-4">
              <h3>Notifications</h3>
              <div className="container px-4">
                  <h5>Controll your notification and auto-follow settings.</h5>
                  {settings.map(({ name, description, state }, index) => (
                      <Setting
                          name={name}
                          description={description}
                          key={index}
                          state={state}
                      />
                  ))}
              </div>
              {/* <div className="col-12">
                  {actualSettings.map(s => {
                      return <p> {s.name} is toggled {s.toggleOn ? 'on' : 'off'} </p>
                  })}
              </div> */}
          </div>
      </div>
  );
};

export default NotificationSettings;