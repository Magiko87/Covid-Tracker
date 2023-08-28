/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import useRegionData from "../Region/UseChartData"; 
import  "../Region/reegion.css";  
import ErrorPage from '../Error/Error';
import Loader from "../Loader/Loader";
import  DataDisplay from "../DataDisplay/DataDisplay";
import { Helmet } from "react-helmet";



function RegionPage({isDarkMode}) {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [chartType, setChartType] = useState('bar');
  const [tableData, setTableData] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (tableData.length > 0) {
      setIsLoading(false);
    }
  }, [tableData]);

  const chartData = useRegionData(selectedRegion, setTableData);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setChartType('line');
    setIsLoading(true);
    setHasError(false);
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: 'black',
        },
      },
      y: {
        ticks: {
          color: 'black',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black', // Aggiunto un colore per le etichette della legenda
        },
      },
    },
    barThickness: 15,
    indexAxis: 'y',
    maintainAspectRatio: false, 
    height: 400,
  };

  return (
    <div>
      <h1 className={`tit-pga ${isDarkMode ? 'dark-mode' : ''}`}>Regioni</h1>
      <Helmet>
        <title>Regioni</title>
        <meta name="description" content="Pagina Regioni" />
      </Helmet>
      <select
        value={selectedRegion}
        onChange={handleRegionChange}
        className="custom-select-R"
      >
        <option value="">Seleziona una regione</option>
        {chartData.labels && chartData.labels.map((region, index) => (
          <option className="tend" key={index} value={region}>
            {region}
          </option>
        ))}
      </select>

      {isLoading ? (
        <Loader />
        ) : hasError ? ( 
          <ErrorPage />
        ) : (
        chartData.labels && chartData.datasets && (
          <div className="chart-container-R">
            <Bar
              data={chartData}
              options={chartOptions}
              width={400}
            />
          </div>
        )
      )}
       <div className="table-container">
        <table className="my-table">
          <thead>
            <tr>
              <th>Regione</th>
              <th>Guariti</th>
              <th>Deceduti</th>
              <th>Totale Casi</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.region}</td>
                <td>{item.recovered}</td>
                <td>{item.deaths}</td>
                <td>{item.totalCases}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     < DataDisplay />
    </div>
  );
}

export default RegionPage;
