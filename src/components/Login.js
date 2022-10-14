import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!loginData.email || !loginData.password) {
      return;
    }
    onLogin(loginData);
  };

  return (
    <div className="auth">
      <h2 className="auth__heading">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          name="email"
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          value={loginData.email || ''}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          id="password"
          type="password"
          autoComplete="password"
          placeholder="Пароль"
          min="8"
          value={loginData.password || ''}
          onChange={handleChange}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  )
};

export default Login;
