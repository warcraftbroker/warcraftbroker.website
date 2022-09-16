<template>
<div id="dashboard">
  <div class="row g-0">
    <div class="col-lg-3"><h5>248 Mitglieder</h5></div>
    <div class="col-lg-3"><h5>895 Aufträge</h5></div>
    <div class="col-lg-3"><h5>1206 Dungeons</h5></div>
    <div class="col-lg-3"><h5>155 Millionen Gold</h5></div>

</div>
  <div class="row g-0">
    <div class="col-lg-12">
      <apexchart type="area" height="350" :options="options" :series="series"></apexchart>
    </div>

  </div>
<p><svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github" data-v-3349ea18=""><path fill-rule="evenodd" fill="#DCDDDE" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" data-v-3349ea18=""></path></svg></p><p data-v-3349ea18=""><a href="http://www.github.com/warcraftbroker/website" target="_blank">http://www.github.com/warcraftbroker/website</a></p>
</div>
</template>

<script>
export default {
  name: 'DashboardPage',
  props: {
    msg: String
  },
  data: function() {
    return {
      options: {
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.5,
            opacityFrom: 0.9,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {enabled: true,theme:'dark',
        x: {
          show: false,
          formatter: undefined,
      },},
        labels: [
  '6. Mai',   '13. Mai',
  '20. Mai',  '27. Mai',
  '3. Juni',  '10. Juni',
  '17. Juni', '24. Juni',
  '1. Juli',  '8. Juli',
  '15. Juli', '22. Juli',
  '29. Juli', '5. Aug.',
  '12. Aug.', '19. Aug.',
  '26. Aug.', '2. Sept.',
  '9. Sept.', '16. Sept.'
],

        grid: {
    show: false,
  
},          xaxis: {
          labels: {
            style: {
                colors: '#DCDDDE',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
                colors: ['#DCDDDE'],
            },
            formatter: function (val) {
              return (val > 500) ? `${(val/1000000).toPrecision(3)} M` : val;
            }
          },
        },


      },
      series: [{
        type: 'line',
        name: 'Umsatz',
        data: [  5325000,        10850000,
  9110000,        13755000,
  13955000,       14430000,
  15280000,       8770000,
  9910000,        7935000,
  8165000,        5290000,
  970000,         2605000,
  500000, 1445000,
  2960000,        3421000,
  8217000,        12300000],
        color: '#67a8e2'
      }],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: center;
}
a {
  text-decoration: none;
}

</style>
