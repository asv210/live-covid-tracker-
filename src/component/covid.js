import React, { useEffect, useState } from "react";
import "./covid.css";
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
      <section className="sec">
        <h1 className="live text-2xl">Live</h1>
        <h2 className="covid text-2xl">COVID-19 CORONAVIRUS TRACKER</h2>
        <div className="grid grid-cols-3 mt-20 ml-10 px-40 gap-10 text-lg">
          <div className="card_main l1">
            <div className="card_inner">
              <p className="card_name ">OUR COUNTRY</p>
              <p className="card_total card_small">INDIA</p>
            </div>
          </div>

          <div className="card_main l2">
            <div className="card_inner">
              <p className="card_name">TOTAL RECOVERED</p>
              <p className="card_total card_small">{data.recovered}</p>
            </div>
          </div>

          <div className="card_main l3">
            <div className="card_inner">
              <p className="card_name">TOTAL CONFIRMED</p>
              <p className="card_total card_small">{data.confirmed}</p>
            </div>
          </div>

          <div className="card_main l4">
            <div className="card_inner">
              <p className="card_name">TOTAL DEATH</p>
              <p className="card_total card_small">{data.deaths}</p>
            </div>
          </div>

          <div className="card_main l5">
            <div className="card_inner">
              <p className="card_name">TOTAL ACTIVE</p>
              <p className="card_total card_small">{data.active}</p>
            </div>
          </div>

          <div className="card_main l6">
            <div className="card_inner">
              <p className="card_name">LAST UPDATED</p>
              <p className="card_total card_small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Covid;
