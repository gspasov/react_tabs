import React, { useState } from "react";

function Contact({ page }) {
  const [_input, setState] = useState([]);

  const changeState = data => {
    setState(data);
  };

  return (
    <div>
      <h1>The is my Contact page!</h1>
      <input
        onChange={input => changeState(input.target.value)}
        value={_input}
        placeholder="Add data.."
      />
    </div>
  );
}

export default Contact;
