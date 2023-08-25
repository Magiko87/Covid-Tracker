import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import Loader from "../Loader/Loader";

function ThirdChart() {
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [totalOsp, setTotalOsp] = useState(0);

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
      .then((response) => {
        const data = response.data;

        if (data && data.length > 0) {
          const lastDataPoint = data[data.length - 1];
          const terapiaIntensiva = lastDataPoint.terapia_intensiva;
          const ricoveratiSintomatici = lastDataPoint.ricoverati_con_sintomi;

          // Calcola la somma delle osp.
          const totalOspValue = terapiaIntensiva + ricoveratiSintomatici;

          const chartData = {
            labels: ['Terapia Intensiva', 'Ricoverati Asintomatici'],
            datasets: [
              {
                data: [terapiaIntensiva, ricoveratiSintomatici],
                backgroundColor: ['#00ff00', '#008080'],
              },
            ],
          };

          setChartData(chartData);
          setTotalOsp(totalOspValue);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Errore nella richiesta API:', error);
        setIsLoading(false);
      });
  }, []);

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
  };

  return (
    <div>
      {isLoading ? (
       <Loader />
      ) : (
        <div className="chart-container-torta-second">
          <h4>TOTALE OSPEDALIZZATI: {totalOsp}</h4>
          <Doughnut
            data={chartData}
            options={chartOptions}
          />
        </div>
      )}
    </div>
  );
}

export default ThirdChart;
