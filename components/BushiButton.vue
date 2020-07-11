<template>
	<div :class="{ buttonWrap: true, main: !(buttonSub), sub: buttonSub}" :style="{ width: (buttonWidth == 'long') ? '45%' : '30%', backgroundColor: (buttonBG == 'black') ? '#707070' : 'white', color: (buttonBG == 'black') ? 'white' : '#4d4d4d'}">
		<div :class="{ buttonMain: true, textMini: buttonTextMini }">
			{{ buttonMain }}
		</div>
		<div class="buttonSub" v-if="buttonSub">
			{{ buttonSub }}
		</div>
		<img src="@/assets/image/arrow_B.svg" alt="矢印" class="buttonArrow" v-if="!buttonSub">
	</div>
</template>
<script>
export default {
	props: ["buttonWidth", "buttonMain", "buttonSub", "buttonBG", "buttonTextMini"]
}
</script>

<style>

.buttonWrap {
	height: 12vh;
	margin-bottom: 5vh;
	border: solid #707070 1px;
}

.buttonWrap.main {
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
}

.buttonWrap.sub {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.main > .buttonMain {
	font-size: 1.5rem;
	font-weight: bold;
	margin: auto;
	transform: translateX(-25%);

}

.sub > .buttonMain {
	font-size: 1.3rem;
	font-weight: bold;
}

.textMini {
	font-size: 1rem !important;
}

.sub > .buttonSub {
	font-size: 1.3rem;
	font-weight: bold;

}

.buttonArrow {
	height: 60%;
	position: absolute;
	right: 5%;
}
</style>
