export const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8080/searchcontracts/v1/user/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }
  
      const data = await response.json();
      return data; // Retorna la respuesta de la API, que debería incluir datos del usuario
    } catch (error) {
      throw new Error(error.message || 'Error en la autenticación');
    }
  };
  
  export const logoutUser = async () => {
    // Lógica de cierre de sesión
    return Promise.resolve();
  };
  