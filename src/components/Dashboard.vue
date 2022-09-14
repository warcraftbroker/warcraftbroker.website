<template>
<div id="dashboard">
  <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
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
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan"
    ],
    labels: {style: { colors: '#ffffff' }}
        },
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 91]
      }]
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
