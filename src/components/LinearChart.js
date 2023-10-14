import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import "./LinearChart.css";
import icon from "../images/icon.png";

const LinearChart = (props) => {


  return (
    <div className='Chart-Section'>
      <div className="Burglary-Crime">
        <span className='icon'><img src={icon} alt="" /></span>
        <h2>Crime</h2>
        <div className="line"></div>
      </div>
      <div className='Burglary'>
        <div>
          <h1>Burglary</h1>
          <span className='rotate'>Arrests</span>
          <div className='chart' >
            <VictoryChart
              height={150}
              domainPadding={15}
              padding={{ top: 15, bottom: 15, left: 15, right: 15 }}
            >
              <VictoryLine data={props.data} style={{ data: { stroke: "#1463ff", strokeWidth: 1 } }} />
              <VictoryAxis
                style={{
                  axis: { stroke: '#a5a5a5' },
                  tickLabels: {
                    fontSize: 5,
                    padding: 3,
                    fill: '#6b779f',
                  }
                }}
              />
              <VictoryAxis
                dependentAxis style={{
                  grid: { stroke: "#a5a5a5" },
                  axis: { stroke: '#a5a5a5' },
                  tickLabels: {
                    fontSize: 5,
                    padding: 3,
                    fill: '#6b779f',
                  }
                }}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearChart;
