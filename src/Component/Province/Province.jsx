// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import useChartData from "../Province/UseChartData";
import "../Province/Province.css";
import DarkModeButton from '../DarkModeButton/DarkModeButton';
function ProvincePage() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const chartData = useChartData(selectedProvince);

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };
  const chartOptions = {
    scales: {
      x: {
          ticks: {
            color: 'blue', // Cambia il colore del testo delle etichette su X 
          },
        },
      
      y: {
        ticks: {
          color:"blue", // Cambia il colore del testo delle etichette su Y
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', //etichette legenda
        },
      },
    },
  };
  return (
    <div>
      <h1>Province Page</h1>
      <select
        value={selectedProvince}
        onChange={handleProvinceChange}
        className="province-select"
      >
        <option value="">Seleziona una provincia</option>
        {chartData.labels && chartData.labels.map((province, index) => (
          <option key={index} value={province}>
            {province}
          </option>
        ))}
      </select>

      {chartData.labels && chartData.datasets && (
  <Bar
  
  data={chartData}
  options={chartOptions} 

  />
      )}





    </div>
  );
}

export default ProvincePage;
