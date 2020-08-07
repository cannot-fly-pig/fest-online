<template>
  <main>
	<!--
		<section class="sliderWrap">
		<img src="@/assets/image/index/koumon.jpg" alt="校門">
		</section>
		-->
		<section class="thanks">
		<div class="thanksText">
			灘校オンライン文化祭"vivid"、お楽しみいただけましたでしょうか。 <br>
			本日、8月7日をもちまして、コンテンツの公開期間は終了となります。
		</div>
		<div class="thanksText">
		オンライン文化祭は、新型コロナウイルス感染症の流行をうけて考案された、灘校史上初の試みであり、それゆえ多くのお客様にお楽しみいただけたことを大変嬉しく思います。このような情勢下でも、クラブ・サークルの展示やステージ企画などを通して灘校の雰囲気を存分に感じ取っていただける機会を設けられたことは、灘校のこれからの発展に必ず大きな意味を持ってくるものだと思います。	
		</div>
		<div class="thanksText">
		今回のオンライン文化祭は、一言で表せば生徒らの「意地」とも言うべきものでした。文化祭の実地開催中止には多くの灘校生がショックを受けました。クラブ・サークルによっては一年前から準備を始めるほどに、文化祭への意気込みには例年並々ならぬものがあったためです。やりきれない落胆の中、それでも披露したい努力の結晶があるという「意地」がオンライン文化祭を成功に導きました。
		</div>
		<div class="thanksText">
		結果として、オンライン文化祭は中高で開催される文化祭としておよそ最高潮の熱量と出力を誇ったと思います。そのような点で、今回の文化祭は例年と異なるアプローチでもって、閲覧者の皆様へ生徒らの確かな熱意をお伝えすることができたと、自信を持って言うことができます。
		</div>
		<div class="thanksText">
		現在は、厳しい状況下で日常を取り戻そうと懸命になるあまり摩耗して、徐々に活力を失っていくような、閉塞的な時流に向かいつつある時期なのかもしれません。そのような逆境の中で、灘校生の「意地」が生み出したこの文化祭をご覧になったことで、少しでも活力を取り戻していただけたならば幸いです。そして閲覧者の皆様に、今後も灘校生の活動を暖かく見守っていただけるとすれば、われわれにとってこれほどの幸せはありません。
		</div>
		<div class="thanksText">
		灘校オンライン文化祭"vivid"
		</div>
		</section>
	</main>
</template>

<script>
import ContentsButton from "@/components/ContentsButton.vue"
export default {
	head() {
		return {
			title: "灘校オンライン文化祭2020",
			titleTemplate: "",
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

	.ContentsButton {
		width: 100%;
		display: flex;
	}

	.surveyTitle {
		font-size: 2rem;
	}
	.surveyText {
		font-size: 1rem;
	}

	.surveyButtonWrap {
		font-size: 1.5rem;
	}

	.thanksText {
		width: 80%;
		margin-top: 2rem;
		line-height: 150%;
		font-size: 1rem;
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

	.ContentsButton {
		text-align: center;
	}

	.surveyTitle {
		font-size: 3rem;
	}

	.surveyText {
		font-size: 1.5rem;
	}

	.surveyButtonWrap {
		font-size: 2rem;
	}

	.thanksText {
		width: 80%;
		margin-top: 2rem;
		line-height: 150%;
		font-size: 1.2rem;
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
	background-image: url("~@/assets/image/index/welcome-bg.jpg");
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
	margin-bottom: 10vh;
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
.ContentsButton {
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.surveyWrap {
	width: 100%;
	padding-left: 10vw;
	padding-right: 10vw;
	color: #4d4d4d;
}

.surveyTitle {
	font-weight: 600;
}

.surveyButtonWrap {
	margin-top: 2rem;
	text-align: center;
	margin-bottom: 10vh;
}

.surveyButton > span {
	background-color: #00ADFC;
	padding: 0.5rem;
	border-radius: 5px;
}

.surveyButton:hover, .surveyButton:link, .surveyButton:visited, .surveyButton:active {
	color: white;
	text-decoration: none;
}

.spacer {
	height: 0;
	width: 30vw;
}

.videoWrap {
	display: flex;
	justify-content: center;
	align-items: center;
}

.thanks {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5vh;
	padding-bottom: 15vh;
	background-image: url("~@/assets/image/top.png");
	background-size: cover;
	background-position: center;
}

</style>

<style>
@media screen and (max-width: 800px) {
	iframe {
		height: 30vh;
	}
}
</style>
