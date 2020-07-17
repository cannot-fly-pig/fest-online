<template>
<main>
	<section class="nedWrap">
		<h1 class="nedTitle">NED</h1>
		<img class="nedImage" src="@/assets/image/ned/NEDfinal.png" alt="nedの画像">
		<div class="nedText">
			各界の一流人が披露する驚異のプレゼンテーション、「TED」。 <br>
			「NED」はその灘校版です。各方面で活躍する灘校生による渾身のプレゼンを是非ご覧下さい!
		</div>

		<youtube
			video-id="t5yQxbCanE0"
		/>
		<div class="videoTitle">
			<span class="noWrap">Ryuga Fujie　</span><span class="noWrap"> 直走路</span>
		</div>
		<youtube
			video-id="psWbWwCURIg"
		/>
		<div class="videoTitle">
			<span class="noWrap">Kousuke Morita　</span><span class="noWrap">下手の横好き方法論</span>
		</div>
		<youtube
			video-id="LoxA5kp2dNk"
		/>
		<div class="videoTitle">
			<span class="noWrap">Shun Hokazono　</span><span class="noWrap">パッシブなリーダーを目指して</span>
		</div>
		<youtube
			video-id="48k81x71BGs"
		/>
		<div class="videoTitle">
			<span class="noWrap">Mamoru Tanabe　</span><span class="noWrap">クリエイティブになるということ</span>
		</div>
		<youtube
			video-id="t1WfzOMapro"
		/>
		<div class="videoTitle">
			<span class="noWrap">Hikaru Muto　</span><span class="noWrap">シンギュラリティ前夜の今こそ</span>
		</div>
	</section>
</main>
</template>
<script>
export default {
	head() {
		return {
			title: "NED",
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Roboto:400,700,900&display=swap&subset=japanese' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap' }
			]

		}
	}
}
</script>
<style scoped>
@media screen and (max-width: 800px) {
	.nedText {
		font-size: 1.0rem;
		width: 80vw;
	}

	.nedImage {
		width: 80vw;
	}

	iframe {
		max-height: 40vh;
	}
}

@media screen and (min-width: 800px) {
	.nedText {
		font-size: 1.2rem;
		width: 60vw;
	}

	.nedImage {
		width: 60vw;
	}

	.videoTitle {
		font-size: 1.2rem;
	}
}


.nedWrap {
	width: 100%;
	min-height: 100vh;
	background-color: #b12211;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
}

.nedTitle {
	font-size: 3rem;
	margin-top: 10vh;
	margin-bottom: 10vh;
}

.nedImage {
	height: auto;
	border:solid white 1px;
	margin-bottom: 10vh;
}

.nedText {
	line-height: 200%;
	margin-bottom: 10vh;
}

iframe {
	max-width: 80%;
}

.videoTitle {
	max-width: 80vw;
	margin-top: 3vh;
	margin-bottom: 10vh;
	text-align: center;
} 

.noWrap {
	white-space: nowrap;
}
</style>
