import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const FifthChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Effettua la richiesta HTTP per ottenere i dati dall'API
    axios
      .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json")
      .then((response) => {
        // Estrai i dati di interesse dalla risposta
        const newData = response.data.map((entry) => ({
          date: new Date(entry.data).toLocaleDateString(),
          Totale_Positivi: entry.nuovi_positivi,
        }));

        // Aggiorna lo stato con i nuovi dati
        setChartData(newData);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, []);

  return (
    <div className="chart-container-torta">
      <h2>Nuovi Positivi</h2>
      <LineChart width={400} height={200} data={chartData}>
        <XAxis
          dataKey="date"
          tick={{ fill: "black", fontSize: 12 }} // Imposta il colore delle etichette sull'asse X su "black"
        />
        <YAxis
          label={{ value: '' }}
          tick={{ fill: "black", fontSize: 12 }} // Imposta il colore delle etichette sull'asse Y su "black"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Totale_Positivi"
          stroke="red"
          strokeWidth={1}
        />
      </LineChart>
    </div>
  );
};

export default FifthChart;
