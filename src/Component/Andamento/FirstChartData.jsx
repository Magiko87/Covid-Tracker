import { useEffect, useState } from 'react';
import axios from 'axios';

function useChartData() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
      .then((response) => {
        const data = response.data;

        if (data && data.length > 0) {
          const totalPositiveMolecular = data.map((item) => item.totale_positivi_test_molecolare);
          const totalPositiveAntigen = data.map((item) => item.totale_positivi_test_antigenico_rapido);
       

          const chartData = {
            labels: ['Totale Positivi Test Molecolare', 'Totale Positivi Test Antigenico Rapido'],
            datasets: [
              {
                data: [totalPositiveMolecular[totalPositiveMolecular.length - 1], totalPositiveAntigen[totalPositiveAntigen.length - 1]],
                backgroundColor: ['blue', 'green'], // Colori per le fette del grafico
              },
            ],
          };

          setChartData(chartData);
        }
      })
      .catch((error) => {
        // Gestisci gli errori
        console.error('Errore nella richiesta API:', error);
      });
  }, []); 

  return chartData;
}

export default useChartData;