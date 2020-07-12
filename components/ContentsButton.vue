<template>
<div class="buttonWrap" v-bind:style="{ backgroundColor: buttonColor,	 backgroundImage: `url(${buttonImage})`, color: textColor}">
	<nuxt-link :to="buttonHref">
	</nuxt-link>
	<span>
		<slot />
	</span>
</div>
</template>
<script>
export default {
	props: ["buttonWidth", "buttonHeight", "buttonColor", "buttonHref", "buttonImage", "textColor"],
}
</script>
<style scoped>
@media screen and (max-width: 800px) {
	.buttonWrap {
		height: 20vh;
		width: 80%;
	}
}

@media screen and (min-width: 800px) {
	.buttonWrap {
		height: 40vh;
		width: 30vw;
	}
}

.buttonWrap {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	border: solid #707070 1px;
	font-size: 1.2rem;
	padding-bottom: 1rem;
	text-align: center;
	background-size: cover;
	background-position: center;
}


a:hover, a:link, a:visited, a:active {
	color: #4d4d4d;
	text-decoration: none;
}
</style>
