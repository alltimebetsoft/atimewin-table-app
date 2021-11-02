import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [livesData, setLivesData] = useState(null);
  const [preData, setPreData] = useState(null);

  useEffect(() => {
    let configLives = {
      method: 'get',
      url: 'https://api.betting-api.com/sbobet/football/live/all',
      headers: {
        Authorization:
          '3ff560d4b525467aac559617afb6be13bf90bd2ff59b4d66bea93f7deaf0aaed',
      },
    };

    axios(configLives)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLivesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    let configPre = {
      method: 'get',
      url: 'https://api.betting-api.com/sbobet/football/line/all',
      headers: {
        Authorization:
          '3ff560d4b525467aac559617afb6be13bf90bd2ff59b4d66bea93f7deaf0aaed',
      },
    };

    axios(configPre)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setPreData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(preData);

  if (preData !== null) {
    return (
      <div>
        {preData.map((item) => (
          <div key={item.id}></div>
        ))}
      </div>
    );
  }

  return <div>nodata</div>;
}
