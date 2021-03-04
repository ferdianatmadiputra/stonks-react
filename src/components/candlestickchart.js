import React from 'react'
import ReactApexChart from "react-apexcharts"
const dayjs = require('dayjs')

export default function Chart (props) {
      let chartData = props.chartData
      console.log(chartData, 'ini isi chartData di chart')
      // if (chartData && chartData.length > 0) {
      if (chartData) {
        // let historicals = chartData.historical
        // const historicals = chartData[0].historical
        let candlesticks = []
        chartData.historical.map((el) => {
          let aCandle = {
            x: new Date(el.date), //can also straight el.label
            y: [el.open, el.high, el.low, el.close] //O,H,L,C
          }
          candlesticks.push(aCandle)
          return el
        })
        // console.log(chartData[0], 'isi chartdata')
        const series = [{
          name: 'candle',
          data: candlesticks.reverse()
        //   [
        //     {
        //       x: new Date(1538778600000),
        //       y: [6629.81, 6650.5, 6623.04, 6633.33]
        //     },
        //   ]
      }]
      const options= {
        chart: {
          height: 350,
          type: 'candlestick',
        },
        title: {
          text: `${chartData.symbol}`,
          // text: `${chartData[0].symbol}`,
          align: 'left'
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: 'category',
          labels: {
            formatter: function(val) {
              return dayjs(val).format('D MMM YY')
            }
          }
        },
        yaxis: {
          labels: {
            formatter: function(val) {
              return val.toFixed(2)
            }
          },
          tooltip: {
            enabled: true
          }
        }
      }
      
      return (
        <div>
        <div id="chart">
          <ReactApexChart options={options} series={series} type="candlestick" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  } else {

    return (
      <h1>loading...</h1>
      )
    }
  }