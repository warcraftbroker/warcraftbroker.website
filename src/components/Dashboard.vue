<template>
<div id="dashboard">
  <div class="row g-0">
    <div class="col-lg-3"><h5>248 Mitglieder</h5></div>
    <div class="col-lg-3"><h5>389 Aufträge</h5></div>
    <div class="col-lg-3"><h5>156 Millionen Gold</h5></div>
    <div class="col-lg-3"><h5></h5></div>

</div>
  <div class="row g-0">
    <div class="col-lg-12">
      <apexchart type="area" height="300" :options="options" :series="series"></apexchart>
    </div>

  </div>

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
        labels: ['Sep. 17','ID 29','ID 30','1994','1995','1996','1997','1998','1999','37','Sep. 17','ID 29','ID 30','1994','1995','1996','1997','1998','1999','37'],

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
  0, 1445000,
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
