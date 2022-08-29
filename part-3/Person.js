"use strict";

function Person({ name, age, hobbies }) {
  return (
    <div>

      <p>Learn some information about this person</p>
      <h3>{age > 18 ? "Please go vote" : "you must be 18"}</h3>
      <p>{name.length > 8 ? name.slice(0, 6) : name}</p>
      <ul>
        {hobbies.map(s => <li>{s}</li>)}
      </ul>

    </div>
  );
}
