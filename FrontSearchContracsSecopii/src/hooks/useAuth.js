import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser, logoutUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';


export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (email, password, remember) => {
    try {
      const response = await loginUser(email, password);
      navigate('/jobs');
      // Aquí podrías manejar el "remember me" (ej: guardando en localStorage)
    } catch (error) {
      console.error('Login failed:', error);
      // Manejar el error (ej: mostrar un mensaje al usuario)
    }
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return { user, login, logout };
};