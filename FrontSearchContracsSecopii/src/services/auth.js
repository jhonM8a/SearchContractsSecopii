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
  
    } catch (error) {
      throw new Error(error.message || 'Error en la autenticación');
    }
  };
  
  export const logoutUser = async () => {
    // Lógica de cierre de sesión
    return Promise.resolve();
  };
  