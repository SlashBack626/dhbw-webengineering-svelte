<script lang="ts">
  import { Chart } from "chart.js";
  import { onMount } from "svelte";
  export let temp: number[];
  export let history: number[];
  export let forecast: number[];
  export let dates: Date[];
  export let index: number;
  let ctx: HTMLCanvasElement;
  let chart: Chart;
  onMount(() => {
    chart = new Chart(ctx, {
      type: "scatter",
      options: {
        tooltips: {
          callbacks: {
            label: (item, data) => {
              return `${item.value} °C`;
            },
          },
        },
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
            hideInLegendAndTooltip: true,
            pointBackgroundColor: (context): string => {
              const { dataIndex } = context;
              if (dataIndex === index - 1) return "red";
              else if (dataIndex > index - 1) return "orange";
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
          },
        ],
      },
    });
  });

  $: {
    if (chart) {
      let tempdata = temp.map((t, i) => {
        return {
          x: i,
          y: t,
        };
      });

      let historyData = history.map((h, i) => {
        return { x: i, y: h };
      });

      let forecastData = forecast.map((f, i) => {
        return {
          x: i + history.length - 1,
          y: f,
        };
      });
      chart.data.datasets[0].data = tempdata;
      chart.data.datasets[1].data = historyData;
      chart.data.datasets[2].data = forecastData;
      chart.update();
    }
  }

  function convertDateToTimeString(date: Date): string {
    let str = "";
    if (date.getHours() < 10) str += "0";
    str += date.getHours();
    str += ":";
    if (date.getMinutes() < 10) str += "0";
    str += date.getMinutes();
    return str;
  }
</script>

<style>
  canvas {
    min-width: 300px;
    max-width: 80vw;
    width: 100%;
    min-height: 300px;
    max-height: 50vh;
    /* max-width: 800px; */
  }

  @media (min-width: 1500px) {
    canvas {
      max-width: 50vw;
    }
  }

  @media (max-width: 900px) {
    canvas {
      max-width: 100%;
    }
  }
</style>

<canvas bind:this={ctx} />
