<template>
<div :class="{ buttonWrap: true, main: !(buttonSub), sub: buttonSub}" :style="{ width: (buttonWidth == 'long') ? '45%' : '30%', backgroundColor: (buttonBG == 'black') ? '#707070' : 'white', color: (buttonBG == 'black') ? 'white' : '#4d4d4d'}">
	<a :href="buttonLink" v-if="buttonLink" target="_blank"></a>
	<div :class="{ buttonMain: true, textMini: buttonTextMini }">
		{{ buttonMain }}
	</div>
	<div class="buttonSub" v-if="buttonSub">
		{{ buttonSub }}
	</div>
	<img :src="arrowSrc" alt="矢印" class="buttonArrow" v-if="buttonSub != 'coming soon'">
</div>
</template>
<script>
export default {
	props: ["buttonWidth", "buttonMain", "buttonSub", "buttonBG", "buttonTextMini", "buttonLink"],
	data () {
		return {
			arrowSrc: require("@/assets/image/arrow_B.svg")
		}
	},
	mounted () {
		if (this.buttonBG == "black") {
			this.arrowSrc = require("@/assets/image/arrow_W.svg")
		}
	}
}
</script>

<style scoped>

@media screen and (max-width: 800px) {
	.buttonWrap {
		height: 6vh;
	}
	.main > .buttonMain {
		font-size: 0.8rem;
	}

	.sub > .buttonMain {
		font-size: 0.6rem;
	}
	.sub > .buttonSub {
		font-size: 0.6rem;
	}

	.textMini {
		font-size: 0.5rem !important;
	}
}

@media screen and (min-width: 800px) {
	.buttonWrap {
		height: 12vh;
	}

	.main > .buttonMain {
		font-size: 1.5rem;
	}

	.sub > .buttonMain {
		font-size: 1.3rem;
	}
	.sub > .buttonSub {
		font-size: 1.3rem;
	}

	.textMini {
		font-size: 1rem !important;
	}

}

.buttonWrap {
	margin-bottom: 5vh;
	border: solid #707070 1px;
	position: relative;
}

.buttonWrap.main {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.buttonWrap.sub {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.main > .buttonMain {
	font-weight: bold;
	margin: auto;
	transform: translateX(-10%);

}

.sub > .buttonMain {
	font-weight: bold;
}

.sub > .buttonSub {
	font-weight: bold;

}

.buttonArrow {
	height: 60%;
	position: absolute;
	right: 5%;
}

.buttonWrap > a {
	position: absolute;
	height: 100%;
	width: 100%;
	top : 0;
	left: 0;
	z-index: 1;
}

.buttonWrap:hover {
	transition-duration: .1s;
	transform: scale(1.05);
}
</style>
