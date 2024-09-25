// dataService.js
export const jobs = async () => {
    try {
      const response = await fetch('http://localhost:8080/searchcontracts/v1/search/contracts/Villavicencio'); // Cambia esta URL a la de tu API
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }
      const data = await response.json();
      return data; // Retorna los datos obtenidos de la API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  };
  