import { useState, useEffect } from 'react';
import { jobs } from '../services/jobs.js'; // Importa tu servicio

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await jobs();
        setData(fetchedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []); // Ejecuta solo una vez al montar el hook

  return { data, loading, error }; // Devuelve los estados
};

export default useFetchData;
