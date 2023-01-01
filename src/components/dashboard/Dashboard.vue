<template>
	<div id="container">
		<UserStatsComponent :userData="userData" />
		<div id="dashboard">
			<div class="nav row g-0">
			<router-link class="nav-link link-secondary link-active col-lg-4" to="/dashboard/gold"><h6 class="middle">{{ gold }} Millionen Gold Umsatz</h6></router-link>
			<router-link class="nav-link link-secondary col-lg-4" to="/dashboard/auftraege"><h6 class="middle">{{ contracts }} Erfüllte Aufträge</h6></router-link>
			<router-link class="nav-link link-secondary col-lg-4" to="/dashboard/mitglieder"><h6 class="middle">{{ members }} Discord Nutzer</h6></router-link>
			</div>
			<router-view class="content"/>
    </div>
    <OrgaInformation />
	</div>
</template>

<script>
import axios from 'axios';
import OrgaInformation from './OrgaInformation.vue';
import UserStatsComponent from './UserStats.vue'

export default {
  name: 'DashboardPage',
  components: {OrgaInformation, UserStatsComponent},
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
    height: fit-content;
    padding: 0;
    margin: 0;
  }
  .middle {
    width:100%;
  }
  #dashboard {
    float:left;
    width: 100%;
  }
  .content {
    padding: 32px 0rem 0px 0rem;
    position: relative;
    left: -12.5px;
  }


</style>
