//====>USECHART PROVINCE
import { useEffect, useState } from 'react';
import axios from 'axios';

function useChartData(selectedRegion, selectedProvince, setTableData) {
  const [provinceData, setProvinceData] = useState([]);
  const [regionData, setRegionData] = useState([]);

  useEffect(() => {
    // Effettua una richiesta API per ottenere i dati delle regioni e delle province
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')
      .then((response) => {
        const data = response.data;

        // Estrai i dati delle regioni e delle province dai dati ottenuti
        const filteredProvinces = data.filter(
          (province) => province.denominazione_regione === selectedRegion
        ); // Filtra le province in base alla regione selezionata

        // Estrai e rimuovi i duplicati dalle denominazioni delle regioni
        const uniqueRegions = [...new Set(data.map((item) => item.denominazione_regione))];

        // Imposta i dati delle regioni e delle province nello stato
        setRegionData(uniqueRegions);
        setProvinceData(filteredProvinces);

        if (selectedProvince !== '') {
          const selectedProvinceData = filteredProvinces.find((province) => province.denominazione_provincia === selectedProvince);

          if (selectedProvinceData) {
            setTableData([{
              province: selectedProvinceData.denominazione_provincia,
              recovered: selectedProvinceData.dimessi,
              deaths: selectedProvinceData.deceduti,
              totalCases: selectedProvinceData.totale_casi,
            }]);
          }
        }
      })
      .catch((error) => {
        console.error('Errore nella richiesta API:', error);
      });
  }, [selectedRegion, selectedProvince, setTableData]);

  return {
    regions: regionData,
    provinces: provinceData,
  };
}

export default useChartData;
