<template>
<main>
	<section class="nedWrap">
		<h1 class="nedTitle">NED</h1>
		<img class="nedImage" src="@/assets/image/NEDfinal.png" alt="nedの画像">
		<div class="nedText">
			各界の一流人が披露する驚異のプレゼンテーション、「TED」。 <br>
			「NED」はその灘校版です。各方面で活躍する灘校生による渾身のプレゼンを是非ご覧下さい!
		</div>

		<youtube
			video-id="t5yQxbCanE0"
		/>
		<div class="videoTitle">
			Ryuga Fujie　直走路
		</div>
		<youtube
			video-id="t5yQxbCanE0"
		/>
		<div class="videoTitle">
			Kousuke Morita　下手の横好き方法論
		</div>
		<youtube
			video-id="t5yQxbCanE0"
		/>
		<div class="videoTitle">
			Shun Hokazono　パッシブなリーダーを目指して
		</div>
		<youtube
			video-id="t5yQxbCanE0"
		/>
		<div class="videoTitle">
			Mamoru Tanabe　クリエイティブになるということ
		</div>
		<youtube
			video-id="t5yQxbCanE0"
		/>
		<div class="videoTitle">
			Hikaru Muto　シンギュラリティ前夜の今こそ
		</div>
	</section>
</main>
</template>

<style>
@media screen and (max-width: 800px) {
	.nedText {
		font-size: 1.0rem;
	}
	iframe {
		max-height: 40vh;
	}
}

@media screen and (min-width: 800px) {
	.nedText {
		font-size: 1.2rem;
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
	width: 60vw;
	heighT: auto;
	border:solid white 1px;
	margin-bottom: 10vh;
}

.nedText {
	width: 60vw;
	line-height: 200%;
	margin-bottom: 10vh;
}

iframe {
	max-width: 80%;
}

.videoTitle {
	margin-top: 3vh;
	margin-bottom: 10vh;
}
</style>
