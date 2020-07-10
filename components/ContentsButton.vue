<template>
<nuxt-link :to="buttonHref">
	<div class="buttonWrap" v-bind:style="{ width: buttonWidth, height: buttonHeight, backgroundColor: buttonColor }">
			<span>
				<slot />
			</span>
	</div>
</nuxt-link>
</template>
<script>
export default {
	props: ["buttonWidth", "buttonHeight", "buttonColor", "buttonHref"]
}
</script>
<style scoped>
.buttonWrap {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	border: solid #707070 1px;
	font-size: 1.2rem;
	padding-bottom: 1rem;
}


a:hover, a:link, a:visited, a:active {
	color: #4d4d4d;
	text-decoration: none;
}
</style>
