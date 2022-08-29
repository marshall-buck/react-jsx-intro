"use strict";

function Tweet({ username, name, date, message }) {
  return (
    <ul>
      <li>
        <p className="name">From name {name}</p>
        <p className="username">From user {username}</p>
        <p>Time {date}</p>
        <p className="message">{message}</p>


      </li>
    </ul>


  );
}