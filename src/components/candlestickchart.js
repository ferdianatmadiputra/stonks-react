import React from 'react'
import ReactApexChart from "react-apexcharts"
const dayjs = require('dayjs')
export default function Chart (props) {
      const chartData = props.chartData
      console.log(chartData)
      if (chartData && chartData.length > 0) {
        const historicals = chartData[0].historical
        let candlesticks = []
        historicals.map((el) => {
          let aCandle = {
            x: new Date(el.date), //can also straight el.label
            y: [el.open, el.high, el.low, el.close] //O,H,L,C
          }
          candlesticks.push(aCandle)
          return el
        })
        console.log(chartData[0], 'isi chartdata')
        const series = [{
          name: 'candle',
          data: candlesticks.reverse()
        //   [
        //     {
        //       x: new Date(1538778600000),
        //       y: [6629.81, 6650.5, 6623.04, 6633.33]
        //     },
        //     {
        //       x: new Date(1538780400000),
        //       y: [6632.01, 6643.59, 6620, 6630.11]
        //     },
        // ]
      }]
      const options= {
        chart: {
          height: 350,
          type: 'candlestick',
        },
        title: {
          text: `${chartData[0].symbol}`,
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
  }
  return (
    <h1>loading...</h1>
  )
  }