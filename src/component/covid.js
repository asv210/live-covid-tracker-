import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setdata] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actual = await res.json();
      console.log(actual.statewise[0]);
      setdata(actual.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section>
        <h1>Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>OUR</span>Country
                </p>
                <p className="card_total card_small">INDIA</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span>Recovered
                </p>
                <p className="card_total card_small">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span>CONFIRMED
                </p>
                <p className="card_total card_small">{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span>DEATH
                </p>
                <p className="card_total card_small">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span>ACTIVE
                </p>
                <p className="card_total card_small">{data.active}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>LAST</span>UPADATED
                </p>
                <p className="card_total card_small">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
