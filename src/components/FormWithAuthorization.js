import React from "react";

function FormWithAuthorization({ heading, buttonName }) {
  return (
    <div className="auth">
      <h2 className="auth__heading">{heading}</h2>
      <form className="auth__form">
        <input type="email" placeholder="Email" required />
        <input type="password" min="8" placeholder="Пароль" required />
        <button type="submit">{buttonName}</button>
      </form>
    </div>
  );
};

export default FormWithAuthorization;
