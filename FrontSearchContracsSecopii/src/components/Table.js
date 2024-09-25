import React, { useState } from 'react';
import '../styles/Table.css';
import useFetchData from '../hooks/useJobs'; // Importa el hook

function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  
  const { data, loading, error } = useFetchData(); // Usa el hook

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
      paginate(currentPage + 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Mensaje de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Mensaje de error
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Job title</th>
            <th>Agency</th>
            <th>Contract Term</th>
            <th>Cash</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index}>
              <td>{row['jobTitle']}</td>
              <td>{row['agency']}</td>
              <td>{row['contract']}</td>
              <td>{row['cash']}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        {[...Array(Math.ceil(data.length / rowsPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / rowsPerPage)}>Next</button>
      </div>
    </div>
  );
}

export default Table;
