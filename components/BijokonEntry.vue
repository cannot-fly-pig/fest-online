<template>
<div class="entryWrap">
	<div class="entryImageWrap" v-if="imagePosition == 'left'">
		<img class="entryImage" :src="entryImage" alt="entryName">
		<div class="more" @click="showModal()">
			<img class="mottomiru" src="@/assets/image/mottomiru.png" alt="もっと見る">
		</div>
	</div>
	<div class="textWrap">
		<h2 class="entryName">No.{{ entryNumber }} {{ entryName }}</h2>
		<div class="entryText">{{ entryText }}</div>
	</div>
	<div class="entryImageWrap" v-if="imagePosition == 'right'">
		<img class="entryImage" :src="entryImage" alt="entryName">
		<div class="more" @click="showModal()">
			<img class="mottomiru" src="@/assets/image/mottomiru.png" alt="もっと見る">
		</div>
	</div>
</div>
</template>

<script>
export default {
	props: ["entryNumber", "entryName", "entryText", "entryImage", "imagePosition", "imagePath"],
	data () {
		return {
		}
	},
	methods: {
		showModal() {
			console.log(process.env.bijokon[this.entryNumber-1])
			this.$parent.show = true
			this.$parent.num = 0
			this.$parent.parson = this.entryNumber - 1
		}
	}
}
</script>
<style>
@media screen and (max-width: 800px) {
	.entryWrap {
		width: 100vw;
		padding: 3%;
	}
	.entryImageWrap {
		width: 45vw;
	}

	.mottomiru {
		width: 60%;
	}

}

@media screen and (min-width: 800px) {
	.entryWrap {
		width: 50%;
	}

	.entryImageWrap {
		width: 45%;
	}

	.mottomiru {
		width: 40%;
	}

}
.entryWrap {
	font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;
	position: relative;
	min-height: 30vh;
	display: flex;
	flex-direction: row;
	align-items: center;
}

.entryImageWrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.entryImage {
	width: 100%;
}
.textWrap {
	width: 60%;
	background-color: #F8D1E0;
	opacity: 0.75;
	margin: 5vh 0;
}

.entryName {
	margin-top: 5%;
	margin-left: 5%;
	margin-right: 5%;
}

.entryText {
	margin-bottom: 5%;
	margin-left: 5%;
	margin-right: 5%;
}

.more {
	text-align: center;
}
</style>
