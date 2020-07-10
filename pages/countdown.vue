<template>
	<div class="wrap">
		<img :src="countImage" alt="カウントダウンの背景">
		<div class="countdownNum">
			<div class="countHour">{{ this.countHour }}</div> : <div class="countMin">{{ this.countMin }}</div>
		</div>
	</div>
</template>
<script>
export default {
	layout: "countdown",
	data () {
		return {
			countHour: 0,
			countMin: 0,
			countImage: require("@/assets/image/countdownpc.png")

		}
	},
	created () {
		if (process.browser) {
			if (window.innerWidth <= 800) {
				this.countIamge = require("@/assets/image/countdownpc.png")
			}else{
				this.countIamge = require("@/assets/image/countdownmobile.png")
			}
		}
		this.culcDiff()
	},
	methods: {
		culcDiff () {
			const release = new Date(2020, 6, 11, 14, 0)
			const now = new Date()
			let count = release.getTime() - now.getTime()
			this.countHour = Math.floor(count / 1000 / 60 / 60)
			count -= this.countHour * 1000 * 60 * 60
			this.countMin = Math.ceil(count / 1000 / 60)
			setTimeout(this.culcDiff, 30 * 1000, false)
		}
	}
}
</script>
<style>
.wrap {
	background-color: #00adfc;
	width: 100%;
	height: 100vh;
	position: relative;
	z-index: -2;
}

.wrap > img {
	max-width: 100%;
	max-height: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: -1;
}

.countdownNum {
	color: white;
	display: flex;
	flex-direction: row;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -25%);
	z-index: 2;

}

@media (max-width: 749px) {
	.countdownNum {
		font-size: 3rem;
	}
}

@media (min-width: 750px) {
	.countdownNum {
		font-size: 10rem;
	}
}
</style>
