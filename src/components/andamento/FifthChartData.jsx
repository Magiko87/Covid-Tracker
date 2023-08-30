import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const FifthChart = () => {
  // Stato per memorizzare i dati ottenuti dall'API
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Nuovi Positivi",
        fill: true, // Riempie l'area sotto la linea con il gradiente
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "#fff",
        
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

  return (
    <div className="chart-container-torta" style={{ overflowX: "scroll", width: "100%" }}>
      <h2 >Nuovi Positivi</h2>
      <div style={{ width: "100%" }}></div>
      <Line  data={chartData} />
    </div>
  );
};

export default FifthChart;
