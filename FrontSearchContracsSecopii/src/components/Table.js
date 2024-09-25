import React, { useState } from 'react';
import '../styles/Table.css';

function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const data = [
    {
      'Job title': 'Prestación de servicios profesionales en plomeria',
      'Agency': 'Universidad de los llanos',
      'Contract Term': '4 meses',
      'Cash': '8\'800.000 COP',
    },
    {
      'Job title': 'Asesoría en arquitectura sostenible',
      'Agency': 'Universidad Nacional de Colombia',
      'Contract Term': '6 meses',
      'Cash': '15\'600.000 COP',
    },
    {
      'Job title': 'Servicios de consultoría en ingeniería civil',
      'Agency': 'Pontificia Universidad Javeriana',
      'Contract Term': '3 meses',
      'Cash': '9\'300.000 COP',
    },
    {
      'Job title': 'Capacitación en sistemas eléctricos',
      'Agency': 'Universidad Industrial de Santander',
      'Contract Term': '2 meses',
      'Cash': '5\'200.000 COP',
    },
    {
      'Job title': 'Diseño de interiores para biblioteca',
      'Agency': 'Universidad del Valle',
      'Contract Term': '5 meses',
      'Cash': '12\'500.000 COP',
    },
    {
      'Job title': 'Mantenimiento de equipos de laboratorio',
      'Agency': 'Universidad de Antioquia',
      'Contract Term': '8 meses',
      'Cash': '20\'800.000 COP',
    },
    {
      'Job title': 'Servicios de topografía para campus universitario',
      'Agency': 'Universidad Tecnológica de Pereira',
      'Contract Term': '3 meses',
      'Cash': '7\'800.000 COP',
    },
    {
      'Job title': 'Consultoría en eficiencia energética',
      'Agency': 'Universidad del Rosario',
      'Contract Term': '4 meses',
      'Cash': '10\'400.000 COP',
    },
  ];

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
              <td>{row['Job title']}</td>
              <td>{row['Agency']}</td>
              <td>{row['Contract Term']}</td>
              <td>{row['Cash']}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage}></button>
        {[...Array(Math.ceil(data.length / rowsPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage}></button>
      </div>
    </div>
  );
}

export default Table;