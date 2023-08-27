import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import useChartData from "./UseChartData";
import "./Province.css";
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
    const filteredProvinces = chartData.provinces.filter((province) => province.denominazione_regione === selectedRegion);
    setFilteredProvinces(filteredProvinces);
    setSelectedProvince('');
    setIsLoading(false); 
    setHasError(false);
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
    setChartType('line');
    setIsLoading(true); 
  };

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setChartType('line');
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

      <select
        value={selectedProvince}
        onChange={handleProvinceChange}
        className="custom-select-P"
      >
        <option value="">Seleziona una provincia</option>
        {filteredProvinces.map((province, index) => (
          <option className="tend" key={index} value={province.denominazione_provincia}>
            {province.denominazione_provincia}
          </option>
        ))}
      </select>

      {(selectedRegion === '' && selectedProvince === '') ? null : isLoading ? (
        <Loader />
      ) : hasError ? (
        <ErrorPage />
      ) : (selectedRegion !== '' && tableData.length > 0) ? (
        <div className="chart-container-P">
          <Bar
            data={{
              labels: tableData.map((item) => item.province),
              datasets: [
                {
                  label: 'Totale Casi',
                  data: tableData.map((item) => item.totalCases),
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={chartOptions}
            width={400}
          />
        </div>
      ) : null}

      {(selectedRegion !== '' && selectedProvince !== '') ? (
        <div className="table-container">
          {tableData.length > 0 ? (
            <table className="my-table">
              <thead>
                <tr>
                  <th>Provincia</th>
                  <th>Guariti</th>
                  <th>Deceduti</th>
                  <th>Totale Casi</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.province}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deaths}</td>
                    <td>{item.totalCases}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      ) : null}
      <DataDisplay />
    </div>
  );
}

export default ProvincePage;
