import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';  // Apex chart
import { Doughnut, Line, Bar, Radar, Scatter, Bubble, Pie } from 'react-chartjs-2';     // react-chartjs
import { Chart, registerables } from 'chart.js'; // chartjs
import ReactEcharts from "echarts-for-react";  //E chart
import ALLImages from './imagesdata';
Chart.register(...registerables);


//Sales Over View

export class SalesOverView extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Income",
          data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
        },
        {
          name: "Expenses",
          data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 300,
          type: "bar",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
            borderRadius: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 3,
          colors: ["transparent"],
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          type: "month",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },
        },
      },
    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart height={300} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};

//Sale Value

const data = {
  type: "doughnut",
  labels: ["Items", "Revenue"],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ["rgb(90, 102, 241)", "rgb(96, 165, 250)"],
      borderWidth: 0,
    },
  ],
};

const options = {
  redraw: true,
  animation: false,
  responsive: false,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 90,
};

export function SalesValue() {
  return <Doughnut id='sales-donut' className="!h-[230px] mx-auto my-auto" data={data} options={options} width={230} height={230} />
}

//Social visitors

export class SocialVisitor extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [400, 470, 540, 690, 1100, 1380],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "bar",
          height: 370,
          toolbar: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 1,
            colorStops: [
              {
                offset: 0,
                color: "#60a5fa",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#5a66f1",
                opacity: 1,
              },
            ],
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        colors: ["#5e76a6"],
        grid: {
          borderColor: "transparent",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Facebook",
            "Instagram",
            "Dribble",
            "Twitter",
            "Chrome",
            "Pininterest",
          ],
          axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.1)',
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.1)',
            width: 6,
            offsetX: 0,
            offsetY: 0
          },
          labels: {
            show: true,
            rotate: -90,
            style: {
              colors: "#adb5be",
              fontSize: "11px",
              fontWeight: 600,
              cssclassName: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#adb5be",
              fontSize: "11px",
              fontWeight: 600,
              cssclassName: "apexcharts-yaxis-label",
            },
          },
        },
      },
    };
  }

  render() {
    return (

      <div id="chart" className='visitors'>
        <ReactApexChart height={370}  options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};


// *******************************************************************************************

//Dashboard Ecommerce

//Order Vs Sales

export class OrderVsSales extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "Orders",
        type: "bar",
        data: [23, 55, 22, 45, 20, 32, 22, 42, 21, 44, 22, 30],
      },
      {
        name: "Sales",
        type: "line",
        data: [40, 35, 66, 28, 38, 55, 45, 70, 55, 69, 46, 49],
      },],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 310,
          // type: "area",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%",
            endingShape: "rounded",
            borderRadius: 2,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "top",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
        },
        stroke: {
          curve: "smooth",
          width: [5, 1],
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "12px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            },
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          type: "month",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },
        },
      }
    };

  };

  render() {
    return (

      <div className="box">
        <div className="box-header">
          <div className="sm:flex justify-between">
            <h5 className="box-title my-auto">Order Vs Sales</h5>
            <div className="inline-flex rounded-md shadow-sm">
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-primary">1D</button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">1W</button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">1M</button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">3M</button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">6M</button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">1Y</button>
            </div>
          </div>
        </div>
        <div className="box-body">
          <div id="chart">
            <ReactApexChart height={310} options={this.state.options} series={this.state.series} type="bar" />
          </div>
        </div>
      </div>

    );
  }
}

// *******************************************************************************************

//Dashboard Crypto

//Sales Overview

export class SalesOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33],
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11],
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65],
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24],
            },
            {
              x: new Date(1538785800000),
              y: [6638.24, 6640, 6620, 6624.47],
            },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31],
            },
            {
              x: new Date(1538789400000),
              y: [6624.61, 6632.2, 6617, 6626.02],
            },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02],
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01],
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02],
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91],
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612],
            },
            {
              x: new Date(1538800200000),
              y: [6612, 6615.13, 6605.09, 6612],
            },
            {
              x: new Date(1538802000000),
              y: [6612, 6624.12, 6608.43, 6622.95],
            },
            {
              x: new Date(1538803800000),
              y: [6623.91, 6623.91, 6615, 6615.67],
            },
            {
              x: new Date(1538805600000),
              y: [6618.69, 6618.74, 6610, 6610.4],
            },
            {
              x: new Date(1538807400000),
              y: [6611, 6622.78, 6610.4, 6614.9],
            },
            {
              x: new Date(1538809200000),
              y: [6614.9, 6626.2, 6613.33, 6623.45],
            },
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35],
            },
            {
              x: new Date(1538812800000),
              y: [6619.43, 6620.35, 6610.05, 6615.53],
            },
            {
              x: new Date(1538814600000),
              y: [6615.53, 6617.93, 6610, 6615.19],
            },
            {
              x: new Date(1538816400000),
              y: [6615.19, 6621.6, 6608.2, 6620],
            },
            {
              x: new Date(1538818200000),
              y: [6619.54, 6625.17, 6614.15, 6620],
            },
            {
              x: new Date(1538820000000),
              y: [6620.33, 6634.15, 6617.24, 6624.61],
            },
            {
              x: new Date(1538821800000),
              y: [6625.95, 6626, 6611.66, 6617.58],
            },
            {
              x: new Date(1538823600000),
              y: [6619, 6625.97, 6595.27, 6598.86],
            },
            {
              x: new Date(1538825400000),
              y: [6598.86, 6598.88, 6570, 6587.16],
            },
            {
              x: new Date(1538827200000),
              y: [6588.86, 6600, 6580, 6593.4],
            },
            {
              x: new Date(1538829000000),
              y: [6593.99, 6598.89, 6585, 6587.81],
            },
            {
              x: new Date(1538830800000),
              y: [6587.81, 6592.73, 6567.14, 6578],
            },
            {
              x: new Date(1538832600000),
              y: [6578.35, 6581.72, 6567.39, 6579],
            },
            {
              x: new Date(1538834400000),
              y: [6579.38, 6580.92, 6566.77, 6575.96],
            },
            {
              x: new Date(1538836200000),
              y: [6575.96, 6589, 6571.77, 6588.92],
            },
            {
              x: new Date(1538838000000),
              y: [6588.92, 6594, 6577.55, 6589.22],
            },
            {
              x: new Date(1538839800000),
              y: [6589.3, 6598.89, 6589.1, 6596.08],
            },
            {
              x: new Date(1538841600000),
              y: [6597.5, 6600, 6588.39, 6596.25],
            },
            {
              x: new Date(1538843400000),
              y: [6598.03, 6600, 6588.73, 6595.97],
            },
            {
              x: new Date(1538845200000),
              y: [6595.97, 6602.01, 6588.17, 6602],
            },
            {
              x: new Date(1538847000000),
              y: [6602, 6607, 6596.51, 6599.95],
            },
            {
              x: new Date(1538848800000),
              y: [6600.63, 6601.21, 6590.39, 6591.02],
            },
            {
              x: new Date(1538850600000),
              y: [6591.02, 6603.08, 6591, 6591],
            },
            {
              x: new Date(1538852400000),
              y: [6591, 6601.32, 6585, 6592],
            },
            {
              x: new Date(1538854200000),
              y: [6593.13, 6596.01, 6590, 6593.34],
            },
            {
              x: new Date(1538856000000),
              y: [6593.34, 6604.76, 6582.63, 6593.86],
            },
            {
              x: new Date(1538857800000),
              y: [6593.86, 6604.28, 6586.57, 6600.01],
            },
            {
              x: new Date(1538859600000),
              y: [6601.81, 6603.21, 6592.78, 6596.25],
            },
            {
              x: new Date(1538861400000),
              y: [6596.25, 6604.2, 6590, 6602.99],
            },
            {
              x: new Date(1538863200000),
              y: [6602.99, 6606, 6584.99, 6587.81],
            },
            {
              x: new Date(1538865000000),
              y: [6587.81, 6595, 6583.27, 6591.96],
            },
            {
              x: new Date(1538866800000),
              y: [6591.97, 6596.07, 6585, 6588.39],
            },
            {
              x: new Date(1538868600000),
              y: [6587.6, 6598.21, 6587.6, 6594.27],
            },
            {
              x: new Date(1538870400000),
              y: [6596.44, 6601, 6590, 6596.55],
            },
            {
              x: new Date(1538872200000),
              y: [6598.91, 6605, 6596.61, 6600.02],
            },
            {
              x: new Date(1538874000000),
              y: [6600.55, 6605, 6589.14, 6593.01],
            },
            {
              x: new Date(1538875800000),
              y: [6593.15, 6605, 6592, 6603.06],
            },
            {
              x: new Date(1538877600000),
              y: [6603.07, 6604.5, 6599.09, 6603.89],
            },
            {
              x: new Date(1538879400000),
              y: [6604.44, 6604.44, 6600, 6603.5],
            },
            {
              x: new Date(1538881200000),
              y: [6603.5, 6603.99, 6597.5, 6603.86],
            },
            {
              x: new Date(1538883000000),
              y: [6603.85, 6605, 6600, 6604.07],
            },
            {
              x: new Date(1538884800000),
              y: [6604.98, 6606, 6604.07, 6606],
            },
          ],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "candlestick",
          height: 330,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#5a66f1",
              downward: "#60a5fa",
            },
          },
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        title: {
          align: "left",
        },
        xaxis: {
          type: "datetime",
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "10px",
            },
          },
        },
      },
      selection: 'one_year',
    };

  };

  render() {
    return (

      <div className="box">
        <div className="box-header">
          <div className="sm:flex justify-between space-y-2 sm:space-y-0">
            <h5 className="box-title my-auto">Sales Overview</h5>
            <div className="inline-flex rounded-md shadow-sm">
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-primary"> 1D </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 1W </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 1M </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 3M </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 6M </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 1Y </button>
            </div>
          </div>
        </div>
        <div className="box-body p-0">
          <div className="sm:flex flex-wrap p-4 border-b border-dashed border-gray-200 dark:border-white/10">
            <div className="ltr:mr-3 rtl:ml-3">
              <span className="avatar avatar-sm rounded-full p-2 bg-gray-100 dark:bg-black/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path fill="#f89f36" d="M109.8 75.7c-.8-5.7-3.6-10.1-8.6-13-2.3-1.3-4.8-2.2-7.4-3.3.3-.2.5-.4.7-.5 12.5-6.4 11.4-25.7 2.3-32.3-3.7-2.7-7.8-4.4-12.1-5.4-3.1-.7-6.2-1.2-9.4-1.7 0-5.6.1-13.3.1-19.5H63.7c-.1 6.1-.1 13.6-.2 19.1h-9.4c0-5.5.1-13 .1-19.1H42.6c-.1 6.2-.1 13.9-.2 19.4-8-.1-15.7-.1-23.7-.2 0 4.3-.1 8.3-.1 12.5 1.7 0 3.2 0 4.6.1 1.5 0 3 0 4.4.1 4.1.3 6.2 2.6 6.2 6.6-.2 16.7-.4 33.5-.5 50.2 0 3.7-1.6 5.1-5.2 5.1h-7.8c-.8 4.7-1.6 9.2-2.4 13.9 7.9.1 15.7.2 23.7.3 0 6-.1 13.6-.1 19.9h11.7c.1-6.3.1-13.7.2-19.6 3.3.1 6.3.2 9.4.3 0 6-.1 13.3-.1 19.4h11.7c.1-6.3.1-13.7.2-19.5.4-.1.7-.1 1-.2 5.6-.9 11.3-1.4 16.7-2.7 7.1-1.8 12.7-5.9 15.7-12.9 2.1-5.4 2.6-11.1 1.8-17zM54.3 32.9c7.3 0 14.4-.6 21 2.4 4.4 1.9 6.6 5.5 6.3 9.8-.3 4.6-2.9 7.9-7.6 9.4-6.4 2.1-13.1 2-20 1.7.1-7.6.2-15.2.3-23.3zm25.5 58.4c-6.5 2.9-13.3 2.9-20.2 3-1.9 0-3.8-.1-5.9-.1l.3-25.9c8.9 0 17.7-.7 26 3 4.3 1.9 6.8 5.2 6.8 10.1-.1 4.9-2.7 8-7 9.9z" />
                </svg>
              </span>
            </div>
            <div className="sm:flex flex-wrap justify-evenly flex-auto">
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Symbol</span>
                <p className="font-semibold mb-0">BTC</p>
              </div>
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Price Benchmark</span>
                <p className="font-semibold mb-0">128.00%</p>
              </div>
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Price (USD)</span>
                <p className="text-success font-semibold mb-0">$4,253.49</p>
              </div>
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Change (24H)</span>
                <p className="text-danger font-semibold mb-0">-0.24%</p>
              </div>
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Market Cap</span>
                <p className="font-semibold mb-0">$179.12B</p>
              </div>
            </div>
          </div>

          <div id="chart">
            <ReactApexChart className="p-4" height={330} options={this.state.options} series={this.state.series} type="candlestick" />
          </div>

        </div>
      </div>



    );
  }
}

//Market trend value

export class Bitcoin extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
            61, 27, 54, 43, 19, 46,
          ],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            enabled: false,
          },
        },
        tooltip: {
          enabled: false,
        },

        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#28d193"],
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

export class Etherium extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31,
            37, 39, 62, 51, 35, 41,
          ],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            enabled: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#ff534d"],
      }
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

export class Dash extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27,
            93, 53, 62, 51, 35, 41,
          ],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            enabled: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#28d193"],
      }
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

export class Ripple extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45,
            54, 38, 62, 51, 35, 41,
          ],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            enabled: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#28d193"],
      }
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

export class Iota extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65,
            35, 27, 93, 53, 46, 31,
          ],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            enabled: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#ff534d"],
      }
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

export class Neo extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54,
            37, 39, 0, 45, 54, 38,
          ],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            enabled: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#ff534d"],
      }
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

// *******************************************************************************************

//Dashboard Jobs

//Applications Overview

export class ApplicationsOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Total Candidates",
          type: "column",
          data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
        },
        {
          name: "Total Candidates",
          type: "area",
          data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
        },
        {
          name: "Shortlisted",
          type: "line",
          data: [25, 48, 48, 82, 65, 73, 53, 86, 65, 90, 50, 90],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 240,
          type: "line",
          stacked: false,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgb(90,102,241)", "rgb(203,213,225)", "rgb(96, 165 ,250)"],
        legend: {
          show: false,
        },
        stroke: {
          width: [0, 0, 2],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            endingShape: "rounded",
            borderRadius: 5,
          },
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        markers: {
          size: 0,
        },
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          type: "month",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },
        },
      },

    };

  };

  render() {
    return (

      <div id="chart">
        <ReactApexChart className="px-4 sm:mt-0 mt-3" height={240} options={this.state.options} series={this.state.series} type="line" />
      </div>

    );
  }
}

//Acceptance Ratio

export class AcceptanceRatio extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [1754, 1234],
      labels: ["Accepted", "Rejected"],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 220,
          type: "donut",
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: "#525050",
            opacity: 0.1,
          },
        },
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          colors: "#fff",
          width: 0,
          dashArray: 0,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "90%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "20px",
                  color: "#495057",
                  offsetY: -4,
                },
                value: {
                  show: true,
                  fontSize: "18px",
                  color: '#596478',
                  offsetY: 8,
                  formatter: function (val) {
                    return val + "%";
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Total",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#6b778c",
                },
              },
            },
          },
        },

        colors: ["rgb(90,102,241)", "#60a5fa"],
      },

    };

  };

  render() {
    return (

      <div id="chart">
        <ReactApexChart className="p-4  border-b border-dashed border-gray-200 dark:border-white/10" height={220} options={this.state.options} series={this.state.series} type="donut" />
      </div>

    );
  }
}

// *******************************************************************************************

//Dashboard NFT

//Sales Overview

export class NFTsalesOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33],
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11],
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65],
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24],
            },
            {
              x: new Date(1538785800000),
              y: [6638.24, 6640, 6620, 6624.47],
            },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31],
            },
            {
              x: new Date(1538789400000),
              y: [6624.61, 6632.2, 6617, 6626.02],
            },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02],
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01],
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02],
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91],
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612],
            },
            {
              x: new Date(1538800200000),
              y: [6612, 6615.13, 6605.09, 6612],
            },
            {
              x: new Date(1538802000000),
              y: [6612, 6624.12, 6608.43, 6622.95],
            },
            {
              x: new Date(1538803800000),
              y: [6623.91, 6623.91, 6615, 6615.67],
            },
            {
              x: new Date(1538805600000),
              y: [6618.69, 6618.74, 6610, 6610.4],
            },
            {
              x: new Date(1538807400000),
              y: [6611, 6622.78, 6610.4, 6614.9],
            },
            {
              x: new Date(1538809200000),
              y: [6614.9, 6626.2, 6613.33, 6623.45],
            },
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35],
            },
            {
              x: new Date(1538812800000),
              y: [6619.43, 6620.35, 6610.05, 6615.53],
            },
            {
              x: new Date(1538814600000),
              y: [6615.53, 6617.93, 6610, 6615.19],
            },
            {
              x: new Date(1538816400000),
              y: [6615.19, 6621.6, 6608.2, 6620],
            },
            {
              x: new Date(1538818200000),
              y: [6619.54, 6625.17, 6614.15, 6620],
            },
            {
              x: new Date(1538820000000),
              y: [6620.33, 6634.15, 6617.24, 6624.61],
            },
            {
              x: new Date(1538821800000),
              y: [6625.95, 6626, 6611.66, 6617.58],
            },
            {
              x: new Date(1538823600000),
              y: [6619, 6625.97, 6595.27, 6598.86],
            },
            {
              x: new Date(1538825400000),
              y: [6598.86, 6598.88, 6570, 6587.16],
            },
            {
              x: new Date(1538827200000),
              y: [6588.86, 6600, 6580, 6593.4],
            },
            {
              x: new Date(1538829000000),
              y: [6593.99, 6598.89, 6585, 6587.81],
            },
            {
              x: new Date(1538830800000),
              y: [6587.81, 6592.73, 6567.14, 6578],
            },
            {
              x: new Date(1538832600000),
              y: [6578.35, 6581.72, 6567.39, 6579],
            },
            {
              x: new Date(1538834400000),
              y: [6579.38, 6580.92, 6566.77, 6575.96],
            },
            {
              x: new Date(1538836200000),
              y: [6575.96, 6589, 6571.77, 6588.92],
            },
            {
              x: new Date(1538838000000),
              y: [6588.92, 6594, 6577.55, 6589.22],
            },
            {
              x: new Date(1538839800000),
              y: [6589.3, 6598.89, 6589.1, 6596.08],
            },
            {
              x: new Date(1538841600000),
              y: [6597.5, 6600, 6588.39, 6596.25],
            },
            {
              x: new Date(1538843400000),
              y: [6598.03, 6600, 6588.73, 6595.97],
            },
            {
              x: new Date(1538845200000),
              y: [6595.97, 6602.01, 6588.17, 6602],
            },
            {
              x: new Date(1538847000000),
              y: [6602, 6607, 6596.51, 6599.95],
            },
            {
              x: new Date(1538848800000),
              y: [6600.63, 6601.21, 6590.39, 6591.02],
            },
            {
              x: new Date(1538850600000),
              y: [6591.02, 6603.08, 6591, 6591],
            },
            {
              x: new Date(1538852400000),
              y: [6591, 6601.32, 6585, 6592],
            },
            {
              x: new Date(1538854200000),
              y: [6593.13, 6596.01, 6590, 6593.34],
            },
            {
              x: new Date(1538856000000),
              y: [6593.34, 6604.76, 6582.63, 6593.86],
            },
            {
              x: new Date(1538857800000),
              y: [6593.86, 6604.28, 6586.57, 6600.01],
            },
            {
              x: new Date(1538859600000),
              y: [6601.81, 6603.21, 6592.78, 6596.25],
            },
            {
              x: new Date(1538861400000),
              y: [6596.25, 6604.2, 6590, 6602.99],
            },
            {
              x: new Date(1538863200000),
              y: [6602.99, 6606, 6584.99, 6587.81],
            },
            {
              x: new Date(1538865000000),
              y: [6587.81, 6595, 6583.27, 6591.96],
            },
            {
              x: new Date(1538866800000),
              y: [6591.97, 6596.07, 6585, 6588.39],
            },
            {
              x: new Date(1538868600000),
              y: [6587.6, 6598.21, 6587.6, 6594.27],
            },
            {
              x: new Date(1538870400000),
              y: [6596.44, 6601, 6590, 6596.55],
            },
            {
              x: new Date(1538872200000),
              y: [6598.91, 6605, 6596.61, 6600.02],
            },
            {
              x: new Date(1538874000000),
              y: [6600.55, 6605, 6589.14, 6593.01],
            },
            {
              x: new Date(1538875800000),
              y: [6593.15, 6605, 6592, 6603.06],
            },
            {
              x: new Date(1538877600000),
              y: [6603.07, 6604.5, 6599.09, 6603.89],
            },
            {
              x: new Date(1538879400000),
              y: [6604.44, 6604.44, 6600, 6603.5],
            },
            {
              x: new Date(1538881200000),
              y: [6603.5, 6603.99, 6597.5, 6603.86],
            },
            {
              x: new Date(1538883000000),
              y: [6603.85, 6605, 6600, 6604.07],
            },
            {
              x: new Date(1538884800000),
              y: [6604.98, 6606, 6604.07, 6606],
            },
          ],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "candlestick",
          height: 420,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#5a66f1",
              downward: "#60a5fa",
            },
          },
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        title: {
          align: "left",
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "10px",
            },
          },
        },
      },
    };

  };


  render() {

    return (

      <div className="box">
        <div className="box-header">
          <div className="sm:flex justify-between">
            <h5 className="box-title my-auto">Sales Overview</h5>
            <div className="inline-flex rounded-md shadow-sm">
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-primary"> 1D </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 1W </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 1M </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 3M </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 6M </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 1Y </button>
            </div>
          </div>
        </div>
        <div className="box-body p-0">
          <div
            className="flex flex-wrap p-4 border-b border-dashed border-gray-200 dark:border-white/10">
            <div className="ltr:mr-3 rtl:ml-3">
              <span className="avatar avatar-sm rounded-full p-2 bg-gray-100 dark:bg-black/20">
                <img src={ALLImages('svg8')} alt="" />
              </span>
            </div>
            <div className="flex flex-wrap justify-evenly flex-auto">
              <div className="sm:m-0 m-2">
                <span>Symbol</span>
                <p className="font-semibold mb-0">BTC</p>
              </div>
              <div className="sm:m-0 m-2">
                <span>Price Benchmark</span>
                <p className="font-semibold mb-0">-0.39%</p>
              </div>
              <div className="sm:m-0 m-2">
                <span>Price (USD)</span>
                <p className="text-success font-semibold mb-0">$1,212.67</p>
              </div>
              <div className="sm:m-0 m-2">
                <span>Change (24H)</span>
                <p className="text-danger font-semibold mb-0">-0.14%</p>
              </div>
              <div className="sm:m-0 m-2">
                <span>Market Cap</span>
                <p className="font-semibold mb-0">$148.20B</p>
              </div>
            </div>
          </div>
          <div id="chart">
            <ReactApexChart className="p-4" height={423} options={this.state.options} series={this.state.series} type="candlestick" />
          </div>
        </div>
      </div>
    );
  }
}

// *******************************************************************************************

//Dashboard Analytics

//Session Overview

export class SessionOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Session",
          data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 100],
          color: "#5a66f1"
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 300,
          type: "bar",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        plotOptions: {
          bar: {
            columnWidth: "55%",
            endingShape: "rounded",
            borderRadius: 4,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          type: "month",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },

        },
      },


    };
  }

  render() {
    return (


      <div id="chart" >
        <ReactApexChart height={300} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};

//Device views

export class Deviceview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [1754, 1234, 878, 270],
      labels: ["Mobile", "Tablet", "Desktop", "Others"],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 325,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },

        legend: {
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "15px",
          fontWeight: 500,
          labels: {
            color: ["rgb(100, 116, 139)"],
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          colors: "#fff",
          width: 0,
          dashArray: 0,
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "80%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "10px",
                  color: "#495057",
                  offsetY: -4,
                },
                value: {
                  show: true,
                  fontSize: "15px",
                  fontWeight: 600,
                  offsetY: 8,
                  formatter: function (val) {
                    return val + "%";
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Total",
                  fontSize: "15px",
                  color: "rgb(100, 116, 139)",
                },
              },
            },
          },
        },
        colors: [
          "rgba(90,102,241, 1)",
          "rgba(96,165,250, 1)",
          "rgba(234,179 ,8, 1)",
          "rgba(203,213,225, 1)",
        ],
      },


    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={325} options={this.state.options} series={this.state.series} type="donut" />
      </div>
    )
  }
};

//Sessions By Gender

export class SessionsByGender extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [40, 40, 20],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'polarArea',
          height: 350,
          width: 450
        },
        labels: ['Male', 'Female', 'Others'],
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        legend: {
          position: 'bottom'
        },
        colors: ["#5a66f1", "#d5dde7", "#60a5fa"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart className="flex justify-center" height={350} options={this.state.options} series={this.state.series} type="polarArea" />
      </div>
    )
  }
};

//Audience Overview

export class AudienceOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'bar',
          height: 280,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['rgba(107 ,114 ,128,0.1)']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: ['Jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug'],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }

      },

    };
  }

  render() {
    return (


      <div id="chart" className='overview'>
        <ReactApexChart className="flex justify-center" height={280} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};

// *******************************************************************************************

//Dashboard Projects

//Project Analysis

export class ProjectAnalysis extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "Projects",
        type: "column",
        data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8],
      },
      {
        name: "Tasks",
        type: "column",
        data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5],
      },
      {
        name: "Revenue",
        type: "line",
        data: [20, 29, 37, 35, 44, 43, 50],
      },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          toolbar: {
            show: false,
          },
          height: 370,
          type: "line",
          stacked: false,
          fontFamily: "Poppins, Arial, sans-serif",
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
          strokeDashArray: 3,
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: undefined,
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: [
          {
            show: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: false,
              color: "#4eb6d0",
            },
            labels: {
              style: {
                colors: "#4eb6d0",
              },
            },
            title: {
              text: undefined,
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            show: false,
            seriesName: "Projects",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#00E396",
              },
            },
            title: {
              text: undefined,
            },
          },
          {
            show: false,
            seriesName: "Revenue",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: false,
            },
            title: {
              text: undefined,
            },
          },
        ],
        tooltip: {
          enabled: true,
        },
        colors: ["#5a66f1", "#60a5fa", "#d5dde7"],
        legend: {
          show: true,
          position: "top",
          offsetX: 40,
          fontSize: "13px",
          fontWeight: "normal",
          labels: {
            colors: "#acb1b1",
          },
          markers: {
            width: 10,
            height: 10,
          },
        },
        stroke: {
          width: [0, 0, 1.5],
          curve: "straight",
          dashArray: [0, 0, 0],
        },
        plotOptions: {
          bar: {
            columnWidth: "35%",
            borderRadius: 3,
          },
        },
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart height={370} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

// *******************************************************************************************

//Dashboard HRM

//Sales Overview

export class SalesOverviewHRM extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Designing',
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
      }, {
        name: 'Development',
        data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
      }, {
        name: 'SEO',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'bar',
          height: 310,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        colors: ["#5a66f1", "#60a5fa", "#d5dde7"],
        legend: {
          show: true,
          borderRadius: 5,
          position: 'top',
          labels: {
            colors: '#74767c',
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",
            borderRadius: 5
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
                colors: "#8c9097",
            },
          }
        },
        fill: {
          opacity: 1
        }
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={310} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};

// *******************************************************************************************

//Dashboard CRM

//Revenue

export class Revenue extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Deals",
          type: "column",
          data: [23, 11, 22, 35, 17, 28, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "Revenue",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 280,
          type: "line",
          stacked: !1,
          toolbar: {
            show: !1,
          },
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        legend: {
          position: "top",
          show: false,
        },
        colors: ["#5a66f1", "rgb(203,213,225)"],
        stroke: {
          width: [1.3, 1],
          curve: ["straight", "smooth"],
        },
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        plotOptions: {
          bar: {
            columnWidth: "15%",
            borderRadius: 1,
          },
        },
      },


    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart height={280} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

//Leads By Source

export class LeadsBySource extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [400, 430, 470, 540, 600, 800]
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: "bar",
          height: 380,
          toolbar: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 1,
            colorStops: [
              {
                offset: 0,
                color: "#60a5fa",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#5a66f1",
                opacity: 1,
              },
            ],
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        colors: ["#5e76a6"],
        grid: {
          borderColor: "transparent",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Marketing', 'Digital', 'Web', 'Advertisement', 'Employee Referal', 'Other'],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.1)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.1)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            show: true,
            style: {
              colors: "#adb5be",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#adb5be",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },
      },

    };
  }

  render() {
    return (


      <div id="chart" className='leads'>
        <ReactApexChart height={380} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};

// *******************************************************************************************

//Dashboard Personal

//Statistics

export class Statistic extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Income",
          data: [23, 55, 22, 45, 20, 32, 22, 42, 21, 44, 22, 30],
        },
        {
          name: "Expenses",
          data: [40, 35, 66, 28, 38, 55, 45, 70, 55, 69, 46, 49],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 390,
          type: "bar",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%",
            endingShape: "rounded",
            borderRadius: 2,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "top",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
        },
        stroke: {
          curve: "smooth",
          width: [5, 5],
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "12px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            },
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          type: "month",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },
        },
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart height={390} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};

// *******************************************************************************************

//Dashboard Stocks

//Total Investments

export class Investments extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Invested Value",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "Total Returns",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 300,
          type: "area",
          stacked: false,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: [0, 0],
          curve: "smooth",
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            endingShape: "rounded",
            borderRadius: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: ["dark", "light"],
            type: "vertical",
            opacityFrom: [1, 0.85],
            opacityTo: [1, 0.55],
            stops: [0, 100, 100, 100],
          },
        },
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          type: "month",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },
        },
      },
    };

  };

  render() {
    return (

      <div className="box">
        <div className="box-header">
          <div className="sm:flex justify-between">
            <h5 className="box-title my-auto">Total Investments</h5>
            <div className="inline-flex rounded-md shadow-sm">
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-primary"> 1D </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 1W </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 1M </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 3M </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 6M </button>
              <button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary"> 1Y </button>
            </div>
          </div>
        </div>
        <div className="box-body">
        <div className="sm:flex justify-between items-center text-sm text-center mb-4">
                  <div className="sm:flex items-center mb-4 sm:mb-0 space-y-4 sm:space-y-0">
                    <div className="ltr:mr-6 rtl:ml-6">
                      <span className="text-gray-500 dark:text-white/70">Invested Value</span>
                      <p className="mt-1 mb-0">$1,290.94 <span className="ltr:ml-1 rtl:mr-1 text-success"><i className="ti ti-trending-up"></i> 1.22%</span></p>
                    </div>
                    <div className="ltr:mr-0 rtl:ml-0">
                      <span className="text-gray-500 dark:text-white/70">Total Returns</span>
                      <p className="mt-1 mb-0">$25,458.20 <span className="ltr:ml-1 rtl:mr-1 text-success"><i className="ti ti-trending-up"></i> 12.22%</span></p>
                    </div>
                  </div>
                  <div className="sm:flex items-center space-y-4 sm:space-y-0">
                    <div className="ltr:mr-6 rtl:ml-6">
                      <span className="text-gray-500 dark:text-white/70">Today Change</span>
                      <p className="mt-1 mb-0">$112.09</p>
                    </div>
                    <div className="ltr:mr-0 rtl:ml-0">
                      <span className="text-gray-500 dark:text-white/70">Change In %</span>
                      <p className="mt-1 mb-0">+0.01% <span className="ltr:ml-1 rtl:mr-1 text-success"><i className="ti ti-trending-up"></i> 0.03%</span></p>
                    </div>
                  </div>
                </div>
          <div id="chart">
            <ReactApexChart height={300} options={this.state.options} series={this.state.series} type="area" />
          </div>
        </div>
      </div>
    );
  }
}

// *******************************************************************************************

//Dashboard Course

//Earnings Report

export class EarningReport extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: 'Students',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
        },
        {
          name: 'Earnings',
          type: 'line',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          toolbar: {
            show: false
          },
          type: 'line',
          height: 340,
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
          strokeDashArray: 3
        },
        colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1.1],
          curve: ['straight', 'smooth'],
        },
        legend: {
          show: false,
        },
        xaxis: {
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "22%",
            borderRadius: 2
          }
        },
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={340} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

// *******************************************************************************************

//Widgets

//bitcoins

export class Bitcoins extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [34, 55, 41, 67, 22, 43, 21]
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: ['#47bbed'],
            opacity: 0.2
          },
          type: 'line',
          height: 20,
          width: 100
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        },
        colors: ["#47bbed"],
        stroke: {
          width: [1.5],
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          }
        },
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={100} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

//Ethereum

export class Ethereum extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [34, 55, 41, 47, 32, 53, 31]
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: ['#60a5fa'],
            opacity: 0.2
          },
          type: 'line',
          height: 20,
          width: 100
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        },
        colors: ["#60a5fa"],
        stroke: {
          width: [1.5],
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          }
        },
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={100} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

//dshCoin

export class DshCoin extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [31, 53, 32, 47, 41, 55, 44]
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: ['#FF534D'],
            opacity: 0.2
          },
          type: 'line',
          height: 20,
          width: 100
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        },
        colors: ["#FF534D"],
        stroke: {
          width: [1.5],
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          }
        },
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={100} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

//Golem

export class Golem extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [21, 43, 22, 45, 35, 55, 34]
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: ['#FFBE14'],
            opacity: 0.2
          },
          type: 'line',
          height: 20,
          width: 100
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        },
        colors: ["#FFBE14"],
        stroke: {
          width: [1.5],
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          }
        },
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={20} width={100} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

//Total Revenue

export class WidgetsRevenue extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "Revenue",
        data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 180,
          type: "area",
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1.4],
          show: true,
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        legend: {
          show: false
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        markers: {
          size: 0
        },
        colors: ["#60a5fa"],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.7,
            stops: [0, 100]
          }
        },
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart height={180} options={this.state.options} series={this.state.series} type="area" />
      </div>
    )
  }
};

//Recent Applicants

export class Applicants extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Job Applied',
        type: 'line',
        data: [25, 50, 30, 55, 20, 45, 30]
      }, {
        name: 'Job Viewed',
        type: 'area',
        data: [35, 25, 40, 30, 45, 35, 60]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 348,
          type: 'line',
          stacked: false,
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 1,
            blur: 3,
            color: '#000',
            opacity: 0.2
          },
        },
        colors: ['rgba(90,102,2411, 1)', 'rgba(90,102,241, 0.1)'],
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
          padding: {
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          },
        },
        stroke: {
          width: [2, 2],
          curve: 'smooth',
          dashArray: [0, 4]
        },
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        markers: {
          size: 4,
          hover: {
            size: 5
          }
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shadeIntensity: 1,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        legend: {
          show: true,
          position: 'top',
          fontFamily: 'Inter, sans-serif',
          markers: {
            width: 10,
            height: 10,
          }
        },
        xaxis: {
          type: 'week',
          axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
          },
          labels: {
            rotate: -90
          }
        },
        yaxis: {
          title: {
            style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600
            },
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "";
            }
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;

            }
          }
        }
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={348} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

//Sessions By Device

export class SessionsDevice extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Tablet",
          data: [[10, 35, 80]]
        },
        {
          name: "Mobile",
          data: [[22, 10, 80]]
        },
        {
          name: "Desktop",
          data: [[25, 25, 150]]
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 350,
          type: "bubble",
          toolbar: {
            show: false
          }
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
          strokeDashArray: 3
        },
        colors: ["#f43f63", "#60a5fa", "#6366f1"],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          fontSize: '13px',
          labels: {
            colors: '#959595',
          },
          markers: {
            width: 10,
            height: 10,
          },
        },
        xaxis: {
          min: 0,
          max: 50,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          max: 50,
          labels: {
            show: false,
          },
        }
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={350} options={this.state.options} series={this.state.series} type="bubble" />
      </div>
    )
  }
};

//Target Report

export class TargetReport extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [17, 22, 37, 47, 39, 28, 14],
        name: 'Revenue',
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'bar',
          height: 235,
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 6,
            blur: 3,
            color: '#000',
            opacity: 0.05
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '35%',
            borderRadius: 4,
            horizontal: false,
            colors: {
              ranges: [{
                from: 41,
                to: Infinity,
                color: 'rgba(90,102,2411, 1)',
              },
              {
                from: 0,
                to: 40,
                color: 'rgba(90,102,241, 0.1)'
              }]
            },
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: false,
          borderColor: 'transparent',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          yaxis: {
            lines: {
              show: false
            }
          },
        },
        xaxis: {
          categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          colors: '#fff',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            rotate: -90,
            style: {
              fontFamily: 'Inter, sans-serif',
            },
          }
        },
        yaxis: {
          colors: '#fff',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={235} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};


// **************************************************************************************************************

// Chart Component data

// ** Apex Chart Souurce **

export class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 320,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        colors: ['#6366f1'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 3,
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};
let AreaPrices = [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85]
let AreaDate = ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017", "22 Nov 2017", "23 Nov 2017", "24 Nov 2017", "27 Nov 2017", "28 Nov 2017", "29 Nov 2017", "30 Nov 2017", "01 Dec 2017", "04 Dec 2017", "05 Dec 2017", "06 Dec 2017", "07 Dec 2017", "08 Dec 2017",]
export class AreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "STOCK ABC",
        data: AreaPrices
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'area',
          height: 320,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left',
          style: {
            fontSize: '11px',
            fontWeight: 'normal',
            color: '#8c9097'
          },
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        labels: AreaDate,
        title: {
          text: 'Fundamental Analysis of Stocks',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        colors: ['#6366f1'],
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          opposite: true,
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        legend: {
          horizontalAlign: 'left'
        }
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="area" />
      </div>
    )
  }
};
export class ColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'bar',
          height: 320
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63"],
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        legend: {
          show: true,
          labels: {
            colors: '#74767c',
          },
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          title: {
            style: {
              color: "#8c9097",
            }
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};
export class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'bar',
          height: 320
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        colors: ["#6366f1"],
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      },

    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};
export class LineAndColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 320,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        title: {
          text: 'Traffic Sources',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        legend: {
          show: true,
          labels: {
            colors: '#74767c',
          },
        },
        colors: ["#6366f1", "#60a5fa"],
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: [{
          title: {
            style: {
              color: "#8c9097",
            }
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }, {
          opposite: true,
          title: {
            style: {
              color: "#8c9097",
            }
          }
        }]
      }
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    )
  }
};
export class TimelineBasic extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: 'Code',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-04').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-04').getTime(),
                new Date('2019-03-08').getTime()
              ]
            },
            {
              x: 'Validation',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-12').getTime()
              ]
            },
            {
              x: 'Deployment',
              y: [
                new Date('2019-03-12').getTime(),
                new Date('2019-03-18').getTime()
              ]
            }
          ]
        }
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 320,
          type: 'rangeBar'
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        colors: ["#6366f1"],
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      }
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="rangeBar" />
      </div>
    )
  }
};
export class CandleStick extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [{
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4]
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95]
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591]
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592]
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55]
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06]
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07]
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        },
        ]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'CandleStick Chart',
          align: 'left',
          style: {
            color: "#8c9097",
            fontSize: '13px',
            fontWeight: 'bold',
          }
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#6366f1',
              downward: '#60a5fa'
            }
          }
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          tooltip: {
            enabled: true
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      }
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="candlestick" />
      </div>
    )
  }
};
export class Boxplot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          type: 'boxPlot',
          data: [
            {
              x: 'Jan 2015',
              y: [54, 66, 69, 75, 88]
            },
            {
              x: 'Jan 2016',
              y: [43, 65, 69, 76, 81]
            },
            {
              x: 'Jan 2017',
              y: [31, 39, 45, 51, 59]
            },
            {
              x: 'Jan 2018',
              y: [39, 46, 55, 65, 71]
            },
            {
              x: 'Jan 2019',
              y: [29, 31, 35, 39, 44]
            },
            {
              x: 'Jan 2020',
              y: [41, 49, 58, 61, 67]
            },
            {
              x: 'Jan 2021',
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'boxPlot',
          height: 350
        },
        title: {
          text: 'Basic BoxPlot Chart',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#6366f1',
              lower: '#60a5fa'
            }
          }
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      }
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="boxPlot" />
      </div>
    )
  }
};
function generateData(baseval, count, yrange) {
  let i = 0;
  let series = [];
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}
export class Bubble3D extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Product1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 320,
          type: 'bubble',
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63"],
        title: {
          text: '3D Bubble Chart',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        legend: {
          show: true,
          borderRadius: 5,
          position: 'top',
          labels: {
            colors: '#74767c',
          },
        },
        xaxis: {
          tickAmount: 12,
          type: 'datetime',
          labels: {
            rotate: 0,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          max: 70,
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        },
        theme: {
          palette: 'palette2'
        }
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="bubble" />
      </div>
    )
  }
};
function generateDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0;
  let series = [];
  while (i < count) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([baseval, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
export class ScatterChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'TEAM 1',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 2',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 3',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 4',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 5',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 320,
          type: 'scatter',
          zoom: {
            type: 'xy'
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63", "#b95d4b", "#5e9aa6"],
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        legend: {
          show: true,
          borderRadius: 5,
          position: 'top',
          labels: {
            colors: '#74767c',
          },
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          max: 70,
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="scatter" />
      </div>
    )
  }
};

function generateData1(count, yrange) {
  let i = 0;
  let series = [];
  while (i < count) {
    const x = 'w' + (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}
export class BasicHeatMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Metric1',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric2',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric5',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric6',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric7',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric9',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      }
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#6366f1"],
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        title: {
          text: 'HeatMap Chart (Single color)',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="heatmap" />
      </div>
    )
  }
};
export class TreeMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            {
              x: 'New Delhi',
              y: 218
            },
            {
              x: 'Kolkata',
              y: 149
            },
            {
              x: 'Mumbai',
              y: 184
            },
            {
              x: 'Ahmedabad',
              y: 55
            },
            {
              x: 'Bangaluru',
              y: 84
            },
            {
              x: 'Pune',
              y: 31
            },
            {
              x: 'Chennai',
              y: 70
            },
            {
              x: 'Jaipur',
              y: 30
            },
            {
              x: 'Surat',
              y: 44
            },
            {
              x: 'Hyderabad',
              y: 68
            },
            {
              x: 'Lucknow',
              y: 28
            },
            {
              x: 'Indore',
              y: 19
            },
            {
              x: 'Kanpur',
              y: 29
            }
          ]
        }
      ],
      options: {
        legend: {
          show: false
        },
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 350,
          type: 'treemap'
        },
        colors: ["#6366f1"],
        title: {
          text: 'Basic Treemap',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="treemap" />
      </div>
    )
  }
};
export class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          width: 350,
          type: 'pie',
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63", "#5e9aa6", "#b95d4b"],
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
          position: "bottom",
          labels: {
            colors: '#74767c',
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }],
        dataLabels: {
          dropShadow: {
            enabled: false
          }
        },
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="pie" />
      </div>
    )
  }
};
export class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'donut',
          height: 290
        },
        legend: {
          position: 'bottom',
          labels: {
            colors: '#74767c',
          },
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63", "#5e9aa6", "#b95d4b"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              height: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        dataLabels: {
          dropShadow: {
            enabled: false
          }
        },
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="donut" />
      </div>
    )
  }
};
export class RadialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 350,
          type: 'radialBar',
        },
        colors: ["#6366f1"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['Cricket'],
        responsive: [{
          breakpoint: 350,
          options: {
            chart: {
              height: 300,
            },
          }
        }],
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="radialBar" />
      </div>
    )
  }
};
export class StrokedCircularGauge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [67],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 350,
          type: 'radialBar',
          offsetY: -10
        },
        colors: ["#6366f1"],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['Median Ratio'],
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="radialBar" />
      </div>
    )
  }
};
export class RaderChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: 'Radar Chart - Multi Series',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        legend: {
          labels: {
            colors: '#74767c',
          },
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63"],
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart height={320} options={this.state.options} series={this.state.series} type="radar" />
      </div>
    )
  }
};
export class PolarAreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          type: 'polarArea',
          width: 400
        },
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        legend: {
          position: 'bottom',
          labels: {
            colors: '#74767c',
          },
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63", "#5e9aa6", "#b95d4b", "#76a65e", "#a65e76", "#5e9aa6", "#5b67c7"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart className="flex justify-center" height={400} options={this.state.options} series={this.state.series} type="polarArea" />
      </div>
    )
  }
};

// **************************************************************************************************************

// ** Chart.JS Souurce **

const LineData = {
  type: 'line',
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [0, 10, 5, 2, 20, 30, 45],
      label: 'My First dataset',
      backgroundColor: '#6366f1',
      borderColor: '#6366f1',
    },
  ],
};

const LineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 90,
};

export function LineChartJS() {
  return <Line width={741} height={300} options={LineOptions} data={LineData} />;
}


const BarData = {
  type: 'line',
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(94, 118, 166, 0.2)',
        'rgba(94, 166, 142, 0.2)',
        'rgba(166, 142, 94, 0.2)',
        'rgba(94, 154, 166, 0.2)',
        'rgba(185, 93, 75, 0.2)',
        'rgba(118, 166, 94, 0.2)',
        'rgba(140, 144, 151, 0.2)'
      ],
      borderColor: [
        '#6366f1',
        'rgb(94, 166, 142)',
        'rgb(166, 142, 94)',
        'rgb(94, 154, 166)',
        'rgb(185, 93, 75)',
        'rgb(118, 166, 94)',
        'rgb(140, 144, 151)'
      ],
      borderWidth: 1
    },
  ],
};

const BarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 90,
};

export function BarChartJS() {
  return <Bar width={741} height={300} options={BarOptions} data={BarData} />;
}

const RadarData = {
  type: 'radar',
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(94, 118, 166, 0.2)',
      borderColor: '#6366f1',
      pointBackgroundColor: '#6366f1',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#6366f1'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(94, 166, 142, 0.2)',
      borderColor: 'rgb(94, 166, 142)',
      pointBackgroundColor: 'rgb(94, 166, 142)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(94, 166, 142)'
    }]
};

const RadarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 3
    }
  }
};

export function RadarChartJS() {
  return <Radar width={741} height={300} options={RadarOptions} data={RadarData} />;
}

const ScatterData = {
  type: 'scatter',
  datasets: [{
    label: 'Scatter Dataset',
    data: [{
      x: -10,
      y: 0
    }, {
      x: 0,
      y: 10
    }, {
      x: 10,
      y: 5
    }, {
      x: 0.5,
      y: 5.5
    }],
    backgroundColor: '#6366f1'
  }],
};

const ScatterOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'linear',
      position: 'bottom'
    }
  }
};

export function ScatterChartJS() {
  return <Scatter width={741} height={300} options={ScatterOptions} data={ScatterData} />;
}

const MixedChartData = {
  type: 'scatter',
  labels: ['January', 'February', 'March', 'April'],
  datasets: [{
    type: 'bar',
    label: 'Bar Dataset',
    data: [10, 20, 30, 40],
    borderColor: '#6366f1',
    backgroundColor: 'rgba(94, 118, 166, 0.2)',
  }, {
    type: 'line',
    label: 'Line Dataset',
    data: [50, 50, 50, 50],
    fill: false,
    borderColor: 'rgb(94, 166, 142)',
  }]
};

const MixedChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export function MixedChartJS() {
  return <Scatter width={741} height={300} options={MixedChartOptions} data={MixedChartData} />;
}

const BubbleData = {
  type: 'bubble',
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: '#6366f1'
  }]
};

const BubbleOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export function BubbleChart() {
  return <Bubble width={741} height={300} options={BubbleOptions} data={BubbleData} />;
}

const PieData = {
  type: 'pie',
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      '#6366f1',
      'rgb(94, 166, 142)',
      'rgb(166, 142, 94)'
    ],
    hoverOffset: 4,
    borderColor: 'rgba(142, 156, 173,0.1)'
  }]
};

const PieOptions = {
  responsive: true,
  maintainAspectRatio: false
};

export function ChartPie() {
  return <Pie width={741} height={300} options={PieOptions} data={PieData} />;
}

const DoughnutData = {
  type: 'doughnut',
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      '#6366f1',
      'rgb(94, 166, 142)',
      'rgb(166, 142, 94)'
    ],
    hoverOffset: 4,
    borderColor: 'rgba(142, 156, 173,0.1)'
  }]
};

const DoughnutOptions = {
  responsive: true,
  maintainAspectRatio: false
};

export function DoughnutChart() {
  return <Doughnut width={741} height={300} options={DoughnutOptions} data={DoughnutData} />;
}

const polarData = {
  type: 'doughnut',
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      '#6366f1',
      'rgb(75, 192, 192)',
      'rgb(166, 142, 94)',
      'rgb(201, 203, 207)',
      'rgb(94, 166, 142)'
    ],
    borderColor: 'rgba(142, 156, 173,0.1)'
  }]
};

const polarOptions = {
  responsive: true,
  maintainAspectRatio: false
};

export function ChartPolar() {
  return <Doughnut width={741} height={300} options={polarOptions} data={polarData} />;
}

// **************************************************************************************************************

// ** E-Chart Souurce **

export function LineEChart() {
  const options = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ],
    color: "#6366f1"

  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function SmoothLineEChart() {
  const options = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function AreaEChart() {
  const options = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function StackedLineEChart() {
  const options = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#f43f5e", "#22c55e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function StackedAreaEChart() {
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }
    ],
    yAxis: [
      {
        type: 'value',
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#f43f5e", "#22c55e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function StepLineEChart() {
  const options = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Step Start', 'Step Middle', 'Step End'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Step Start',
        type: 'line',
        step: 'start',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Step Middle',
        type: 'line',
        step: 'middle',
        data: [220, 282, 201, 234, 290, 430, 410]
      },
      {
        name: 'Step End',
        type: 'line',
        step: 'end',
        data: [450, 432, 401, 454, 590, 530, 510]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#f43f5e", "#22c55e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BarEChart() {
  const options = {
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',

    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BarWithBackgroundEChart() {
  const options = {
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function StyleForASingleBarEChart() {
  const options = {
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          120,
          {
            value: 200,
            itemStyle: {
              color: '#60a5fa'
            }
          },
          150,
          80,
          70,
          110,
          130
        ],
        type: 'bar'
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function WaterFallEChart() {
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        var tar = params[1];
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
        data: [0, 1700, 1400, 1200, 300, 0]
      },
      {
        name: 'Life Cost',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'inside'
        },
        data: [2900, 1200, 300, 200, 900, 300]
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BarWithNegativeValuesEChart() {
  const labelRight = {
    position: 'right'
  };
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'value',
      position: 'top',
    },
    yAxis: {
      type: 'category',
      axisLabel: { show: false },
      axisTick: { show: false },
      data: [
        'ten',
        'nine',
        'eight',
        'seven',
        'six',
        'five',
        'four',
        'three',
        'two',
        'one'
      ],
    },
    series: [
      {
        name: 'Cost',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          formatter: '{b}'
        },
        data: [
          { value: -0.07, label: labelRight },
          { value: -0.09, label: labelRight },
          0.2,
          0.44,
          { value: -0.23, label: labelRight },
          0.08,
          { value: -0.17, label: labelRight },
          0.47,
          { value: -0.36, label: labelRight },
          0.18
        ]
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BarWithLabelsEChart() {

  let app = {};

  const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
  ];
  app.configParameters = {
    rotate: {
      min: -90,
      max: 90
    },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right'
      }
    },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom'
      }
    },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos] = pos;
        return map;
      }, {})
    },
    distance: {
      min: 0,
      max: 100
    }
  };
  app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
      const labelOption = {
        rotate: app.config.rotate,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        position: app.config.position,
        distance: app.config.distance
      };
      Chart.setOption({
        series: [
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          }
        ]
      });
    }
  };
  const labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {}
    }
  };

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['2012', '2013', '2014', '2015', '2016'],
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: "#8c9097"
          }
        }
      }
    ],
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390]
      },
      {
        name: 'Steppe',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290]
      },
      {
        name: 'Desert',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190]
      },
      {
        name: 'Wetland',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [98, 77, 101, 99, 40]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#22c55e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function HorizontalBarEChart() {

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      }
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: '2012',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ],
    color: ["#6366f1", "#60a5fa"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function HorizontalStackedBarEChart() {

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      }
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#22c55e", "#f43f5e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function PieEChart() {

  const options = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#22c55e", "#f43f5e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function DoughnutEChart() {

  const options = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '0%',
      left: 'center',
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '17',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#22c55e", "#f43f5e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BasicScatterEChart() {

  const options = {
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    // yAxis: {
    //     axisLine: {
    //         lineStyle: {
    //             color: "#8c9097"
    //         }
    //     }
    // },
    series: [
      {
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68]
        ],
        type: 'scatter'
      }
    ],
    color: ["#6366f1"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BubbleEChart() {
  const data = [
    [
      [28604, 77, 17096869, 'Australia', 1990],
      [31163, 77.4, 27662440, 'Canada', 1990],
      [1516, 68, 1154605773, 'China', 1990],
      [13670, 74.7, 10582082, 'Cuba', 1990],
      [28599, 75, 4986705, 'Finland', 1990],
      [29476, 77.1, 56943299, 'France', 1990],
      [31476, 75.4, 78958237, 'Germany', 1990],
      [28666, 78.1, 254830, 'Iceland', 1990],
      [1777, 57.7, 870601776, 'India', 1990],
      [29550, 79.1, 122249285, 'Japan', 1990],
      [2076, 67.9, 20194354, 'North Korea', 1990],
      [12087, 72, 42972254, 'South Korea', 1990],
      [24021, 75.4, 3397534, 'New Zealand', 1990],
      [43296, 76.8, 4240375, 'Norway', 1990],
      [10088, 70.8, 38195258, 'Poland', 1990],
      [19349, 69.6, 147568552, 'Russia', 1990],
      [10670, 67.3, 53994605, 'Turkey', 1990],
      [26424, 75.7, 57110117, 'United Kingdom', 1990],
      [37062, 75.4, 252847810, 'United States', 1990]
    ],
    [
      [44056, 81.8, 23968973, 'Australia', 2015],
      [43294, 81.7, 35939927, 'Canada', 2015],
      [13334, 76.9, 1376048943, 'China', 2015],
      [21291, 78.5, 11389562, 'Cuba', 2015],
      [38923, 80.8, 5503457, 'Finland', 2015],
      [37599, 81.9, 64395345, 'France', 2015],
      [44053, 81.1, 80688545, 'Germany', 2015],
      [42182, 82.8, 329425, 'Iceland', 2015],
      [5903, 66.8, 1311050527, 'India', 2015],
      [36162, 83.5, 126573481, 'Japan', 2015],
      [1390, 71.4, 25155317, 'North Korea', 2015],
      [34644, 80.7, 50293439, 'South Korea', 2015],
      [34186, 80.6, 4528526, 'New Zealand', 2015],
      [64304, 81.6, 5210967, 'Norway', 2015],
      [24787, 77.3, 38611794, 'Poland', 2015],
      [23038, 73.13, 143456918, 'Russia', 2015],
      [19360, 76.5, 78665830, 'Turkey', 2015],
      [38225, 81.4, 64715810, 'United Kingdom', 2015],
      [53354, 79.1, 321773631, 'United States', 2015]
    ]
  ];

  const options = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
      {
        offset: 0,
        color: 'transparent'
      },
      {
        offset: 1,
        color: 'transparent'
      }
    ]),
    legend: {
      right: '10%',
      top: '3%',
      data: ['1990', '2015'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%'
    },
    xAxis: {
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      },
      scale: true
    },
    series: [
      {
        name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgb(94, 154, 166)'
            },
            {
              offset: 1,
              color: 'rgb(94, 154, 166)'
            }
          ])
        }
      },
      {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgb(185, 93, 75)'
            },
            {
              offset: 1,
              color: 'rgb(185, 93, 75)'
            }
          ])
        }
      }
    ],
    color: ["#f43f5e", "#22c55e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function CandlestickEChart() {
  const options = {
    grid: {
      left: '5%',
      right: '0%',
      bottom: '10%',
      top: '10%'
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      }
    },
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42]
        ],
        itemStyle: {
          normal: {
            color: "#6366f1",
            color0: "#60a5fa",
            borderColor: "#6366f1",
            borderColor0: "#60a5fa",
          }
        }
      }
    ]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function RadarEChart() {
  const options = {
    legend: {
      data: ['Allocated Budget', 'Actual Spending'],
      left: '0%',
      top: '0%',
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    radar: {
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ],
    color: ["#6366f1", "#60a5fa"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function HeatmapEChart() {

  const options = {
    title: {
      top: 30,
      left: 'center',
      text: 'Daily Step Count'
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 10000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2016',
      itemStyle: {
        borderWidth: 0.5
      },
      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: ('2016')
    }
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function TreemapEChart() {

  const options = {
    series: [
      {
        type: 'treemap',
        data: [
          {
            name: 'nodeA',
            value: 10,
            children: [
              {
                name: 'nodeAa',
                value: 4
              },
              {
                name: 'nodeAb',
                value: 6
              }
            ]
          },
          {
            name: 'nodeB',
            value: 20,
            children: [
              {
                name: 'nodeBa',
                value: 20,
                children: [
                  {
                    name: 'nodeBa1',
                    value: 20
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    color: ["#6366f1", "#60a5fa"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function FunnelEChart() {

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Inquiry' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
          { value: 100, name: 'Show' }
        ]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#22c55e", "#f43f5e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BasicGaugeEChart() {

  const options = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}'
        },
        data: [
          {
            value: 50,
            name: 'SCORE'
          }
        ]
      }
    ],
    color: ["#6366f1"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function SimpleGraphEChart() {

  const options = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: true,
        label: {
          show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20
        },
        data: [
          {
            name: 'Node 1',
            x: 300,
            y: 300
          },
          {
            name: 'Node 2',
            x: 800,
            y: 300
          },
          {
            name: 'Node 3',
            x: 550,
            y: 100
          },
          {
            name: 'Node 4',
            x: 550,
            y: 500
          }
        ],
        links: [
          {
            source: 0,
            target: 1,
            symbolSize: [5, 20],
            label: {
              show: true
            },
            lineStyle: {
              width: 5,
              curveness: 0.2
            }
          },
          {
            source: 'Node 2',
            target: 'Node 1',
            label: {
              show: true
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: 'Node 1',
            target: 'Node 3'
          },
          {
            source: 'Node 2',
            target: 'Node 3'
          },
          {
            source: 'Node 2',
            target: 'Node 4'
          },
          {
            source: 'Node 1',
            target: 'Node 4'
          }
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    ],
    color: ["#6366f1"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};

// **************************************************************************************************************


// **************************************************************************************************************

//  **Stock Dashboard**

export class TotalAmount extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [34, 55, 41, 67, 22, 43, 21],
        },
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: ["#5a66f1"],
            opacity: 0.3,
          },
          type: "line",
          height: 50,
          width: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#5a66f1"],
        stroke: {
          width: [1.2],
          curve: "smooth",
        },
        xaxis: {
          crosshairs: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          },
        },
      }
    };
  }

  render() {
    return (

      <div id="chart" >
        <ReactApexChart height={50} width={100} className="min-w-fit" options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

export class InvestmentNum extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [34, 55, 41, 47, 32, 53, 31],
        },
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: ["#60a5fa"],
            opacity: 0.3,
          },
          type: "line",
          height: 50,
          width: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#60a5fa"],
        stroke: {
          width: [1.2],
          curve: ["smooth"],
        },
        xaxis: {
          crosshairs: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          },
        },
      }
    };
  }

  render() {
    return (

      <div id="chart" >
        <ReactApexChart height={50} width={100} className="min-w-fit" options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

export class PortfolioValue extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [31, 53, 32, 47, 41, 55, 44],
        },
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: ["#eab308"],
            opacity: 0.3,
          },
          type: "line",
          height: 50,
          width: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#eab308"],
        stroke: {
          width: [1.2],
          curve: ["smooth"],
        },
        xaxis: {
          crosshairs: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          },
        },
      },
    };
  }

  render() {
    return (

      <div id="chart" >
        <ReactApexChart height={50} width={100} className="min-w-fit" options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};

export class ReturnsRate extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [21, 43, 22, 45, 35, 55, 34],
        },
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: ["#f43f5e"],
            opacity: 0.3,
          },
          type: "line",
          height: 50,
          width: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#f43f5e"],
        stroke: {
          width: [1.5],
          curve: ["smooth"],
        },
        xaxis: {
          crosshairs: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          },
        },
      },
    };
  }

  render() {
    return (

      <div id="chart" >
        <ReactApexChart height={50} width={100} className="min-w-fit" options={this.state.options} series={this.state.series} type="line" />
      </div>
    )
  }
};


const fileData = {
  type: 'doughnut',
  label: 'My First Dataset',
  datasets: [
    {
      data: [75, 25],
      backgroundColor: [
        'rgb(94, 166, 142)',
        'rgb(249, 250, 251)'
      ],
      borderWidth: 0,
    },
  ],
};

const fileOptions = {
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: "75%",
};

export function FileChart() {
  return <Doughnut className="chartjs-chart w-full" data={fileData} options={fileOptions} height={250} />;
}