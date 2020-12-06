<script lang="ts">
  import Axios from "axios";

  import { Chart } from "chart.js";
  import { onMount } from "svelte";
  import type { Weather } from "./Interfaces";
  import WeatherChart from "./WeatherChart.svelte";

  let city: string = null;
  let chart: Chart;
  let loading = true;
  let currentData: Weather.CurrentResponse;
  let chartData: {
    temp: number[];
    history: number[];
    forecast: number[];
    dates: Date[];
    index: number;
  };
  let requestFailed: boolean = false;

  async function getHistory(city: string) {
    const data = await Axios.get<Weather.ForecastResponse>(
      `/weather/history/${city}`
    );
    const temp = data.data.forecast.forecastday[0].hour.map((h) => h.temp_c);
    const dates = data.data.forecast.forecastday[0].hour.map(
      (h) => new Date(h.time)
    );
    const date = new Date();
    return { temp, dates, date };
  }

  async function getChartData(city: string) {
    Chart.defaults.global.defaultFontColor = "white";
    const { date, dates, temp } = await getHistory(city);
    const index = dates.findIndex((d) => d.getHours() === date.getHours()) + 1;
    const history = temp.slice(0, index);
    const forecast = temp.slice(index - 1);
    return { history, forecast, temp, dates, index };
  }

  async function getCurrent(
    city: string
  ): Promise<Weather.CurrentResponse | null> {
    const data = await Axios.get<Weather.CurrentResponse>(
      `/weather/current/${encodeURIComponent(city)}`
    );

    return data.data;
  }

  async function update() {
    try {
      [chartData, currentData] = await Promise.all([
        getChartData(city),
        getCurrent(city),
      ]);
      city = currentData.location.name;
      requestFailed = false;
    } catch (_) {
      requestFailed = true;
    }
  }

  async function ip() {
    try {
      const data = await Axios.get<Weather.CurrentResponse>(`/weather/ip`);
      return data.data.location.name;
    } catch (error) {
      return "Stuttgart";
    }
  }

  onMount(async () => {
    const name = await ip();
    city = name;
    await update();
    loading = false;
    // createChart(chartData);
  });
</script>

<style>
  #widget {
    color: white;
    background-color: #28272c;
    height: 100vh;
  }

  #data {
    color: white;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
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
  }

  @media (min-width: 700px) {
    .info {
      flex-flow: row nowrap;
    }
  }

  button {
    /* margin: 1rem; */
    background-color: lightgreen;
  }

  #top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: baseline;
  }

  input {
    margin: 1rem;
  }

  h1 {
    text-align: center;
    display: inline;
    margin: 0;
  }

  #loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .error {
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 20px;
    background-color: red;
  }
</style>

<div id="widget">
  {#if loading}
    <div id="loading">
      <h1>Loading</h1>
    </div>
  {:else}
    {#if requestFailed}
      <h3 class="error">could not find what you are looking for</h3>
    {/if}
    <div id="top">
      <h1>Weather in</h1>
      <input
        type="text"
        bind:value={city}
        on:keydown={async (e) => {
          if (e.key === 'Enter') update();
        }} />
      <button on:click={update}>GO</button>
    </div>
    <div id="data">
      <WeatherChart {...chartData} />
      <div>
        <div class="info">
          <div class="item">
            <label for="">Windspeed</label>
            <span>{currentData.current.wind_kph} km/h</span>
          </div>
          <div class="item">
            <label for="">Wind direction</label>
            <span>{currentData.current.wind_dir}</span>
          </div>
          <div class="item">
            <label for="">Feel like</label>
            <span>{currentData.current.feelslike_c} °C</span>
          </div>
          <div class="item">
            <label for="">Actual</label>
            <span>{currentData.current.temp_c} °C</span>
          </div>
        </div>
        <div class="info">
          <div class="item">
            <!-- <label for="">Condition</label> -->
            <img src={currentData.current.condition.icon} alt="" />
            <span
              style="display:block">{currentData.current.condition.text}</span>
          </div>
          <div class="item">
            <label for="">Humidity</label>
            <span>{currentData.current.humidity} %</span>
          </div>
          <div class="item">
            <label for="">Cloud cover</label>
            <span>{currentData.current.cloud} %</span>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
