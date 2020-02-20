import React from "react";

function Contact({ page, changeState }) {
  return (
    <div>
      <h1>The is my Contact page!</h1>
      <input
        onChange={input => changeState(page.id, input.target.value)}
        value={page.state}
        placeholder="Add data.."
      />
    </div>
  );
}

export default Contact;
