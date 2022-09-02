<template>
  <div class="row">
      <div class="col-lg-offset-1 col-sm-12 col-md-12 col-lg-10">
          <div class="features-list">
              <div class="row">
                  <div class="col-sm-6 col-md-4 col-lg-4">
                      <div class="feature-block">
                          <div class="name">
                              Quick Start Guide
                          </div>
                          <div class="text">Wir nutzten Slash-Befehle um mit unserem Discord Bot zu interagieren. Hier findest du einen Überblick. </div>
                          <router-link to="/guide/quickstart">Weiter lesen...</router-link>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 col-lg-4">
                      <div class="feature-block">
                          <div class="name">
                              Richtlinien
                          </div>
                          <div class="text">Unsere unverbindlichen Richtlinien bilden ein Fundament für den geordneten Ablauf unserer Boosts.</div>
                          <router-link to="/guide/richtlinien">Weiter lesen...</router-link>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 col-lg-4">
                      <div class="feature-block">
                          <div class="name">
                              Regeln
                          </div>
                          <div class="text">Unsere zwingend verbindlichen Regeln ermöglichen einen fairen und Blizzard-Eula konformen Boostbetrieb.</div>
                          <router-link to="/guide/regeln">Weiter lesen...</router-link>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 col-lg-4">
                      <div class="feature-block">
                          <div class="name">
                              FAQ
                          </div>
                          <div class="text">Alles was bestimmt schon mehrere hundert mal gefragt wurde ist hier zu finden.</div>
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
  color: #42b983;
  text-decoration: none;
}

.features-list .feature-block {
    margin-bottom: 18px;
}

.features-list .feature-block .ico {
    font-size: 37px;
    line-height: 70px;
    width:70px;
    height: 70px;
    background: #5accff;
    display: inline-block;
    border-radius: 50%;
    color: #FFFFFF;
    margin-bottom: 10px;
}
.features-list .feature-block.bottom-line .ico {
    width: auto;
    height: auto;
	background: transparent;
	color: #5accff;
	text-align:left;
	font-size: 41px;
	vertical-align: top;
	margin-top: -10px;
}
.features-list .feature-block.bottom-line .fa-github {
	font-size: 50px;
}
.features-list .feature-block.bottom-line .fa-dashboard {
	font-size: 45px;
	margin-top: -15px;
}
.features-list .feature-block.bottom-line .ico {
	float: left;
	margin-right: 15px;
	margin-left: 21px;
}
.features-list .feature-block.bottom-line .features-content {
	padding-right: 15px;
	display: table;
}
.features-list .feature-block.bottom-line .features-content .name {
	margin-bottom: 5px;
}
.features-list .feature-block.bottom-line .features-content .subname {
	font-size: 16px;
	margin-bottom: 12px;
}
.features-list .feature-block .name {
    font-size: 20px;
    line-height: 1.25em;
    font-weight: bold;
    margin-bottom: 10px;
}
.features-list .feature-block .text {
    font-size: 14px;
    line-height: normal;
    margin-bottom: 15px;
}
</style>
