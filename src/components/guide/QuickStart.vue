<template>
  <div class="row g-0">
    <div class="col-lg-3">
      <ul class="subnav">
        <li><router-link class="nav-link link-secondary" to="/guide/quickstart">Quick Start Guide</router-link></li>
        <li><router-link class="nav-link link-secondary" to="/guide/richtlinien">Richtlinien</router-link></li>
        <li><router-link class="nav-link link-secondary" to="/guide/regeln">Regeln</router-link></li>
        <li><router-link class="nav-link link-secondary" to="/guide/faq">Häufig gestellte Fragen</router-link></li>
      </ul>
    </div>
    <div class="col">
      <div class="evenSector">
        Booster Einladen
      </div>
      <div class="oddSector">
        Charakter Registrieren
      </div>
      <div class="evenSector">
        An Boost teilnehmen
      </div>
      <div class="oddSector">
        Weitere Befehle
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'QuickStartComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subnav {
  float:left;
  padding: 0;
}
.subnav > li, .subnav > a {
  clear:both;
  list-style-type: none;
  padding: 0px !important;
  margin: 0px 0px 0px 0px !important;
}
a {
  text-decoration: none;
}

.oddSector, .evenSector {
  font-weight:400;
min-height: 50px;
padding: 15px;
}
.evenSector {
  background-color: #2C2F33;
}
</style>
