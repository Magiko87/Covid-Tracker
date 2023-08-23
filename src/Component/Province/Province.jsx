import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import React, { useState, useEffect } from 'react';



function ProvincePage() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')
      .then((response) => {
        const provinceData = response.data;
  
        if (provinceData && provinceData.length > 0) {
          // Estrai nomi delle province e totali casi in due array
          const provinceNames = provinceData.map((item) => item.denominazione_provincia);
          const totalCases = provinceData.map((item) => item.totale_casi);
  
          // Crea i dati del grafico
          const chartData = {
            labels: provinceNames,
            datasets: [
              {
                label: 'Totale Casi',
                data: totalCases,
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Colore delle barre
              },
            ],
          };
          setChartData(chartData);
        }
      })
      .catch((error) => {
        // Gestisci gli errori qui
        console.error('Errore nella richiesta API:', error);
      });
  }, []);
  

  return (
    <div>
      <h1>Province Page</h1>
      {chartData.labels && chartData.datasets && (
  <Bar
    data={chartData}
    options={{
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }}
  />
)}
      
    </div>
  );
}

export default ProvincePage;
