import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import useChartData from "./FirstChartData";
import SecondChart from "./SecondChart";
import ThirdChart from "./ThirdChart";
import ErrorPage from "../error/Error";
import FourthChart from "./FourhChartData";
import FifthChart from "./FifthChartData";
import Loader from "../loader/Loader";
import DataDisplay from "../datadisplay/DataDisplay";
import "../andamento/style.css";
import { Helmet } from "react-helmet";

function AndamentoPage() {
  const [selectedData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const chartData = useChartData(selectedData);
  const [totalSum, setTotalSum] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    //--->Gestione degli errori o dati mancanti
    if (chartData.labels && chartData.datasets) {
      setIsLoading(false);
      setHasError(false);

      //--->Calcolo della somma
      const sum = chartData.datasets[0].data.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
      const formattedSum = sum.toLocaleString("it-IT", {
        style: "decimal",
        useGrouping: true,
      });

      setTotalSum(formattedSum);
    }
  }, [chartData]);

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "black", // Colore del testo nella legenda
        },
      },
    },
  };
  //--->Rendering
  return (
    <div>
      <h1 className="tit-pga">Andamento</h1>
      <Helmet>
        <title>Andamento</title>
        <meta name="description" content="Pagina Andamento" />
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <ErrorPage />
      ) : (
        chartData.labels &&
        chartData.datasets && (
          <div className="chart-container-torta">
            <h4>TOTALE TEST POSITIVI: {totalSum}</h4>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        )
      )}
      <SecondChart />
      <ThirdChart />
      <FourthChart />
      <FifthChart />
      <DataDisplay />
    </div>
  );
}

export default AndamentoPage;
