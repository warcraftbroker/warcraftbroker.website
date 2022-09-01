<template>

<div>
  <h5>Anleitung</h5>      
  <ul class="subnav">
        <li><router-link class="nav-link px-2 link-secondary" to="/guide/quickstart">Schnell Start Anleitung</router-link></li>
        <li><router-link class="nav-link px-2 link-secondary" to="/guide/richtlinien">Richtlinien</router-link></li>
        <li><router-link class="nav-link px-2 link-secondary" to="/guide/regeln">Regeln</router-link></li>
        <li><router-link class="nav-link px-2 link-secondary" to="/guide/faq">Häufig gestellte Fragen</router-link></li>
      </ul>
  <router-view class="content"/>
</div>

</template>

<script>
export default {
  name: 'GuidePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subnav {
  float:left;
}
ul, li, a {
clear:both;
  list-style-type: none;
  padding: 0px!important;
  margin: 0px 20px 0px 0px !important;
}
</style>
