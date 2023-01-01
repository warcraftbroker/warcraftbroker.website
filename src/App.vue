<template>
  <div id="app">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><router-link class="nav-link px-2 link-secondary" to="/dashboard">Schaltzentrale</router-link></li>
        <li><router-link class="nav-link px-2 link-secondary" to="/guide">Anleitung</router-link></li>
        <li><router-link class="nav-link px-2 link-secondary" to="/about">Über uns</router-link></li>
        <li><a href="https://discord.com/invite/aEjVXPNT2s" target="_blank" class="nav-link px-2 link-secondary">Discord
              <svg style = "position:relative; left:0px; top:-1px;" xmlns="http://www.w3.org/2000/svg" ariahidden="true" focusable="false" viewBox="0 0 100 100" width="14" height="14">
                <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
              </svg>
            </a>
        </li>
      </ul>
      <AuthComponent 
      :userId="userData?.id"
      :userName="userData?.username"
      :avatarString="userData?.avatar"
      />
    </div>
    <router-view :userData="userData" />
  
  <div class="githublink">
     <a href="http://www.github.com/warcraftbroker/website" target="_blank">1.2 alpha
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github" data-v-3349ea18="">
            <path fill-rule="evenodd" fill="#DCDDDE" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" data-v-3349ea18="">
            </path>
          </svg>
    auf GitHub</a> 
  </div>
</div>
</template>

<script>
import axios from 'axios';
import AuthComponent from './components/Auth.vue'; 
export default {
  name: 'App',
  components: {
      AuthComponent,
  },
  data() {
		return {
			userData: null
		}
	},
	methods: {
		async getData() {
			try {
				await axios.get("/info/")
				.then(response => {
					console.log(response.data);
					this.userData = response.data;
				});
			} catch (error) {
				console.log(error);
			}
		}
	},
	created() {
		this.getData();
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #DCDDDE;
}
:root {
  --bs-border-color: #36393e;
  --bs-link-color: #42b983 !important;
  --bs-link-hover-color: #379b6e !important;
}

body {
  padding-top: 7px;
  background-color: #36393f;
  margin: auto;
  max-width: 1024px;
  margin: auto;
}
a.nav-link.router-link-active {
  color: #f8f9fa !important;
}
#container {
  float:left;
  width: 100%;
  padding: 40px 0.5rem 40px 0.5rem;
  font-size: 15px;
}
@media (max-width: 720px) {
   #container {
      padding: 20px 15px 15px 15px;
    }
}
.content {
  float:left;
  width:100%;
}
h5 {
float:left;
text-transform: uppercase;
padding: 0px;
}
h6{
  float:left;
  text-transform: uppercase;
  padding: 0px;
  margin: 0px 0px 15px 0px;
}
.nav, .nav-link {
  padding-bottom: 0px !important;
  margin:0px;
}
p {
  clear:both;
  padding: 0px 0.5rem 0px 0.5rem;
  padding:0px 0px 20px 0px;
  margin: 0px;
}
.githublink { 
  width: 100%;
  float:left;
  padding: 0px 0.5rem 10px 0.5rem;
  text-align: center;
}
.githublink > a:visited, .githublink > a:link{
  color: #DCDDDE;
  opacity: 0.3;
  text-decoration: none;
  padding: 0 4px 0 4px;
}
.githublink:hover {
  opacity: 0.5;
}
.githublink svg{
  margin: 0px 1px 1px 1px;
  padding: 2px;
}

</style>
