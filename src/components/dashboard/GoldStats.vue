<template>
  <div class="row g-0">
    <div class="col-lg-12">
      <apexchart id="chart"  type="area" height="350" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
name: 'GoldStats',
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
	grid: {
	show: false,
	},
		
	xaxis: {
		labels: {
								labels: {
									offsetY: 0,
									show: true,
									rotate: -45,
									rotateAlways: true,
									style: {
									colors: "DCDDDE"
									}
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
	data: [],

	color: '#67a8e2'
	}],
	}
	},
	methods: {
		async getData() {
			try {
				await axios.get("/api/?type=goldData")
				.then(response => {
					this.options = {
						labels: response.data.labels,

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
							formatter: function (val) {
								return (val > 500) ? `${(val/1000000).toPrecision(3)} M` : val;
							}
							},
						},				
					}; 
					this.series = [{
						name: 'Umsatz',
						data: response.data.values,
					}];
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
