//====>USERCHARTDATA REGIONI

import { useEffect, useState } from 'react';
import axios from 'axios';

function useRegionData(selectedRegion, setTableData) {
  const [regionData, setRegionData] = useState({});

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
      .then((response) => {
        const regionData = response.data;

        if (regionData && regionData.length > 0) {
          const regionNames = regionData.map((item) => item.denominazione_regione);

          if (selectedRegion === '') {
            const totalCases = regionData.map((item) => item.totale_casi);

            const chartData = {
              labels: regionNames,
              datasets: [
                {
                  label: 'Totale Casi',
                  data: totalCases,
                  backgroundColor: 'blue',
                },
              ],
            };

            setRegionData(chartData);

            const tableData = regionData.map((item) => ({
              region: item.denominazione_regione,
              totalCases: item.totale_casi.toLocaleString('it-IT'),
              deaths: item.deceduti.toLocaleString('it-IT'),
              recovered: item.dimessi_guariti.toLocaleString('it-IT'),
            }));

            setTableData(tableData);
          } else {
            const filteredData = regionData.filter(
              (item) => item.denominazione_regione === selectedRegion
            );
            const totalCases = filteredData.map((item) => item.totale_casi);

            const chartData = {
              labels: [selectedRegion],
              datasets: [
                {
                  label: 'Totale Casi',
                  data: totalCases,
                  backgroundColor: 'blue',
                },
              ],
            };

            setRegionData(chartData);

            const tableData = filteredData.map((item) => ({
              region: item.denominazione_regione,
              totalCases: item.totale_casi.toLocaleString('it-IT'),
              deaths: item.deceduti.toLocaleString('it-IT'),
              recovered: item.dimessi_guariti.toLocaleString('it-IT'),
            }));

            setTableData(tableData);
          }
        }
      })
      .catch((error) => {
        console.error('Errore nella richiesta API:', error);
      });
  }, [selectedRegion, setTableData]);

  return regionData;
}

export default useRegionData;
