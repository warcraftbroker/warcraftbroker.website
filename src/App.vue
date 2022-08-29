<template>
  <div id="app">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style="color:#DCDDDE;">
        <li><router-link class="nav-link px-2 link-secondary" to="dashboard">Dashboard</router-link></li>
        <li><router-link class="nav-link px-2 link-secondary" to="guide">Guide</router-link></li>
        <li><a href="https://discord.gg/tJQgNTszBR" class="nav-link px-2 link-secondary">Discord
              <svg style = "position:relative; left:0px; top:-1px;" xmlns="http://www.w3.org/2000/svg" ariahidden="true" focusable="false" viewBox="0 0 100 100" width="14" height="14">
                <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
              </svg>
            </a>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding-top: 7px;
  background-color: #36393f;
  margin: auto;
  max-width: 1100px;
  margin: auto;
}
a.nav-link.router-link-active {
  color: #f8f9fa !important;
}
</style>
