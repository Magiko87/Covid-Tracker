//====>DATA DISPLAY

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { format } from 'date-fns';
import "./dataDisplay.css";


function DataDisplay(isDarkMode) {
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

         //--->Richieste asincrone per ottenere dati da diverse fonti
        const dataRegioni = await axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json');
        setData1(dataRegioni.data);

        const dataProvince = await axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json');
        setData2(dataProvince.data);

        const dataAndamente = await axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json');
        setData3(dataAndamente.data);

        setIsLoading(false);
      } catch (error) {
        console.error('Errore nella richiesta API:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-container">
      
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/*---> Visualizza la data di aggiornamento */}
           <h6 className={`data-s ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Dati aggiornati al {format(new Date(data1[0].data), 'dd MMMM yyyy')}</h6>

        </div>
      )}
    </div>
  );
}

export default DataDisplay;
