<template>
  <div class="row  g-0">
    <div class="col-lg-3">
      <ul class="subnav">
        <li><router-link class="nav-link link-secondary" to="/guide/quickstart">Quick Start Guide</router-link></li>
        <li><router-link class="nav-link link-secondary" to="/guide/richtlinien">Richtlinien</router-link></li>
        <li><router-link class="nav-link link-secondary" to="/guide/regeln">Regeln</router-link></li>
        <li><router-link class="nav-link link-secondary" to="/guide/faq">Häufig gestellte Fragen</router-link></li>
      </ul>
    </div>
    <div class="col">
      <p>Die nachfolgenden Richtlinien gelten sofern keine anders lautenden Absprachen stattgefunden haben. Sie dienen als Vorlage um zu vermeiden, dass Booster und Organisatoren die Bedinungen für jeden Auftrag aufs neue aushandeln müssen. </p>
      <ol class="orderedList">
        <li>Die Auszahlung eines Boosts erfolgt auf dem im Auftrag angegebenen Server</li>
        <li>Das vorzeitige Verlassen eines Auftrags ist verboten und führt - bei wiederholten auftreten, ungeachtet der Begründung - zum Ausschluss des betroffenen Boosters vom Boostbetrieb</li>
        <li>Alle anlegbaren Gegenstände sind dem Kunden eines Boosts zu überlassen. Wenn ein Booster einen Gegenstand nicht handeln kann, verwirkt er den Anspruch auf seinen Goldanteil. Dieser wird dem Kunden zurückgezahlt</li>
        <li>Es besteht Discord-Pflicht für alle Aufträge</li>
        <li>Das erstellen eines Auftrags erfolgt erst NACH erhalt der Zahlung</li>
        <li>Die Leistungsanforderung in #2000 Boosts ist für Aufträge bis einschließlich M+15 weekly ausgelegt. Das Einstellen von höheren Key-Stufen erfolgt in eigener Verantwortung</li>
      </ol>
    </div>
  </div>

</template>

<script>
export default {
  name: 'GuidelineComponent',
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
.orderedList li {
  list-style-type:decimal;
  padding-bottom: 1rem;
}
.subnav, .subnav li, .subnav a {
  clear:both;
  list-style-type: none;
  padding: 0px!important;
}
a {
  color: #42b983;
  text-decoration: none;
  margin: 0px !important;
}
</style>
