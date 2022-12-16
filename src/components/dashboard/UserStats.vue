<template>
    <div id="userStats" :class="checkVisibilty">
        <h6>User Information</h6>
        <img id="avatar" :src="avatarLink" />
        <div id="infoText" v-html="infoString">

        </div>
    </div>

</template>

<script>
export default {
	name: 'UserStatsComponent',
    props: ['userData'],
	computed: {
        checkVisibilty() {
            if(!this.userData?.id){
                return 'hidden';
            } else {
                return 'visible';
            }
        },
        avatarLink() {
            if(!this.userData?.id){
                return '';
            } else {
                return `https://cdn.discordapp.com/avatars/${ this.userData?.id }/${ this.userData?.avatar }.webp?size=64`;
            }
        },
        infoString() {
            if(this.userData?.boostcount == 0) {
                return `<span id="missingNo">Willkommen ${ this.userData?.username }, zu deinem Account liegen dem Broker noch keine Informationen vor.</span>`
            } else {
                return `Willkommen ${ this.userData?.username }, dein erster Boost war am <span class="highlight">${ this.userData?.firstboost }</span>. Seit dem hast du an <span class="highlight">${ this.userData?.boostcount }</span>&nbsp;Aufträgen teilgenommen, <span class="highlight">${ this.userData?.contractcount }</span>&nbsp;Boosts organisiert und insgesamt <span class="highlight">${ this.userData?.gold }</span>&nbsp;Gold eingenommen!
`
            }
        }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.highlight {
    font-size: 1.1rem;
    text-decoration: underline;
}
.hidden {
    display: none;
}
#userStats {
    width: 100%;
    padding: 0px 0.5rem 0px 0.5rem;
    font-size: 15px;
}
h6 {
    float:left;
}

#avatar {
    float:left;
    clear: left;
    padding: 0px 10px 0px 10px;
    margin: 0px 20px 5px 20px;
    border-radius: 50%;
}
#infoText {
    padding-top: 5px;
    float:left;
    max-width: 800px;
}
#missingNo {
    float:left;
    padding-top: 15px;
}
</style>
