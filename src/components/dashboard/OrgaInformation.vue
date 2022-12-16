<template>
	<div id="dashboardElement">
		<h6>Orga Information</h6>
		<p style="text-align:center; float:left; width:100%;margin: 10px 0px 10px 0px;">
			Füge hier den fünfstelligen Code von deinem Organisator ein, um mehr über ihn zu erfahren. 
		</p> 		 
		<div style="display: inline-block; float: left; clear:both; margin: 0px 7px 0px 290px">
			<VOtpInput
			ref="otpInput"
			input-classes="otp-input"
			separator=""
			:num-inputs="5"
			:is-input-num="true"
			:conditionalClass="['one', 'two', 'three', 'four', 'five']"
			:placeholder="['*', '*', '*', '*', '*']"
			@on-change="handleOnChange"
			@on-complete="handleOnComplete"
			/>
		</div>
		<button id="submitButton" disabled>Absenden</button>

</div>
</template>

<script>
// Import in a Vue component
import VOtpInput from 'vue3-otp-input';
import {ref} from 'vue'

export default ({
  name: 'OrgaInformationComponent',
  components: {
    VOtpInput,
  },
  setup() {
    const otpInput = ref(null)

    const handleOnComplete = (value) => {
		console.log('OTP completed: ', value);
    };

    const handleOnChange = (value) => {
      console.log('OTP changed: ', value);
    };

     const clearInput = () => {
      otpInput.value.clearInput()
    }

    return { handleOnComplete, handleOnChange, clearInput, otpInput };
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

#submitButton {
	position: relative;
	float:left;
	font-family: Whitney, "Open Sans", Helvetica, sans-serif;
	font-weight: 400;
	font-size: 11pt;
	border-radius: 3px;
	cursor: pointer;
	height: 40px;
	width:140px;
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
	outline: transparent !important;
	background-color: #498ac3;
	border: 2px solid #498ac3;
	color: #fff;
}


#submitButton:hover {
	transform: translateY(1px);
}

#submitButton:active {
	transform: translateY(2px);
}


</style>
