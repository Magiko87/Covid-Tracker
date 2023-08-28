/* eslint-disable no-unused-vars */
//====>FIFTH CHART DATA

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const FifthChart = () => {
  // Stato per memorizzare i dati ottenuti dall'API
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        borderWidth:1,
        label: "Nuovi Positivi",
        fill: false,
        lineTension: 0.4,
        backgroundColor: "red",
        borderColor: "red",
        data: [], 
      },
    ],
  });

  useEffect(() => {
    // Effettua la richiesta HTTP per ottenere i dati dall'API
    axios
      .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json")
      .then((response) => {
        // Estrai i dati di interesse dalla risposta
        const newData = response.data.map((entry) => ({
          date: new Date(entry.data).toLocaleDateString(),
          totalPositive: entry.nuovi_positivi,
        }));

        // Aggiorna lo stato con i nuovi dati
        setChartData((prevChartData) => ({
          ...prevChartData,
          labels: newData.map((entry) => entry.date),
          datasets: [
            {
              ...prevChartData.datasets[0],
              data: newData.map((entry) => entry.totalPositive),
            },
          ],
        }));
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, []);


  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'black', 
          borderColor:"white",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "black", 
        },
      },
      x: {
        ticks:{
          color: "black", 
        }
      }
    },
  };
  

  return (
    <div className="chart-container-torta">
      <h2>Nuovi Positivi</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default FifthChart;
