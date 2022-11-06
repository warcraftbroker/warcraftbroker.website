<template>
<div id="dashboard">
  <div class="row g-0">
    <div class="col-lg-12">
      <apexchart id="chart"  type="area" height="350" :options="options" :series="series"></apexchart>
    </div>

  </div>
</div>
</template>

<script>
  import axios from 'axios';

export default {
  name: 'MemberStats',
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
            shadeIntensity: 1,
            opacityFrom: 0.45,
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
          },
        },


      },
      series: [{
        type: 'area',
        name: 'Umsatz',
        data: [],
        color: '#67a8e2'
      }],
    }
  }, methods: {
		async getData() {
			try {
				await axios.get("/api/?type=memberData")
				.then(response => {
					this.options = {

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
						labels: response.data.labels,
						grid: {
							show: false,
						},

						xaxis: {
								labels: {
									offsetY: 10,
									show: true,
									rotate: -45,
									rotateAlways: true,
									style: {
									colors: "#DCDDDE"
									}
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
							},
						},				
					}; 
					this.series = [{
						name: 'Mitglieder',
						data: response.data.values,
					}]
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.getData();
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
