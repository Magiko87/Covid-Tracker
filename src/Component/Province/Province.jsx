//====>PROVINCE PAGE

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import useChartData from "./UseChartData";
import "./province.css";
import ErrorPage from '../Error/Error';
import Loader from "../Loader/Loader";
import DataDisplay from "../DataDisplay/DataDisplay";
import axios from 'axios';

function ProvincePage({ isDarkMode }) {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chartType, setChartType] = useState('bar');
  const [tableData, setTableData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [chartData, setChartData] = useState({
    regions: [],
    provinces: [],
  });

  const { regions, provinces } = useChartData(selectedRegion, selectedProvince, setTableData);

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')
      .then((response) => {
        const data = response.data;
        const uniqueRegions = [...new Set(data.map((item) => item.denominazione_regione))];

        setChartData({
          regions: uniqueRegions,
          provinces: data,
        });
      })
      .catch((error) => {
        console.error('Errore nella richiesta API:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      // Se è selezionata solo la regione, mostra tutte le province di quella regione
      const filteredProvinces = chartData.provinces.filter((province) => province.denominazione_regione === selectedRegion);
      
      // Rimuovi le ultime due province dalla lista
      const slicedProvinces = filteredProvinces.slice(0, filteredProvinces.length - 2);
      
      setFilteredProvinces(slicedProvinces);
      setIsLoading(false);
      setHasError(false);
    } else {
      // Quando la regione non è selezionata, mostra solo il messaggio "Seleziona una regione"
      setIsLoading(false);
    }
  }, [selectedRegion, chartData.provinces]);

  useEffect(() => {
    if (tableData.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [tableData]);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedProvince('');
    setChartType('bar');
    setIsLoading(true);
  };

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setChartType('bar');
    setIsLoading(true);
    setHasError(false);
  };

  const chartOptions = {
    
    scales: {
      x: {
        ticks: {
          color: 'black',
        },
      },
      y: {
        ticks: {
          color: 'black',
        },
        beginAtZero: true,
        callback: function (value) {
          
          return value.toLocaleString();
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
    
    barThickness: 15,
    indexAxis: 'y',
    maintainAspectRatio: false,
    height: 400,
  };

  let chartDataObject = {};

  if (selectedRegion && selectedProvince) {
    
    const selectedProvinceData = chartData.provinces.find(
      (province) => province.denominazione_regione === selectedRegion && province.denominazione_provincia === selectedProvince
    );

    const chartDataObject = {
      datasets: [
        {
          label: 'Totale Casi',
          data: filteredProvinces.map((province) => province.totale_casi),
          borderWidth: 1,
        },
      ],
    };
  } else if (selectedRegion) {
   
     chartDataObject = {
      labels: filteredProvinces.map((province) => province.denominazione_provincia),
      datasets: [
        {
          label: 'Totale Casi',
          data: filteredProvinces.map((province) => province.totale_casi),
          backgroundColor: 'rgb(255, 255, 0)',
  
        },
      ],
    };
  }

  return (
    <div>
      <h1 className={`tit-pga ${isDarkMode ? 'dark-mode' : ''}`}>Province</h1>
      <select
        value={selectedRegion}
        onChange={handleRegionChange}
        className="custom-select-P"
      >
        <option value="">Seleziona una regione</option>
        {regions.map((region, index) => (
          <option className="tend" key={index} value={region}>
            {region}
          </option>
        ))}
      </select>

      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <ErrorPage />
      ) : selectedRegion ? (
        <div className="chart-container-P">
          <Bar
            data={chartDataObject}
            options={chartOptions}
            width={400}
          />
        </div>
      ) : null}

      {selectedRegion ? (
        <div className="table-container">
          <table className="my-table">
            <thead>
              <tr>
                <th>Provincia</th>
                <th>Totale Casi</th>
              </tr>
            </thead>
            <tbody>
              {filteredProvinces.map((item, index) => (
                <tr key={index}>
                  <td>{item.denominazione_provincia}</td>
                  <td>{item.totale_casi.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      <DataDisplay />
    </div>
  );
}

export default ProvincePage;
