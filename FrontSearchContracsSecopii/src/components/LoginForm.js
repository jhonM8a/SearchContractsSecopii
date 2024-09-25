import React, { useState } from 'react';
import '../styles/LoginForm.css'; // Importamos el archivo CSS
import SocialLoginButtons from './SocialLoginButtons';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, remember);
  };

  return (
    <div className="login-form-container">
      <div className="login-form-header">
        <h2 className="login-header-text">Login</h2>
      </div>
      <div className="login-form-content">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="label">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="checkbox"
            />
            <label htmlFor="remember" className="checkbox-label">Remember me</label>
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="forgot-password">
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
        </form>
        <SocialLoginButtons />
      </div>
    </div>
  );
};

export default LoginForm;
