<template>
	<div id="backgroundImage" :class="loginState">
		<a :href="hyperlink" :id="discordButton"></a>
	</div>
</template>

<script>
export default {
	name: 'AuthComponent',
	props: ['userId', 'userName', 'avatarString'],
	computed: {
		hyperlink() {
			if (!this.userId) {
				return '/auth/discord'
			} else {
				return '/logout';
			}
		},
		discordButton() {
			if(!this.userId || !this.avatarString) {
				return 'loginButton';
			} else {
				return 'logoutButton';
			}
		},
		loginState() {
			if(!this.userId || !this.avatarString) {
				return 'loggedOut';
			} else {
				return 'loggedIn';
			}
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#backgroundImage {
	width: 30px;
	height: 20px;
	display: block;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.loggedOut {
	background-image: url('../assets/logged-out-discord-icon.svg');
}
.loggedIn {
	background-image: url('../assets/logged-in-discord-icon.svg');

}

#loginButton {
	width: 30px;
	height: 20px;
	display: block;
	background-image: url('../assets/happy-discord-icon.svg');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	opacity: 0;
	transition: 0.3s;
}

#logoutButton {
	width: 30px;
	height: 20px;
	display: block;
	background-image: url('../assets/sad-discord-icon.svg');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	opacity: 0;
	transition: 0.3s;
}
#logoutButton:hover, #loginButton:hover{
	opacity: 1;
}
</style>
