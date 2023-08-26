import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import Loader from "../Loader/Loader";
function SecondChart() {
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [totalTamponi, setTotalTamponi] = useState(0);

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
      .then((response) => {
        const data = response.data;

        if (data && data.length > 0) {
          const lastDataPoint = data[data.length - 1];
          const tamponiMolecolari = lastDataPoint.tamponi_test_molecolare;
          const tamponiAntigenici = lastDataPoint.tamponi_test_antigenico_rapido;
          
          // Calcola la somma dei tamponi
          const totalTamponiValue = tamponiMolecolari + tamponiAntigenici;
          const formattedSum = totalTamponiValue.toLocaleString('it-IT', {
            style: 'decimal',
            useGrouping: true,
          });
          
          

          

          const chartData = {
            labels: ['Tamponi Test Molecolare', 'Tamponi Test Antigenico Rapido'],
            datasets: [
              {
                data: [tamponiMolecolari, tamponiAntigenici],
                backgroundColor: ['yellow', 'red'],
              },
            ],
          };


          setChartData(chartData);
          setTotalTamponi(formattedSum);
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
          <h4>TOTALE TAMPONI: {totalTamponi}</h4>
          <Doughnut
            data={chartData}
            options={chartOptions}
          />
        </div>
      )}
    </div>
  );
}

export default SecondChart;
