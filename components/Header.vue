<template>
<header>
	<nuxt-link to="/"><img class="logo" src="@/assets/image/Logotype_B.svg" alt="オンライン文化祭"></nuxt-link>	
	<div class="link"><nuxt-link to="/#welcome">About</nuxt-link></div>
	<div class="link"><nuxt-link to="/bushi">サークル</nuxt-link></div>
	<div class="link">ステージ <br> coming soon</div>
	<div class="link">装飾 <br> coming soon</div>
</header>
</template>

<style scoped>
@media screen and (max-width: 800px) {
	.link {
		font-size: 0.6rem;
	}
	header {
		padding-left: 3%;
		padding-right: 5%;
	}
}

@media screen and (min-width: 800px) {
	header {
		padding-left: 10%;
		padding-right: 10%;
	}
}

header {
	height: 10vh;
	width: 100%;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	font-weight: 600;
	color: #4d4d4d;
}

.link {
	text-align: center;
}

.logo {
	height: 9.5vh;
}

</style>
