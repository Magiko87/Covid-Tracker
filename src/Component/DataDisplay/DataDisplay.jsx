//====>DATA DISPLAY


import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { format } from 'date-fns';
import "./dataDisplay.css";


function DataDisplay(isDarkMode) {
  const [data1, setData1] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

         //--->Richiesta asincrona per ottenere la data
        const dataRegioni = await axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json');
        setData1(dataRegioni.data);

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
