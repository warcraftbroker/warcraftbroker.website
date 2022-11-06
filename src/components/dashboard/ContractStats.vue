<template>
  <div class="row g-0">
    <div class="col-lg-12">
      <apexchart id="chart"  type="bar" height="350" :options="options" :series="series"></apexchart>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContractStats',
  props: {
    msg: String
  },
  data: function() {
    return {
      options: {

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
        type: 'bar',
        name: 'Aufträge',
        data: [],
        color: '#67a8e2'
      }],
    }
  },
  methods: {
		async getData() {
			try {
				await axios.get("/api/?type=contractData")
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
						name: 'Aufträge',
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
