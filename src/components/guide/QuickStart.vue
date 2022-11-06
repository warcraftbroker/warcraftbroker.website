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
      <p>Um auf dem Discord Server des Broker's durchstarten zu können kannst du dich hier mit ein paar elementaren Funktionen unseres Bot's vertraut machen.</p>
      <div class="evenSector">
       <h5>0. Einladen</h5> <p>
         Das Einladen eines neuen Boosters funktioniert per Rechtsklick auf den Anzeigenamen eines Discord-Nutzers. Diese Aktion verleiht dem ausgewählten Nutzer die @booster Rolle.
         
       </p><img id="einladenImg" src="../../assets/einladen.png">
      </div>
      <div class="oddSector">
        <h5>
          1. Registrieren<br/>
        </h5>
        <p>
          Der /registrieren Befehl kann genutzt werden, um einen WoW-Charakter beim Broker zu registrieren. Er steht allen Nutzern mit der @booster Rolle im #allgemein Text Chat zur Verfügung. 
        </p>
        <video  autoplay muted loop>
          <source src="../../assets/registrieren.webm" type="video/webm">
        Your browser does not support the video tag.
        </video> 
      </div>
      <div class="evenSector">
        <h5>2. Teilnehmen</h5>
        <p>Im Einsatzbereich-#auftrage können Booster sich, durch klicken des Teilnehmen-Buttons, an den eingehenden Aufträgen anmelden. Die Anmeldung erfordert die Auswahl eines Charakters und der entsprechenden Rolle (Tank/Heal/Dps). Die Angabe eines Schlüsselsteins erfolgt auf freiwilliger Basis.</p>
      </div>
      <p>
        Weitere nützliche Befehle sind /update, /löschen und /voice. Der /update Befehl kann genutzt werden, um die Rio Werte aller registrierten Charaktere eines Nutzers zu aktualisieren. /löschen kann verwendet werden, um einzelne Charaktere aus dem System zu löschen und /voice kann genutzt werden, um einen eigenen Voice Kanal zu erstellen. 
      </p>
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
  padding: 0px 15px 15px 15px;
  margin: 10px 0px 10px 0px;
}

h5 {
  margin: 0px auto 20px auto !important;
}

video {
  margin: 0px;
}
@media (max-width: 450px) {
   #einladenImg {
      width: 100%;
    }
    video {
      width:100%;
    }
}
@media (max-width: 720px) {
    video {
      width:100%;
    }
}
</style>
