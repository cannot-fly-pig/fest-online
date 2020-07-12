<template>
  <div>
		<section class="sliderWrap">
		<img src="@/assets/image/koumon.jpg" alt="校門">
		</section>
		<section class="welcomeWrap" id="welcome">
			<h1 class="welcomeTitle">Welcome!</h1>
			<div class="welcomeText">
				灘校オンライン文化祭は、新型コロナ感染症の流行により <br>
				中止を余儀なくされた灘校文化祭のコンテンツを <br>
				オンラインで発表する初の試みです。
			</div>
		</section>
		<section class="contentsWrap">
			<h1 class="contentsTitle">Contents</h1>
			<div class="contentsButtonWrap">
				<ContentsButton
					buttonImage="/_nuxt/assets/image/bushiBG.png"
					textColor="black"
					buttonHeight="40vh"
					buttonWidth="30vw"
					buttonHref="/bushi"
				>
					クラブ・サークル企画
				</ContentsButton>
				<ContentsButton
					buttonImage="/nedButton.png"
					textColor="white"
					buttonHeight="40vh"
					buttonWidth="30vw"
					buttonHref="/ned"
				>
					NED
				</ContentsButton>
				<ContentsButton
					buttonColor="#efe9ff"
					textColor="black"
					buttonHeight="40vh"
					buttonWidth="30vw"
					buttonHref="/"
				>
					ステージ企画 <br>
					coming soon
				</ContentsButton>
				<ContentsButton
					buttonColor="#dbfffd"
					textColor="black"
					buttonHeight="40vh"
					buttonWidth="30vw"
					buttonHref="/"
				>
					装飾作品 <br>
					coming soon
				</ContentsButton>
			</div>
		</section>
		<!--
		<section class="newsWrap">
			<h1 class="newsTitle">News</h1>
			<div class="newsList">
			</div>
		</section>
		-->
		<section class="pvWrap">
			<h1 class="pvTitle">学校PV</h1>
			<div class="imageWrap">
				<img src="@/assets/image/pv-bg.jpg" alt="pv公開時期">
				<div class="pvText">
					<span class="noWrap">第二期(7月18,19日)</span> <br>
					<span class="noWrap">公開予定</span>
				</div>
			</div>
		</section>
		<section class="nextYear">
			<img src="@/assets/image/nextYear.png" alt="来年は灘校でお待ちしております。">
		</section>
	</div>
</template>

<script>
import ContentsButton from "@/components/ContentsButton.vue"
export default {
	components: {
		ContentsButton
	}
}
</script>

<style>
@media screen and (max-width: 800px) {
	.welcomeWrap {
		background-size: 80vw auto;
		background-position: 30vw 10vh;
		padding-top:10vh;
		min-height: 40vh;
	}

	.welcomeTitle {
		font-size: 2rem;
	}

	.welcomeText {
		width: 80vw;
		font-size: 1rem;
	}

	.pvTitle {
		font-size: 2rem;
	}
	.pvText {
		font-size: 1.3rem;
	}

	.imageWrap img {
		width: 80vw;
	}
}

@media screen and (min-width: 800px) {
	.welcomeWrap {
		padding-top: 25vh;
		background-size: 70vw auto;
		background-position: 30vw top;
		min-height: 85vh;
	}

	.welcomeTitle {
		font-size: 3rem;
	}

	.welcomeText {
		width: 60vw;
		font-size: 1.2rem;
	}
	.pvTitle {
		font-size: 3rem;
	}
	.pvText {
		font-size: 2rem;
	}

	.imageWrap img {
		width: 60vw;
	}
}
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
	padding-left: 5vw;
	padding-right: 5vw;
	margin-bottom: 10vh;
	color: #4d4d4d;
	background-image: url("~@/assets/image/welcome-bg.jpg");
	background-repeat: no-repeat;
}

.welcomeTitle {
	margin-bottom: 5vh;
	font-weight: 900;
}

.welcomeText {
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
	margin-top: 5vh;
	margin-bottom: 5vh;
	font-weight: 700;
}

.imageWrap {
	text-align: center;
	position: relative;
}


.pvText {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
	color: white;
}

.nextYear {
	width: 100%;
}

.nextYear > img {
	width: 100%;
}

.noWrap {
	white-space: nowrap;
}
</style>
