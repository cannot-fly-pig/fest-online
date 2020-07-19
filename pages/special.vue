<template>
  <main>
		<section class="topWrap">
			<h1 class="topTitle">Special</h1>
		</section>
		<section class="videoWrap">
			<div class="videoTitle">
				<span>コント</span>
			</div>
			<youtube 
				video-id="tnGx6-bC5rI"
			/>
			<youtube 
				video-id="z3wJlHmIWt0"
			/>
			<youtube 
				video-id="LQw0UisqlDg"
			/>

			<div class="videoTitle">
				<span>大喜利</span>
			</div>

			<youtube 
				video-id="OHu0MoHGESY"
			/>
		</section>
	</main>
</template>

<script>
import ContentsButton from "@/components/ContentsButton.vue"
export default {
	head() {
		return {
			title: "special",
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Roboto:400,700,900&display=swap&subset=japanese' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap' }
			]
		}
	},
	components: {
		ContentsButton
	}
}
</script>

<style scoped>
@media screen and (max-width: 800px) {
	.topTitle {
		font-size: 4rem;
	}

	.videoWrap {
		margin-left: 5%;
		width: 95%;
	}

}

@media screen and (min-width: 800px) {
	.topTitle {
		font-size: 6rem;
	}

	.videoWrap {
		margin-left: 15%;
		width: 85%;
	}
}
.topWrap {
	width: 100%;
	height: 90vh;
	background-color: #00afff;
	display: flex;
	align-items: center;
	justify-content: center;
}

.topTitle {
	color: white;
	font-style: italic;
}

.videoWrap {
	display: flex;
	flex-direction: column;
	margin-top: 10vh;
}

.videoTitle {
	font-size: 2rem;
	color: white;
	margin-bottom: 5vh;
}

.videoTitle > span {
	background-color: #595959;
	padding: 1rem;
}

</style>
<style>
@media screen and (max-width: 800px) {
	iframe {
		width: 90%;
	}
}
iframe {
	margin-bottom: 5vh;
}
</style>
