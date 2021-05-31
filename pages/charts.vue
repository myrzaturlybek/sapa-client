<template>
  <div class="pt-24">
    <div class="py-24 bg-white">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <div class="flex flex-wrap overflow-hidden w-full">
          <div class="w-full overflow-hidden flex mb-20 text-black">
            <div class="w-1/2">
              <div class="w-full">
                <VueApexCharts
                  class="flex justify-center"
                  :width="'80%'"
                  :height="'500px'"
                  v-if="showCharts"
                  type="candlestick"
                  :options="options"
                  :series="series"
                ></VueApexCharts>
              </div>
              <div class="w-full">
                <VueApexCharts
                  class="flex justify-center"
                  :width="'80%'"
                  :height="'200px'"
                  v-if="showCharts"
                  type="bar"
                  :options="chartOptionsBar"
                  :series="seriesVolume"
                ></VueApexCharts>
              </div>
            </div>
            <div class="w-1/2">
              <div class="w-full">
                <VueApexCharts
                  class="flex justify-center"
                  :width="'80%'"
                  :height="'500px'"
                  v-if="showCharts"
                  type="candlestick"
                  :options="options2"
                  :series="series2"
                ></VueApexCharts>
              </div>
              <div class="w-full">
                <VueApexCharts
                  class="flex justify-center"
                  :width="'80%'"
                  :height="'200px'"
                  v-if="showCharts"
                  type="bar"
                  :options="chartOptionsBar2"
                  :series="seriesVolume2"
                ></VueApexCharts>
              </div>
            </div>
          </div>

          <div class="w-1/2 mx-auto overflow-hidden">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="40"
                height="40"
                viewBox="0 0 350 350"
                xml:space="preserve"
              >
                <desc>Created with Fabric.js 1.7.22</desc>
                <defs></defs>
                <g
                  id="icon"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: none;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)"
                >
                  <path
                    d="M 28.303 81.565 c 33.962 0 52.538 -28.138 52.538 -52.538 c 0 -0.799 0 -1.595 -0.054 -2.387 c 3.614 -2.614 6.733 -5.85 9.212 -9.558 c -3.37 1.493 -6.945 2.473 -10.606 2.905 c 3.855 -2.308 6.74 -5.937 8.118 -10.213 c -3.625 2.151 -7.59 3.667 -11.725 4.482 c -6.993 -7.436 -18.69 -7.795 -26.126 -0.802 c -4.796 4.51 -6.83 11.23 -5.342 17.643 C 29.473 30.352 15.64 23.34 6.264 11.804 c -4.901 8.437 -2.398 19.231 5.717 24.649 c -2.939 -0.087 -5.813 -0.88 -8.381 -2.311 c 0 0.076 0 0.155 0 0.234 c 0.002 8.79 6.198 16.36 14.814 18.101 c -2.718 0.741 -5.571 0.85 -8.338 0.317 c 2.419 7.522 9.351 12.675 17.251 12.823 c -6.539 5.139 -14.616 7.928 -22.932 7.92 C 2.926 73.534 1.459 73.445 0 73.27 c 8.444 5.419 18.27 8.293 28.303 8.28"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: rgb(29, 161, 242);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                </g>
              </svg>
              <!-- <h2 class="ml-2 text-black text-2xl font-bold">Tweets</h2> -->
            </div>
            <!-- <ul class="text-black mt-6 pl-12">
              <li class="mb-4 " v-for="t in tweets" :key="t.id">{{ t }} <hr></li>
            </ul> -->
            <a
              class="twitter-timeline"
              href="https://twitter.com/Kapitalkz?ref_src=twsrc%5Etfw"
              >Tweets by Kapitalkz</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '../components/LineChart.vue'
export default {
  components: { LineChart },
  data() {
    return {
      showCharts: false,
      chartOptionsBar: {
        chart: {
          type: 'bar',
          brush: {
            enabled: true,
            target: 'candles',
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).getTime(),
              max: new Date().getTime(),
            },
            fill: {
              color: '#ccc',
              opacity: 0.4,
            },
            stroke: {
              color: '#0D47A1',
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: '80%',
            colors: {
              ranges: [
                {
                  from: -1000,
                  to: 0,
                  color: '#F15B46',
                },
                {
                  from: 1,
                  to: 10000,
                  color: '#FEB019',
                },
              ],
            },
          },
        },
        stroke: {
          width: 0,
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            offsetX: 13,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      chartOptionsBar2: {
        chart: {
          type: 'bar',
          brush: {
            enabled: true,
            target: 'candles2',
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date().getTime(),
              max: new Date().getTime(Date.now() - 1000 * 60 * 60 * 24 * 30),
            },
            fill: {
              color: '#ccc',
              opacity: 0.4,
            },
            stroke: {
              color: '#0D47A1',
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: '80%',
            colors: {
              ranges: [
                {
                  from: -1000,
                  to: 0,
                  color: '#F15B46',
                },
                {
                  from: 1,
                  to: 10000,
                  color: '#FEB019',
                },
              ],
            },
          },
        },
        stroke: {
          width: 0,
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            offsetX: 13,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      options: {
        chart: {
          type: 'candlestick',
          id: 'candles',
          // toolbar: {
          //   autoSelected: 'pan',
          //   show: false,
          // },
          zoom: {
            enabled: true,
            autoScaleYaxis: true,
          },
        },
        // plotOptions: {
        //   candlestick: {
        //     colors: {
        //       upward: '#3C90EB',
        //       downward: '#DF7D46',
        //     },
        //   },
        // },
        xaxis: {
          type: 'datetime',
        },
      },
      options2: {
        chart: {
          type: 'candlestick',
          id: 'candles2',
          // toolbar: {
          //   autoSelected: 'pan',
          //   show: false,
          // },
          zoom: {
            enabled: true,
            autoScaleYaxis: true,
          },
        },
        // plotOptions: {
        //   candlestick: {
        //     colors: {
        //       upward: '#3C90EB',
        //       downward: '#DF7D46',
        //     },
        //   },
        // },
        xaxis: {
          type: 'datetime',
        },
      },
      series: [{ data: [] }],
      seriesVolume: [
        {
          name: 'volume',
          data: [],
        },
      ],
      series2: [{ data: [] }],
      seriesVolume2: [
        {
          name: 'volume',
          data: [],
        },
      ],

      tweets: [],
    }
  },
  async mounted() {
    try {
      const dataset = await this.$axios.get('dataset')
      console.log(dataset)
      for (let d of dataset.data) {
        this.series[0].data.push({
          x: new Date(d.date),
          y: [d.low, d.high, d.open, d.close],
        })
        // this.options.xaxis.categories.push(d.date)
        this.seriesVolume[0].data.push({ x: new Date(d.date), y: [d.volume] })
        // this.tweets.push(d.tweet)
      }

      const prediction = await this.$axios.get('dataset/prediction')
      console.log(prediction)
      for (let p of prediction.data) {
        this.series2[0].data.push({
          x: new Date(p.date),
          y: [p.low, p.high, p.open, p.close],
        })
        this.seriesVolume2[0].data.push({ x: new Date(p.date), y: [p.volume] })
      }
      this.showCharts = true
    } catch (e) {
      alert('Что то пошло не так')
      console.log(e)
    }
  },
}
</script>
