<template>
  <div id="app">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><router-link class="nav-link px-2 link-secondary" to="/">Schaltzentrale</router-link></li>
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
    </div>
    <router-view id="container"  />
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
h5, h6 {
float:left;
text-transform: uppercase;
padding: 0px;
margin: 0px 0px 25px 0px;
}
.nav, .nav-link {
  padding-bottom: 0px !important;
  margin:0px;
}
p {
  clear:both;
  padding:0px 0px 20px 0px;
  margin: 0px;
}
</style>
