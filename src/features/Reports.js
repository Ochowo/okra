/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import { useState, useEffect } from 'react';
import Select from 'react-select';
import {
  VictoryLine, VictoryChart, VictoryTooltip, VictoryAxis, VictoryBoxPlot, VictoryBar, VictoryGroup, VictoryLabel,
} from 'victory';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidenav from '../components/Sidenav';
import { sales, filteredSales } from '../db/sales';
import {
  filteredRegional, regionalSales, option, regionOption,
} from '../db/regionalSales';
import { adherence } from '../db/adherence';
import {
  outstanding, filteredCalls, filteredEmail, filteredVisits, pLow, pMid, pE, pC, pV, highArr, midArr, lowArr,
} from '../db/outstanding';

const Reports = () => {
  const [rSale, setRsale] = useState(regionalSales[0]['Greater London  (DoT)']);
  const [nSale, setNsale] = useState(sales[0].Total);
  const [mSale, setMsale] = useState(sales[0].salesDOT);
  const [quarter, setQuarter] = useState(regionalSales[0].Quarter);
  const [region, setRegion] = useState('Greater London  (DoT)');
  const [mAdhTarget, setMadhTarget] = useState(adherence[0]['Michael Adherence - % On target actions']);
  const [mAdhViewed, setMadhViewed] = useState(adherence[0]['Michael Adherence - % Reports viewed']);
  const [sAdhTarget, setSadhTarget] = useState(adherence[0]['Aggregate Rep Adherence (% Actions Taken)']);
  const [sAdhViewed, setSadhViewed] = useState(adherence[0]['Aggregate Rep adherence (% reports opened)']);

  useEffect(() => {
    const filt = regionalSales.filter((e) => e.Quarter === quarter);
    const filtSale = sales.filter((e) => e.Quarter === quarter);
    const filtSales = adherence.filter((e) => e.Quarter === quarter);
    const f = filt[0][region];
    const total = filt[0].Total;
    const sT = filtSales[0]['Aggregate Rep Adherence (% Actions Taken)'];
    const sV = filtSales[0]['Aggregate Rep adherence (% reports opened)'];
    const mT = filtSales[0]['Michael Adherence - % On target actions'];
    const mV = filtSales[0]['Michael Adherence - % Reports viewed'];
    setSadhViewed(sV);
    setSadhTarget(sT);
    setMadhViewed(mV);
    setMadhTarget(mT);
    setRsale(f);
    setMsale(filtSale[0].salesDOT);
    setNsale(total);
  }, [region, quarter]);
  const handleQuarterChange = (selectedOption) => {
    setQuarter(selectedOption.value);
  };
  const handleRegionChange = (selectedOption) => {
    setRegion(selectedOption.value);
  };
  return (
    <div className="flex flex-col">
      <Navbar />

      {' '}
      <div className="flex flex-row text-grey2">
        <Sidenav />
        <div className="w-11/12 justify-center p-8">
          {' '}
          <div className="text-center pt-4 justify-center">
            <div className="hero uppercase font-avenir text-xl">Your Performance</div>
            <h2 className="font-open-sans text-lg mt-2">
              <p>Maximise your revenue from every interraction</p>
              {' '}
              <p>with machine learning insights</p>
            </h2>
          </div>
          <div className="border border-borderGrey rounded p-4 mt-4">
            <div className="flex flex-row justify-between">
              {' '}
              <div className="uppercase font-avenir text-xl">Sales Performance</div>
              {' '}
              <div className="flex flex-row space-x-4">
                <Select
                  style={{ width: 200 }}
                  className="basic-single w-40"
                  classNamePrefix="select"
                  defaultValue={option[0]}
                  name="color"
                  options={option}
                  onChange={handleQuarterChange}
                />
                <Select
                  className="basic-single w-40"
                  classNamePrefix="select"
                  defaultValue={regionOption[0]}
                  name="color"
                  options={regionOption}
                  onChange={handleRegionChange}
                />
              </div>

            </div>
            <div className=" grid grid-cols-2 gap-4 justify-between">
              <VictoryChart
                width={850}
                scale={{ x: 'time' }}
                domainPadding={{ y: 100 }}
              >
                <VictoryLabel text="My sales over time" x={225} y={30} textAnchor="start" />
                <VictoryLine
                  style={{
                    data: { stroke: '#c43a31' },
                    parent: { border: '1px solid #ccc' },
                  }}
                  data={filteredSales}
                />
              </VictoryChart>
              <div>

                <div className="flex flex-row">
                  <VictoryChart width={850} domainPadding={20}>
                    <VictoryLabel text="My sales vs National Sales and My sales vs Sales in Other Regions " x={225} y={30} textAnchor="start" />
                    <VictoryBoxPlot
                      boxWidth={20}
                      data={[
                        { x: `${quarter}(National)`, y: [mSale, nSale] },
                        { x: `${quarter}(${region})`, y: [mSale, rSale] },
                      ]}
                      maxLabels="max"
                      maxLabelComponent={(
                        <VictoryLabel
                          dx={-10}
                          dy={-10}
                          textAnchor="start"
                        />
                      )}
                    />
                  </VictoryChart>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-borderGrey rounded p-4 mt-4">
            <div className="uppercase font-avenir text-xl">ADHERENCE</div>
            <div className="flex flex-row">
              <VictoryChart width={850} domainPadding={20}>
                <VictoryLabel text="My adherence vs Other reps " x={225} y={30} textAnchor="start" />

                <VictoryBoxPlot
                  boxWidth={20}
                  data={[
                    { x: `${quarter}(Action Taken)`, y: [mAdhTarget, sAdhTarget] },
                    { x: `${quarter}(Reports Viewed)`, y: [mAdhViewed, sAdhViewed] },
                  ]}
                />
              </VictoryChart>
              <VictoryChart
                width={850}
                scale={{ x: 'time' }}
                domainPadding={{ y: 100 }}
              >
                <VictoryLabel text="Volume of calls, visits, emails on target " x={225} y={30} textAnchor="start" />

                <VictoryLine
                  style={{
                    data: { stroke: 'green' },
                    parent: { border: '1px solid #ccc' },
                  }}
                  data={filteredCalls}
                />
                <VictoryLine
                  samples={25}
                  style={{
                    data: { stroke: '#000' },
                    parent: { border: '1px solid #ccc' },
                  }}
                  data={filteredEmail}
                />
                <VictoryLine
                  labelComponent={<VictoryLabel renderInPortal dy={-20} />}
                  style={{
                    data: { stroke: 'red' },
                    parent: { border: '1px solid #ccc' },
                  }}
                  data={filteredVisits}
                />
              </VictoryChart>
            </div>
          </div>
          <div className="border border-borderGrey rounded p-4 mt-4">
            <div className="uppercase font-avenir text-xl">suggestions</div>
            <div className="flex flex-row">
              <VictoryChart width={850} domain={{ y: [90, 105] }}>
                <VictoryLabel text="Volume of Outsatanding suggestions by priority " x={225} y={30} textAnchor="start" />
                <VictoryGroup
                  offset={20}
                  colorScale="qualitative"
                >
                  <VictoryBar
                    data={lowArr}
                    labels="low priority"
                    labelComponent={<VictoryTooltip />}
                  />
                  <VictoryBar
                    labels="mid priority"
                    labelComponent={<VictoryTooltip />}
                    data={midArr}
                  />
                  <VictoryBar
                    labels="high priority"
                    labelComponent={<VictoryTooltip />}
                    data={highArr}
                  />
                </VictoryGroup>
              </VictoryChart>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Reports;
