<template>
  <div class="row">
      <div class="col-lg-offset-1 col-sm-12 col-md-12 col-lg-10">
          <div class="features-list">
              <div class="row">
                  <div class="col-sm-6 col-md-4 col-lg-4">
                      <div class="feature-block">
                          <h6>Quick Start Guide</h6>
                          <div class="text">Wir nutzen Slash-Befehle um mit unserem Discord Bot zu interagieren. Hier findest du einen Überblick. </div>
                          <router-link to="/guide/quickstart">Weiter lesen...</router-link>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 col-lg-4">
                      <div class="feature-block">
                          <h6>
                            Richtlinien
                          </h6>
                          <p class="text">Unsere unverbindlichen Richtlinien bilden ein Fundament für den geordneten Ablauf unserer Boosts.</p>
                          <router-link to="/guide/richtlinien">Weiter lesen...</router-link>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 col-lg-4">
                      <div class="feature-block">
                          <h6>
                              Regeln
                          </h6>
                          <div class="text">Unsere zwingend verbindlichen Regeln ermöglichen einen fairen und Blizzard-Eula konformen Boostbetrieb.</div>
                          <router-link to="/guide/regeln">Weiter lesen...</router-link>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 col-lg-4">
                      <div class="feature-block">
                            <h6>
                        F.A.Q.
                            </h6>
                          <div class="text">Alles, was bestimmt schon mehrere hundert mal gefragt wurde, ist hier zu finden.</div>
                          <router-link to="/guide/faq">Weiter lesen...</router-link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div> 
</template>

<script>
export default {
  name: 'FeaturesComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    clear:both;
  text-decoration: none;
}

.features-list .feature-block {
    margin-bottom: 25px;
}
.text {
    padding: 0px 0px 15px 0px;
    clear: both;
}

</style>
