import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import 'chart.js/auto';
import useChartData from "./FirstChartData" 
import SecondChart from './SecondChart';
import ThirdChart from './ThirdChart';
import ErrorPage from "../Error/Error"
import FourthChart from './FourhChartData';
import Loader from "../Loader/Loader";
import DataDisplay from '../DataDisplay/DataDisplay';
import styles from './style.modules.css';


function AndamentoPage() {
  const [selectedData, setSelectedData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const chartData = useChartData(selectedData);
  const [totalSum, setTotalSum] = useState(0);
  const [hasError, setHasError] = useState(false);
  


  useEffect(() => {
    if (chartData.labels && chartData.datasets) {
      setIsLoading(false);
      setHasError(false);

      const sum = chartData.datasets[0].data.reduce((acc, currentValue) => acc + currentValue, 0);
      const formattedSum = sum.toLocaleString('it-IT', {
        style: 'decimal',
        useGrouping: true,
      });
  
      setTotalSum(formattedSum);
    }
  }, [chartData]);

 
  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'black', // Colore del testo nella legenda
        },
      },
    },
  };

  return (
    <div>
      <h1 className='tit-pga'>Andamento</h1>
      

      {isLoading ? (
        <Loader />
        ) : hasError ? ( 
          <ErrorPage />
        ) : (
        chartData.labels && chartData.datasets && (
          <div className="chart-container-torta">
              <h4>TOTALE TEST POSITIVI: {totalSum}</h4>
            <Doughnut
              data={chartData}
              options={chartOptions}
            />
          </div>
        )
      )}
       <SecondChart />
       <ThirdChart />
       <FourthChart />
       <DataDisplay />
    </div>
  );
}

export default AndamentoPage;