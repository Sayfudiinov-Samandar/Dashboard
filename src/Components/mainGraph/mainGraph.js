import React from "react";
import "./mainGraph.scss";
import  { StatisticsGraph } from "../StatisticGraph/StatisticsGraph"
import Graph from "../../Assets/images/img/graph 1.png";
const mainGraph = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__box">
          <div className="hero__left-box">
            <div className="hero__left-top">
              <div>
                <h3 className="hero__title">Today’s trends</h3>
                <p className="hero__data-text">as of 25 May 2019, 09:41 PM</p>
              </div>

              <div className="hero__days-box">
                <p className="hero__today days">Today</p>
                <p className="hero__yesterday days">Yesterday</p>
              </div>
            </div>

            <img src={Graph} alt="Graph today" width={900} height={550} />
          </div>

          <div className="hero__right-box card">
            <StatisticsGraph />
          </div>
        </div>
      </section>
    </>
  );
};

export default mainGraph;
