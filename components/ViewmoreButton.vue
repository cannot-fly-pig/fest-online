<template>
	<div class="bottunWrap">
		<nuxt-link to="/">
			<div class="bottunTitle">
					View More
			</div>
		</nuxt-link>
		<div class="bottunImage">
			<img src="a" alt="">
		</div>
	</div>
</template>
<style scoped>
.bottunWrap {
	width: 15vw;
	height: 7vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border: solid #c7c7c7 1px;
	color: #4d4d4d;
	font-size: 1.2rem;
	font-weight: bold;
}

a:link, a:visited, a:hover, a:active {
	color: #4d4d4d;
	text-decoration: none;
}
</style>
