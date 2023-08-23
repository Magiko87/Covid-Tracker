import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import useChartData from "../Province/UseChartData";
import "../Province/Province.css";

function ProvincePage() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const chartData = useChartData(selectedProvince);

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };

  return (
    <div>
      <h1>Province Page</h1>
      <select
        value={selectedProvince}
        onChange={handleProvinceChange}
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
    options={{
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'red', 
          },
        },
      },
    }}
  />
      )}





    </div>
  );
}

export default ProvincePage;
