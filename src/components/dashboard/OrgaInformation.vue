<template>
	<div v-if="visibility == 'query'" id="dashboardElement">
		<p style="text-align:center; float:left; width:100%;margin: 10px 0px 10px 0px;">
			Füge hier den fünfstelligen Code von deinem Organisator ein, um mehr über ihn zu erfahren.
		</p>
		<div style="position:relative; left; width: fit-content; margin: 0px auto 0px auto;">
			<div style=" float: left; clear:both;">
				<VOtpInput
				ref="otpInput"
				input-classes="otp-input"
				separator=""
				:num-inputs="5"
				:is-input-num="true"
				:conditionalClass="['one', 'two', 'three', 'four', 'five']"
				:placeholder="['﹡', '﹡', '﹡', '﹡', '﹡']"
				@on-change="handleOnChange"
				@on-complete="handleOnComplete"
				/>
			</div>
			<button id="submitButton" :class="buttonActive" @click="getOrgaInfo" >Absenden</button>
		</div>
</div>
<div v-if="visibility == 'response'" id="dashboardElement">
	
	<p style="text-align:center; float:left; width:100%;margin: 10px 0px 10px 0px;">
		{{ orgaData.charName }}-{{ orgaData.serverName }} taucht am <span class="highlight">{{ orgaData.firstboost }}</span> das erste Mal in den Aufzeichnungen des Brokers auf. Dieser Nutzer hat an insgesamt <span class="highlight">{{ orgaData.boostcount }}</span> Aufträgen teilgenommen und <span class="highlight">{{ orgaData.contractcount }}</span> davon selber organisiert. Es liegen bisher keine Beschwerden gegen {{ orgaData.charName }}-{{ orgaData.serverName }} vor.
	</p> 		 
	
	<div style="position:relative; left; width: fit-content; margin: 0px auto 0px auto;">
		<button id="submitButton" class="buttonActive" @click="returnToQuery" >Zurück</button></div>
</div>
<div v-if="visibility == 'error'" id="dashboardElement">
	
	<p style="text-align:center; float:left; width:100%;margin: 10px 0px 10px 0px;">
		Zu dieser Anfrage liegen im Archiv keine Daten vor.
	</p> 		 
	
	<div style="position:relative; left; width: fit-content; margin: 0px auto 0px auto;">
		<button id="submitButton" class="buttonActive" @click="returnToQuery" >Zurück</button>
</div>
</div>
</template>

<script>
// Import in a Vue component
import axios from 'axios';
import VOtpInput from 'vue3-otp-input';
import {ref} from 'vue'

export default ({
  name: 'OrgaInformationComponent',
  components: {
    VOtpInput,
  },

  setup() {
    const otpInput = ref(null);
	const buttonActive = ref(null);
	const orgaData = ref(null);
	let orgaCode = null;
	let visibility = ref(null);
	visibility.value = 'query';

    const handleOnComplete = (value) => {
		//console.log('OTP completed: ', value);
		orgaCode = value;
		buttonActive.value = 'buttonActive';
    };

    const handleOnChange = (value) => {		
		if(value.length < 5){
			//console.log('OTP changed: ', value);
			buttonActive.value = '';
		}

	};

    const clearInput = () => {
      otpInput.value.clearInput()
    }

	const getOrgaInfo = () => {
		if(buttonActive.value == 'buttonActive') getData(orgaCode);
	}
	const getData = async (orgaCode) => {
      try {
        await axios.get(`/verify/${orgaCode}`)
        .then(response => { 
			orgaData.value = response.data
			orgaCode = null;
			if(orgaData.value.error){
				visibility.value = 'error';
			} else {
					visibility.value = 'response';
			}
        });

        // JSON responses are automatically parsed.
      } catch (error) {
        console.log(error);
      }
    }

	const returnToQuery = () => {
		visibility.value = 'query';
		buttonActive.value = '';
	}

    return { handleOnComplete, handleOnChange, clearInput, getOrgaInfo, otpInput, buttonActive, visibility, orgaData, returnToQuery };
  },	
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.otp-input {
	position: relative;
	float: left;
	width: 35px;
	height: 40px;
	padding-top: 5px;
	margin: 0 7px;
	font-size: 20px;
	border-radius: 4px;
	background-color: #4f4f4f4e;
	color: #fff;
	border: 0px solid rgba(0, 0, 0, 0.3);
	text-align: center;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
	margin: 0;
}
input::placeholder {
	font-size: 15px;
	text-align: center;
	font-weight: 600;
}
.highlight {
    font-size: 1.1rem;
    text-decoration: underline;
}
#submitButton {
	position: relative;
	float:left;
	font-family: Whitney, "Open Sans", Helvetica, sans-serif;
	font-weight: 400;
	font-size: 11pt;
	border-radius: 3px;
	cursor: pointer;
	height: 38px;
	width:140px;
	padding-top: 4px;
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
	outline: transparent !important;
	background-color: #498ac3;
	border: 2px solid #498ac3;
	color: #fff;
	opacity: 0.3;
}
.buttonActive { 
	opacity: 1 !important;
}

.buttonActive:active {
	transform: translateY(1px);
}


</style>
