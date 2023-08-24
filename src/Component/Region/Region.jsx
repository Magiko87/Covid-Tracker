
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import useRegionData from "../Region/UseChartData"; 
import "../Region/Region.css";  
import Loader from "../Loader/Loader";

function RegionPage() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Aggiunto stato per il caricamento
  const chartData = useRegionData(selectedRegion);

  useEffect(() => {
    // Quando i dati sono stati caricati, impostiamo isLoading su false
    if (chartData.labels && chartData.datasets) {
      setIsLoading(false);
    }
  }, [chartData]);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setIsLoading(true); // Quando si cambia la regione, reimposta isLoading a true
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
          color: '',
        },
      },
    },
  };

  return (
    <div>
      <h1 className='tit-pg'>Regioni</h1>
      <select
        value={selectedRegion}
        onChange={handleRegionChange}
        className="region-select"
      >
        <option value="">Seleziona una regione</option>
        {chartData.labels && chartData.labels.map((region, index) => (
          <option key={index} value={region}>
            {region}
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

export default RegionPage;
