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

    setInterval(() => {
      axios(configLives)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setLivesData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000); // 1000 =  1 วินาที

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

  if (livesData !== null && preData !== null) {
    return (
      <div className="text-nowrap">
        <div className="bg-info">
          <h2 className="text-white text-center m-0 pt-1">Lives Data</h2>
        </div>

        <table className="table">
          <thead>
            <tr className="bg-danger text-white">
              <th className="text-right w-50" scope="col">
                Team 1
              </th>

              <th className="text-center" scope="col">
                Score 1
              </th>

              <th className="text-center" scope="col">
                Total 1
              </th>

              <th className="text-center" scope="col">
                Handicaps 1-1
              </th>

              <th className="text-center" scope="col">
                Handicaps 1-2
              </th>

              <th className="text-center" scope="col">
                Win 1
              </th>

              <th className="text-center" scope="col">
                Win X
              </th>

              <th className="text-center" scope="col">
                Win 2
              </th>

              <th className="text-center" scope="col">
                Handicaps 2-1
              </th>

              <th className="text-center" scope="col">
                Handicaps 2-2
              </th>

              <th className="text-center" scope="col">
                Total 2
              </th>

              <th className="text-center" scope="col">
                Score 2
              </th>

              <th className="text-left w-50" scope="col">
                Team 2
              </th>
            </tr>
          </thead>

          <tbody>
            {livesData.map((item) => (
              <tr key={item.id}>
                <td className="bg-success text-white w-50">
                  <div className="text-right">{item.team1}</div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">{item.score1}</div>
                </td>

                <td className="bg-secondary text-white">
                  <div className="text-center">
                    <div>
                      Over : {` `}
                      {item.markets.totals[0] && item.markets.totals[0].over}
                    </div>

                    <div>
                      Type : {` `}
                      {item.markets.totals[0] && item.markets.totals[0].type}
                    </div>

                    <div>
                      Under : {` `}
                      {item.markets.totals[0] && item.markets.totals[0].under}
                    </div>
                  </div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">
                    <div>
                      Type : {` `}
                      {item.markets.handicaps1[0] &&
                        item.markets.handicaps1[0].type}
                    </div>

                    <div>
                      Value : {` `}
                      {item.markets.handicaps1[0] &&
                        item.markets.handicaps1[0].value}
                    </div>
                  </div>
                </td>

                <td className="bg-secondary text-white">
                  <div className="text-center">
                    <div>
                      Type : {` `}
                      {item.markets.handicaps2[0] &&
                        item.markets.handicaps2[0].type}
                    </div>

                    <div>
                      Value : {` `}
                      {item.markets.handicaps2[0] &&
                        item.markets.handicaps2[0].value}
                    </div>
                  </div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">{item.markets.win1}</div>
                </td>

                <td className="bg-primary text-white">
                  <div className="text-center">{item.markets.winX}</div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">{item.markets.win2}</div>
                </td>

                <td className="bg-secondary text-white">
                  <div className="text-center">
                    <div>
                      Type : {` `}
                      {item.markets.handicaps1[1] &&
                        item.markets.handicaps1[1].type}
                    </div>

                    <div>
                      Value : {` `}
                      {item.markets.handicaps1[1] &&
                        item.markets.handicaps1[1].value}
                    </div>
                  </div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">
                    <div>
                      Type : {` `}
                      {item.markets.handicaps2[1] &&
                        item.markets.handicaps2[1].type}
                    </div>

                    <div>
                      Value : {` `}
                      {item.markets.handicaps2[1] &&
                        item.markets.handicaps2[1].value}
                    </div>
                  </div>
                </td>

                <td className="bg-secondary text-white">
                  <div className="text-center">
                    <div>
                      Over : {` `}
                      {item.markets.totals[1] && item.markets.totals[1].over}
                    </div>

                    <div>
                      Type : {` `}
                      {item.markets.totals[1] && item.markets.totals[1].type}
                    </div>

                    <div>
                      Under : {` `}
                      {item.markets.totals[1] && item.markets.totals[1].under}
                    </div>
                  </div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">{item.score2}</div>
                </td>

                <td className="bg-success text-white w-50">
                  <div className="text-left">{item.team2}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-info">
          <h2 className="text-white text-center m-0 pt-1">Pre Data</h2>
        </div>

        <table className="table">
          <thead>
            <tr className="bg-danger text-white">
              <th className="text-right w-50" scope="col">
                Team 1
              </th>

              <th className="text-center" scope="col">
                Score 1
              </th>

              <th className="text-center" scope="col">
                Total 1
              </th>

              <th className="text-center" scope="col">
                Handicaps 1-1
              </th>

              <th className="text-center" scope="col">
                Handicaps 1-2
              </th>

              <th className="text-center" scope="col">
                Win 1
              </th>

              <th className="text-center" scope="col">
                Win X
              </th>

              <th className="text-center" scope="col">
                Win 2
              </th>

              <th className="text-center" scope="col">
                Handicaps 2-1
              </th>

              <th className="text-center" scope="col">
                Handicaps 2-2
              </th>

              <th className="text-center" scope="col">
                Total 2
              </th>

              <th className="text-center" scope="col">
                Score 2
              </th>

              <th className="text-left w-50" scope="col">
                Team 2
              </th>
            </tr>
          </thead>

          <tbody>
            {preData.map((item) => (
              <tr key={item.id}>
                <td className="bg-success text-white w-50">
                  <div className="text-right">{item.team1}</div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">{item.score1}</div>
                </td>

                <td className="bg-secondary text-white">
                  <div className="text-center">
                    <div>
                      {item.markets.totals[0] &&
                        `Over : ${item.markets.totals[0].over}`}
                    </div>

                    <div>
                      {item.markets.totals[0] &&
                        `Type : ${item.markets.totals[0].type}`}
                    </div>

                    <div>
                      {item.markets.totals[0] &&
                        `Under : ${item.markets.totals[0].under}`}
                    </div>
                  </div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">
                    <div>
                      {item.markets.handicaps1[0] &&
                        `Type : ${item.markets.handicaps1[0].type}`}
                    </div>

                    <div>
                      {item.markets.handicaps1[0] &&
                        `Value : ${item.markets.handicaps1[0].value}`}
                    </div>
                  </div>
                </td>

                <td className="bg-secondary text-white">
                  <div className="text-center">
                    <div>
                      {item.markets.handicaps2[0] &&
                        `Type : ${item.markets.handicaps2[0].type}`}
                    </div>

                    <div>
                      {item.markets.handicaps2[0] &&
                        `Value : ${item.markets.handicaps2[0].value}`}
                    </div>
                  </div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">{item.markets.win1}</div>
                </td>

                <td className="bg-primary text-white">
                  <div className="text-center">{item.markets.winX}</div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">{item.markets.win2}</div>
                </td>

                <td className="bg-secondary text-white">
                  <div className="text-center">
                    <div>
                      {item.markets.handicaps1[1] &&
                        `Type : ${item.markets.handicaps1[1].type}`}
                    </div>

                    <div>
                      {item.markets.handicaps1[1] &&
                        `Value : ${item.markets.handicaps1[1].value}`}
                    </div>
                  </div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">
                    <div>
                      {item.markets.handicaps2[1] &&
                        `Type : ${item.markets.handicaps2[1].type}`}
                    </div>

                    <div>
                      {item.markets.handicaps2[1] &&
                        `Value : ${item.markets.handicaps2[1].value}`}
                    </div>
                  </div>
                </td>

                <td className="bg-secondary text-white">
                  <div className="text-center">
                    <div>
                      {item.markets.totals[1] &&
                        `Over : ${item.markets.totals[1].over}`}
                    </div>

                    <div>
                      {item.markets.totals[1] &&
                        `Type : ${item.markets.totals[1].type}`}
                    </div>

                    <div>
                      {item.markets.totals[1] &&
                        `Under : ${item.markets.totals[1].under}`}
                    </div>
                  </div>
                </td>

                <td className="bg-dark text-white">
                  <div className="text-center">{item.score2}</div>
                </td>

                <td className="bg-success text-white w-50">
                  <div className="text-left">{item.team2}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <div>Loading...</div>;
}
