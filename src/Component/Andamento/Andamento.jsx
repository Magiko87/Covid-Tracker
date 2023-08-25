import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2'; // Importa Doughnut invece di Bar
import 'chart.js/auto';
import useChartData from "./FirstChartData" 
import SecondChart from './SecondChart';
import ThirdChart from './ThirdChart';
import FourthChart from './FourhChartData';
import "../Andamento/Andamento.css";  
import Loader from "../Loader/Loader";

function AndamentoPage() {
  const [selectedData, setSelectedData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const chartData = useChartData(selectedData);
  const [chartType, setChartType] = useState('doughnut');
  const [totalSum, setTotalSum] = useState(0);
  


  useEffect(() => {
    if (chartData.labels && chartData.datasets) {
      setIsLoading(false);
      const sum = chartData.datasets[0].data.reduce((acc, currentValue) => acc + currentValue, 0);
       setTotalSum(sum);

    }
  }, [chartData]);

  const handleDataChange = (e) => {
    setSelectedData(e.target.value);
    setChartType('doughnut'); 
    setIsLoading(true);
  };

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
      <h1 className='tit-pg'>Andamento</h1>
      

      {isLoading ? (
        <Loader />
      ) : (
        chartData.labels && chartData.datasets && (
          <div className="chart-container-torta">
              <h4>TOTALE CASI POSITIVI: {totalSum}</h4>
            <Doughnut // Usa il componente Doughnut per il grafico a torta
              data={chartData}
              options={chartOptions}
            />
          </div>
        )
      )}
       <SecondChart />
       <ThirdChart />
       <FourthChart />
    </div>
  );
}

export default AndamentoPage;