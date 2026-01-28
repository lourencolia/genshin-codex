'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StarryBackground from './StarryBackground';

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleContinue = async () => {
    setLoading(true)
    router.push('/home')
  }

  return (
    <div className="login-container">
      <StarryBackground />
      
      <div className="content-wrapper">
        <div className="card">
          <div className="logo-container">
            <h1 className="title">Genshin Codex</h1>
            <p className="subtitle">Insira seu UID</p>
          </div>

          <div className="input-group">
            <input
              type="text"
              className={`input`}
              placeholder="UID"
              maxLength={9}
              inputMode="numeric"
            />
              <p className="helper-text">
                Encontre seu UID no jogo em: Menu → Configurações
              </p>
          </div>

          <button
            className={`button`}
            onClick={handleContinue}
            disabled={loading}
          >
              Continuar
          </button>

          <div className="info-box">
            <p className="info-text">
              Certifique-se de que seu perfil está público para exibir seus personagens
            </p>
          </div>

          <div className="register-link">
            <p className="register-text">
              Quer recursos extras? <span className="register-bold">Criar conta</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: left;
          padding: 45px;
          overflow: hidden;
        }

        .content-wrapper {
          width: 100%;
          max-width: 400px;
          z-index: 1;
        }

        .card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .logo-container {
          text-align: center;
          margin-bottom: 32px;
        }

        .title {
          font-size: 32px;
          font-weight: 700;
          color: #1F2937;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-family: var(--font-genshin);
        }

        .subtitle {
          font-size: 16px;
          color: #4B5563;
        }

        .input-group {
          margin-bottom: 24px;
        }

        .input {
          width: 100%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 20px;
          color: #1F2937;
          background: rgba(255, 255, 255, 0.9);
          text-align: center;
          letter-spacing: 2px;
          transition: border-color 0.3s ease;
          outline: none;
        }

        .input:focus {
          border-color: #1F2937;
        }

        .input-error {
          border-color: #ef4444;
        }

        .input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .helper-text {
          font-size: 12px;
          color: #4B5563;
          margin-top: 8px;
          text-align: center;
        }

        .error-text {
          font-size: 12px;
          color: #ef4444;
          margin-top: 8px;
          text-align: center;
          font-weight: 600;
        }

        .button {
          width: 100%;
          background: #1F2937;
          border: none;
          border-radius: 12px;
          padding: 16px;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.3s ease, transform 0.1s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .button:active:not(:disabled) {
          transform: translateY(0);
        }

        .button-disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #FFFFFF;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .info-box {
          display: flex;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 20px;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .info-icon {
          font-size: 20px;
          margin-right: 8px;
        }

        .info-text {
          flex: 1;
          font-size: 12px;
          color: #1F2937;
          line-height: 18px;
          margin: 0;
        }

        .register-link {
          text-align: center;
          padding: 12px 0;
          cursor: pointer;
        }

        .register-text {
          font-size: 14px;
          color: #4B5563;
          margin: 0;
        }

        .register-bold {
          font-weight: 700;
          color: #1F2937;
        }

        @media (max-width: 480px) {
          .card {
            padding: 24px;
          }

          .title {
            font-size: 28px;
          }

          .input {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}