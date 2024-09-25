import React from 'react';
import '../styles/SocialLoginButton.css'; // Importamos el archivo CSS

const SocialLoginButtons = () => {
  return (
    <div className="social-login-container">
      <div className="divider-container">
        <div className="divider-line"></div>
        <div className="divider-text-container">
          <span className="divider-text">Sign in using your account with</span>
        </div>
      </div>
      <div className="button-container">
        <button className="social-button">
          <span className="icon">📘</span> {/* Icono de Facebook */}
          Facebook
        </button>
        <button className="social-button">
          <span className="icon">📧</span> {/* Icono de Google */}
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;
