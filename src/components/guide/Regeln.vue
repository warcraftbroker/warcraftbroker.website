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
      <p> Die nachfolgenden Regeln sind zwingend verbindlich. Sie gewährleisten einen fairen, geordneten und Blizzard-verhaltensregelkonformen Boostbetrieb.</p>
      <ol class="orderedList">
        <li>Da escrow Dienste seitens Blizzard verboten wurden, hat die Auszahlung eines Auftrags unverzüglich nach Abschluss des Boosts stattzufinden <a href="https://us.forums.blizzard.com/en/wow/t/ty-blizz-for-the-policy-update/1176879/12" target="_blank">[Ref.1]</a></li>
        <li>Organisatoren, die einen Kunden über den ingame Dienstleistungs-Channel geworben haben, sind dazu verpflichtet mit dem WoW Charakter an einem Boost teilzunehmen mit dem sie den Kunden geworben haben <a href="https://us.forums.blizzard.com/en/wow/t/boostingrmt-advertising/1172996/9" target="_blank">[Ref.2]</a></li>
        <li>Da für die teilnehmenden Booster der Ursprung eines Kunden nicht zweifelsfrei festgestellt werden kann, sind Organisatoren immer dazu verpflichtet an ihren Boosts teilzunehmen</li>
        <li>Die Teilnahme an einem Boost gilt als Einverständniserklärung für die Bedingungen, die der jeweilige Organisator stellt</li>
        <li>Die Teamerstellung ist auf diesem Discord Server dem Bot vorbehalten. Die manuelle Organisation von Teams außerhalb der dafür vorgesehenen Aufträge-Kanäle ist verboten</li>
        <li>Das Erstellen von "Test"-Aufträgen ist verboten</li>
        <li>Das unnötige @rolle Pingen ist zu vermeiden. Der Mindestzeitabstand von 2 Minuten ist auch für Nachrichten in unterschiedlichen Sammelplatz-Kanälen einzuhalten</li>
      </ol>
    <p>Es gelten des weiteren die Discord Community Guidelines:  <a href="https://discord.com/guidelines" target="_blank">https://discord.com/guidelines</a></p>
    <p>Die Regeln 1, 2 und 3 ergeben sich aus den von Blizzard im Januar 2022 verkündeten neuen Verhaltensregeln. Die ursprüngliche Ankündigung dazu befindet sich hier: <a href="https://us.forums.blizzard.com/en/wow/t/policy-update-for-organized-in-game-services-january-2022/1176836" target="_blank">Policy update for organized ingame services</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RulesComponent',
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
.orderedList li {
  list-style-type:decimal;
  padding-bottom: 1rem;
}
.subnav > li, .subnav > a {
  clear:both;
  list-style-type: none;
  padding: 0px !important;
  margin: 0px 0px 0px 0px !important;
}
a {
  text-decoration: none;
  margin: 0px !important;
}
</style>
