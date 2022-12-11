<template>
	<div id="container">
		<UserStatsComponent :userData="userData" />
		<div id="dashboard">
			<h6>Server Statistik</h6>
			<router-view class="content"/>
			<div class="nav row g-0">
			<router-link class="nav-link link-secondary link-active col-lg-4" to="/dashboard/gold"><h4 class="middle">{{ gold }}</h4><h6 class="middle">Millionen Gold Umsatz</h6></router-link>
			<router-link class="nav-link link-secondary col-lg-4" to="/dashboard/auftraege"><h4 class="middle">{{ contracts }}</h4><h6 class="middle">Erfüllte Aufträge</h6></router-link>
			<router-link class="nav-link link-secondary col-lg-4" to="/dashboard/mitglieder"><h4 class="middle">{{ members }}</h4><h6 class="middle">Discord Nutzer</h6></router-link>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import UserStatsComponent from './UserStats.vue'

export default {
  name: 'DashboardPage',
  components: {
    UserStatsComponent
  },
  props: ['userData'],
  data() {
    return {
      gold: '---.-',
      contracts: '---',
      members: '---'
    };
  },
  methods: {
    async getData() {
      try {
        await axios.get("/api/?type=overview")
        .then(response => { 
          //console.log(response.data);
          this.gold = (response.data.goldCount/1000000).toFixed(1);
          this.contracts = (response.data.contractCount);
          this.members = (response.data.memberCount);
        });

        // JSON responses are automatically parsed.
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
  .nav {
    clear:left;
  }

  .nav-link {
    padding: 0;
    margin: 0;
  }
  .middle {
    width:100%;
    text-align: center;
  }
  #dashboard {
    float:left;
    width: 100%;
    padding: 40px 0.5rem 40px 0.5rem;
  }


</style>
