//====>FIRTS CHART DATA

import { useEffect, useState } from 'react';
import axios from 'axios';


function useChartData() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
        //--->Richiesta API per ottenere i dati relativi all'andamento nazionale
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
      .then((response) => {
        const data = response.data;

//--->Verifica se sono disponibili dati e almeno un elemento nel dataset
        if (data && data.length > 0) { 
          
//--->Estrai i dati relativi ai positivi nei test molecolari e antigenici rapidi
          const totalPositiveMolecular = data.map((item) => item.totale_positivi_test_molecolare);
          const totalPositiveAntigen = data.map((item) => item.totale_positivi_test_antigenico_rapido);

        //--->Oggetto chartData con etichette e dati
          const chartData = {
            labels: ['Totale Positivi Test Molecolare', 'Totale Positivi Test Antigenico Rapido'],
            datasets: [
              {
                data: [totalPositiveMolecular[totalPositiveMolecular.length - 1], totalPositiveAntigen[totalPositiveAntigen.length - 1]],
                backgroundColor: ['blue', 'green'], // Colori per le fette del grafico
              },
            ],
          };
 //--->ChartData con i dati ottenuti dalla richiesta API
          setChartData(chartData);
        }
      })
      .catch((error) => {
        //--->Gestione degli errori
        console.error('Errore nella richiesta API:', error);
      });
  }, []); 

  return chartData;
}

export default useChartData;