/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import useChartData from "../Province/UseChartData";
import  "../Province/Province.css";
import Loader from "../Loader/Loader";
import ErrorPage from '../Error/Error';
import DataDisplay from '../DataDisplay/DataDisplay';

function ProvincePage() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const chartData = useChartData(selectedRegion, selectedProvince);
  


  const regioni = [
    {
      nome: 'Abruzzo',
      province: ["L'Aquila", 'Chieti', 'Pescara', 'Teramo']
    },
    {
      nome: 'Basilicata',
      province: ['Matera', 'Potenza']
    },
    {
      nome: 'Calabria',
      province: ['Catanzaro', 'Cosenza', 'Crotone', 'Reggio Calabria','Vibo Valentia']
    },
    {
      nome: 'Campania',
      province: ['Avellino', 'Benevento', 'Caserta', 'Napoli','Salerno']
    },
    {
      nome: 'Emilia-Romagna',
      province: ['Bologna', 'Ferrara', 'Forli-Cesena', 'Modena','Parma','Piacenza','Ravenna','Reggio Emilia','Rimini']
    },
    
    {
      nome: 'Friuli Venezia Giulia',
      province: ['Gorizia', 'Pordenone', 'Trieste', 'Udine']
    },
    {
      nome: 'Lazio',
      province: ['Frosinone', 'Latina', 'Rieti', 'Roma','Viterbo']
    },
    {
      nome: 'Liguria',
      province: ['Genova', 'Imperia', 'La Spezia', 'Savona']
    },
    
    {
      nome: 'Lombardia',
      province: ['Bergamo', 'Brescia', 'Como', 'Cremona','Lecco','Lodi','Mantova','Milano','Pavia','Sondrio','Varese']
    },
    {
      nome: 'Marche',
      province: ['Ancona', 'Ascoli Piceno', 'Fermo', 'Macerata','Pesaro-Urbino']
    },
    
    {
      nome: 'Molise',
      province: ['Campobasso', 'Isernia']
    },
    {
      nome: 'Piemonte',
      province: ['Alessandria', 'Asti', 'Biella', 'Cuneo','Novara','Torino','Verbano','Vercelli']
    },
    {
      nome: 'Puglia',
      province: ['Bari', 'Brindisi', 'Foggia', 'Lecce','Taranto']
    },
    
    {
      nome: 'Sardegna',
      province: ['Cagliari', 'Carbona-Iglesias', 'Medio Campidano', 'Nuoro','Ogliastra','Olbia','Oristano','Sassari']
    },
    
    {
      nome: 'Sicilia',
      province: ['Agrigento', 'Caltanissetta', 'Catania', 'Enna','Messina','Palermo','Ragusa','Siracusa','Trapani']
    },
    
    {
      nome: 'Toscana',
      province: ['Arezzo', 'Firenze', 'Grosseto', 'Livorno','Lucca','Massa-Carrara','Pisa','Pistoia','Prato','Siena']
    },
    
    {
      nome: 'P.A. Bolzano',
      province: ['Bolzano']
    },
    
    {
      nome: 'P.A. Trento',
      province: [ 'Trento']
    },
    
    {
      nome: 'Umbria',
      province: ['Perugia','Terni']
    },
    {
      nome: 'Veneto',
      province: ['Belluno', 'Padova', 'Rovigo', 'Treviso','Venezia','Verona','Vicenza'],
    },
    
  ];
  
  // Aggiungi uno stato per le province in base alla regione selezionata
  const [provinceOptions, setProvinceOptions] = useState([]);

  useEffect(() => {
    if (chartData.labels && chartData.datasets) {
      setIsLoading(false);
    }
  }, [chartData]);

  const handleRegionChange = (e) => {
   
    const region = e.target.value;

    // Aggiorna le opzioni delle province in base alla regione selezionata
    const selectedRegionData = regioni.find((r) => r.nome === region);
    if (selectedRegionData) {
      setSelectedRegion(region);
      setSelectedProvince(''); // Azzera la provincia quando cambia la regione
      setProvinceOptions(selectedRegionData.province);
    } else {
      setSelectedRegion('');
      setSelectedProvince('');
      setProvinceOptions([]);
    }

  
  };


  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setSelectedProvince(province);
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
          color: '',
        },
      },
    },
    barThickness:15,
    indexAxis: 'y',
    maintainAspectRatio: false, 
    height: 100,
  };

  return (
    <div className='tend'>
      <h1 className='tit-pg' >Province</h1>
      <select className="custom-select-P" onChange={handleRegionChange}>
        <option value="">Seleziona una regione</option>
        {regioni.map((regione, index) => (
          <option key={index} value={regione.nome}>
            {regione.nome}
          </option>
        ))}
      </select>
      <div className="divider"></div>

      {selectedRegion !== '' && (
        <select
          value={selectedProvince}
          onChange={handleProvinceChange}
          className="custom-select-P"
        >
          <option value="">Seleziona una provincia</option>
          {provinceOptions.map((province, index) => (
            <option key={index} value={province}>
              {province}
            </option>
          ))}
        </select>
      )}

      {isLoading ? (
        <Loader />
      ) : hasError ? ( 
        <ErrorPage />
      ) : (
        chartData.labels && chartData.datasets && (
         <div className="chart-container-P">
          <Bar
            data={chartData}
            options={chartOptions}
            
          />
        </div>
        )
      )}
      <DataDisplay />
    </div>
  );
}

export default ProvincePage;