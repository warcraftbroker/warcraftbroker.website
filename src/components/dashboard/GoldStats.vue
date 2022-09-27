<template>
  <div class="row g-0">
    <div class="col-lg-12">
      <apexchart id="chart"  type="area" height="350" :options="options" :series="series"></apexchart>
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
            opacityFrom: 0.6,
            opacityTo: 0.1,
            stops: [0, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          enabled: true,
          theme:'dark',
          x: {
            show: false,
          }
        },
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
        },
                  
        xaxis: {
          labels: {
            offsetY: 10,
            style: {
                colors: '#DCDDDE',
            },
            
          },
        },
        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false,
          }
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
        type: 'area',
        data: [  5325000,        10850000,
          9110000,        13755000,
          13955000,       14430000,
          15280000,       8770000,
          9910000,        7935000,
          8165000,        5290000,
          970000,         2605000,
          500000, 1445000,
          2960000,        3421000,
          8217000,        12300000
        ],
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
#chart {
  position: relative; 
  left: 7.5px;
}

</style>
