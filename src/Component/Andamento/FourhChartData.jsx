/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import Loader from "../Loader/Loader";

function FourthChart() {
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [Totalcasi, setTotalcasi] = useState(0);

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
      .then((response) => {
        const data = response.data;

        if (data && data.length > 0) {
          const lastDataPoint = data[data.length - 1];
          const deceduti = lastDataPoint.deceduti;
          const guariti = lastDataPoint.dimessi_guariti;
          const positivi=lastDataPoint.totale_positivi;

          // Calcola la somma delle osp.
          const totalCasiValue = positivi + guariti + deceduti;
          const formattedSum = totalCasiValue.toLocaleString('it-IT', {
            style: 'decimal',
            useGrouping: true,
          });

          const chartData = {
            labels: ['Positivi', 'Guariti','Deceduti'],
            datasets: [
              {
                data: [positivi, guariti,deceduti],
                backgroundColor: ['#d3305d', '#007fff','#293133'],
              },
            ],
          };

          setChartData(chartData);
          setTotalcasi(formattedSum);
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
        <div className="chart-container-torta">
          <h4>TOTALE CASI: {Totalcasi}</h4>
          <Doughnut
            data={chartData}
            options={chartOptions}
          />
        </div>
      )}
    </div>
  );
}

export default FourthChart;
