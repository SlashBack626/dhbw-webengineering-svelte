<script lang="ts">
  import Axios from "axios";

  import { Chart } from "chart.js";
  import { onMount } from "svelte";
  import type { Weather } from "./Interfaces";

  function convertDateToTimeString(date: Date): string {
    let str = "";
    if (date.getHours() < 10) str += "0";
    str += date.getHours();
    str += ":";
    if (date.getMinutes() < 10) str += "0";
    str += date.getMinutes();
    return str;
  }

  async function getChart(city: string) {
    Chart.defaults.global.defaultFontColor = "white";
    const data = await Axios.get<Weather.ForecastResponse>(
      `/weather/history/${city}`
    );
    const temp = data.data.forecast.forecastday[0].hour.map((h) => h.temp_c);
    const dates = data.data.forecast.forecastday[0].hour.map(
      (h) => new Date(h.time)
    );
    const date = new Date();
    const splitIndex =
      dates.findIndex((d) => d.getHours() === date.getHours()) + 1;
    const history = temp.slice(0, splitIndex);
    const forecast = temp.slice(splitIndex - 1);
    console.log(history);
    console.log(forecast);
    const chart = new Chart("chart", {
      type: "scatter",
      options: {
        maintainAspectRatio: false,
        title: {
          display: false,
          text: `Stuttgart today`,
        },
        scales: {
          gridLines: {
            color: "white",
          },
          yAxes: [
            {
              gridLines: {
                color: "rgba(100,100,100, 0.8)",
              },
            },
          ],
          xAxes: [
            {
              id: "test",
              gridLines: {
                color: "rgba(100,100,100, 0.8)",
              },
              ticks: {
                max: 23,
                min: 0,
                callback: (val) => {
                  console.log(val);
                  return convertDateToTimeString(dates[val]);
                },
              },
            },
          ],
        },
      },
      data: {
        labels: dates.map((d) => convertDateToTimeString(d)),
        datasets: [
          {
            label: "Temperature",
            data: temp.map((t, i) => {
              return {
                x: i,
                y: t,
              };
            }),
            xAxisID: "test",
            type: "line",
            showLine: false,
            borderColor: "white",
            borderWidth: 1,
            backgroundColor: "transparent",
            pointBackgroundColor: (context): string => {
              const { dataIndex } = context;
              if (dataIndex === splitIndex - 1) return "red";
              else if (dataIndex > splitIndex - 1) return "orange";
              else return "blue";
            },
          },
          {
            xAxisID: "test",
            label: "History",
            data: history.map((h, i) => {
              return { x: i, y: h };
            }),
            type: "line",
            showLine: true,
            borderColor: "white",
            borderWidth: 1,
            pointRadius: 0,
            hoverRadius: 0,
            backgroundColor: "rgba(10, 132, 255, 0.73)",
            // pointBackgroundColor: (context): string => {
            //   const { dataIndex } = context;
            //   const date = new Date();
            //   if (dataIndex === history.length - 1) return "red";
            //   else return "rgb(10, 132, 255)";
            // },
          },
          {
            xAxisID: "test",
            label: "Forecast",
            data: forecast.map((f, i) => {
              return {
                x: i + history.length - 1,
                y: f,
              };
            }),
            type: "line",
            showLine: true,
            borderColor: "white",
            borderWidth: 1,
            pointRadius: 0,
            hoverRadius: 0,
            backgroundColor: "rgba(134, 117, 105, 0.63)",
            // pointBackgroundColor: (context): string => {
            //   const { dataIndex } = context;
            //   console.log();
            //   if (dataIndex === 0) return "red";
            //   else return "rgb(255, 127, 0)";
            // },
          },
        ],
      },
    });
  }

  async function getCurrent(city: string) {
    const data = await Axios.get<Weather.CurrentResponse>(
      `/weather/current/${city}`
    );

    return data.data;
  }

  let test = getCurrent("Stuttgart");

  async function ip() {
    const data = await Axios.get<Weather.CurrentResponse>(`/weather/ip`);
    console.log(data.data);
  }

  onMount(async () => {
    getChart("Stuttgart");
    ip();
  });
</script>

<style>
  #widget {
    color: white;
    background-color: #28272c;
    height: 100%;
  }

  #data {
    color: white;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }

  h1 {
    margin: 0;
  }

  #chart {
    min-width: 300px;
    max-width: 80vw;
    width: 100%;
    min-height: 300px;
    max-height: 50vh;
    /* max-width: 800px; */
  }

  .info {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 100%;
  }
  .item {
    padding: 1rem;
    margin: 1rem;
    width: 100%;
    min-width: 100px;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
  }
  img {
    width: 64px;
    height: 64px;
  }

  .item label {
    margin: 1rem;
  }

  @media (min-width: 1500px) {
    #data {
      flex-flow: row nowrap;
    }
    #chart {
      max-width: 50vw;
    }
  }

  @media (min-width: 700px) {
    .info {
      flex-flow: row nowrap;
    }
  }

  @media (max-width: 900px) {
    #chart {
      max-width: 100%;
    }
  }
</style>

<div id="widget">
  <h1>Weather</h1>
  <div id="data">
    <canvas id="chart" />
    <div>
      {#await test}
        <h2>loading</h2>
      {:then data}
        <div class="info">
          <div class="item">
            <label for="">Windspeed</label>
            <span>{data.current.wind_kph} km/h</span>
          </div>
          <div class="item">
            <label for="">Wind direction</label>
            <span>{data.current.wind_dir}</span>
          </div>
          <div class="item">
            <label for="">Feel like</label>
            <span>{data.current.feelslike_c} °C</span>
          </div>
          <div class="item">
            <label for="">Actual</label>
            <span>{data.current.temp_c} °C</span>
          </div>
        </div>
        <div class="info">
          <div class="item">
            <!-- <label for="">Condition</label> -->
            <img src={data.current.condition.icon} alt="" />
            <span style="display:block">{data.current.condition.text}</span>
          </div>
          <div class="item">
            <label for="">Humidity</label>
            <span>{data.current.humidity} %</span>
          </div>
          <div class="item">
            <label for="">Cloud cover</label>
            <span>{data.current.cloud} %</span>
          </div>
        </div>
      {/await}
    </div>
  </div>
</div>
