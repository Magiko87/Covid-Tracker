import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import useChartData from "../Province/UseChartData";
import "../Province/Province.css";
import Loader from "../Loader/Loader";

function ProvincePage() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Aggiunto stato per il caricamento
  const chartData = useChartData(selectedProvince);

  useEffect(() => {
    // Quando i dati sono stati caricati, impostiamo isLoading su false
    if (chartData.labels && chartData.datasets) {
      setIsLoading(false);
    }
  }, [chartData]);

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setIsLoading(true); // Quando si cambia la provincia, reimposta isLoading a true
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: 'blue',
        },
      },
      y: {
        ticks: {
          color: 'blue',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
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

      {isLoading ? (
        <Loader /> // Visualizza lo spinner durante il caricamento
      ) : (
        chartData.labels && chartData.datasets && (
          <Bar
            data={chartData}
            options={chartOptions}
          />
        )
      )}
    </div>
  );
}

export default ProvincePage;
