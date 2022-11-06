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
      <p>Auf unserem Discord Server existiert kein Supportpersonal. Aus diesem Grund sollte bei allen Fragen der erste Ansprechpartner die Person sein, die einen auf den Server geladen hat. Die zweite Anlaufstelle sind die #allgemein und #orga Text Chats. Bitte verzichte darauf weitere Personen per Direktnachricht anzuschreiben.</p>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Welche Anforderungen muss ich erfüllen um Booster/Orga zu werden?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Die aktuellen Anforderungen für Booster/Orga können alle Mitglieder mit der @booster Rolle im #Allgemein Channel den angepinnten Nachrichten entnehmen.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Wie genau entscheidet der Bot wer an einem Boost teilnehmen darf?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>Der Bot wählt Booster bei Teamerstellung nach den folgenden Kriterien aus.</p>
              <p>orga > key holder > rüstung(bei stack) > priorität¹ > beharrlichkeit² > anmeldezeitpunkt</p>
              <ol>
                <li>Die Priorität eines Boosters sinkt nach jedem erfolgten Boost um 1</li>
                <li>Die Beharrlichkeit steigt um 1 wenn man sich für einen Boost anmeldet und nicht genommen wird.</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Welche Bedeutung hat die @mvp Rolle?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Die @mvp Rolle wird jeden Mittwoch an die 6 aktivsten Booster und 3 aktivsten Orga vergeben. Die Rolle ist dekorativer Natur. Sie verleiht keine neuen Rechte und führt auch keine neuen Verpflichtungen mit sich.

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Woher kriege ich einen Broker Bot für meinen eigenen Discord Server?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Der Broker Discord Bot ist eine Eigenentwicklung und funktioniert nur in Verbindung mit dem Broker Discord Server. Für nähere Infos zur Programmierung von Bots siehe: <a href="https://discordjs.guide/">https://discordjs.guide/</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'FaqComponent',
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
ol, li {
  list-style-type:decimal;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
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
.accordion-body {
  background-color: #49443c;
  border-left: 2px solid #faa81a;

}

.accordion-item, .accordion-button, .accordion-collapse {
  background-color: unset;
  color:unset;
  padding-left: 0px;
  padding-right: 0px;
}
button.accordion-button:focus {
  box-shadow: #ffffff !important;
  --bs-accordion-btn-focus-box-shadow: #ffffff;
}
button.accordion-button {
  color: unset !important;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23dcddde'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"); }
</style>
