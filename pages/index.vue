<template>
  <div>
		<section class="sliderWrap">
		<img src="@/assets/image/koumon.jpg" alt="校門">
		</section>
		<section class="welcomeWrap">
			<h1 class="welcomeTitle">Welcome!</h1>
			<div class="welcomeText">
				灘校オンライン文化祭は、新型コロナ感染症の流行により <br>
				中止を余儀なくされた灘校文化祭のコンテンツを <br>
				オンラインで発表する初の試みです。
			</div>
			<ViewmoreButton />
		</section>
		<section class="contentsWrap">
			<h1 class="contentsTitle">Contents</h1>
			<div class="contentsButtonWrap">
				<ContentsButton
					buttonColor="#fff9e1"
					buttonHeight="40vh"
					buttonWidth="30vw"
					buttonHref="/"
				>
					クラブ・サークル企画
				</ContentsButton>
				<ContentsButton
					buttonColor="#efe9ff"
					buttonHeight="40vh"
					buttonWidth="30vw"
					buttonHref="/"
				>
					ステージ企画
				</ContentsButton>
				<ContentsButton
					buttonColor="#dbfffd"
					buttonHeight="40vh"
					buttonWidth="30vw"
					buttonHref="/"
				>
					装飾作品
				</ContentsButton>
				<ContentsButton
					buttonColor="#ffe5e5"
					buttonHeight="40vh"
					buttonWidth="30vw"
					buttonHref="/"
				>
					Special
				</ContentsButton>
			</div>
			<ViewmoreButton style="margin-right: auto; margin-left: auto; margin-bottom: 10vh;" />
		</section>
		<section class="newsWrap">
			<h1 class="newsTitle">News</h1>
			<div class="newsList">
			</div>
		</section>
		<section class="pvWrap">
			<h1 class="pvTitle">学校PV</h1>
			<div class="imageWrap">
				<img src="@/assets/image/pv-bg.jpg" alt="pv公開時期">
				<div class="pvText">
					第二期(7月18,19日)公開予定
				</div>
			</div>
		</section>
		<section class="nextYear">
			<img src="@/assets/image/nextYear.png" alt="来年は灘校でお待ちしております。">
		</section>
	</div>
</template>

<script>
export default {
	created () {
		const release = new Date(2020, 6, 11, 14, 0)
		const now = new Date()
	}
}
</script>

<style>
.sliderWrap {
	width: 100%;
	height: 90vh;
	background-color: #00adfc;
	display: flex;
	align-items: center;
	justify-content: center;
}

.sliderWrap > img  {
	max-height: 100%;
	max-width: 100%;
}

.welcomeWrap {
	width: 100%;
	min-height: 85vh;
	padding-left: 5vw;
	padding-right: 5vw;
	padding-top: 25vh;
	margin-bottom: 10vh;
	color: #4d4d4d;
	background-image: url("~@/assets/image/welcome-bg.jpg");
	background-repeat: no-repeat;
	background-size: 70vw auto;
	background-position: 30vw top;
}

.welcomeTitle {
	font-size: 3rem;
	margin-bottom: 5vh;
	font-weight: 900;
}

.welcomeText {
	width: 60vw;
	font-size: 1.2rem;
	line-height: 200%;
	margin-bottom: 5vh;
	font-weight: 700;
}

.contentsWrap {
	width: 100%;
	min-height: 100vh;
	padding-left: 10vw;
	padding-right: 10vw;
	color: #4d4d4d;
}

.contentsTitle {
	font-size: 3rem;
	margin-top: 5vh;
	margin-bottom: 5vh;
	font-weight: 900;
}

.contentsButtonWrap {
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: space-around;
	margin-bottom: 5vh;
}

.contentsButtonWrap > * {
	margin-bottom: 5vh;
}

.newsWrap {
	width: 100%;
	height: 100vh;
	padding-left: 10vw;
	padding-right: 10vw;
	background-color: #eeeeee;
}

.newsTitle {
	font-size: 2rem;
	color: #333333;
	padding-top: 5vh;
	padding-bottom: 5vh;
	text-align: center;
}

.newsList {
	display: flex;
	flex-direction: column;
}

.pvWrap {
	width: 100%;
	padding-left: 10vw;
	padding-right: 10vw;
	color: #4d4d4d;
	margin-bottom: 20vh;
}

.pvTitle {
	font-size: 3rem;
	margin-top: 5vh;
	margin-bottom: 5vh;
	font-weight: 700;
}

.imageWrap {
	text-align: center;
	position: relative;
}

.imageWrap img {
	width: 60vw;
}

.pvText {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
	color: white;
	font-size: 2rem;
}

.nextYear {
	width: 100%;
}

.nextYear > img {
	width: 100%;
}
</style>
