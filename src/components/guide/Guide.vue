<template>
	<div id="container">
		<router-view class="content"/>
	</div>
</template>
<script>
export default {
	name: 'GuidePage',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
