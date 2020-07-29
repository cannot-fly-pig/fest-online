<template>
<main>
	<section class="topWrap">
		<img class="topImage" src="@/assets/image/n1/N1logo.png" alt="n1ロゴ">
		<div class="topMoji">
			<div class="topText">
				2020年5月、文化祭の中止が発表されてもなお、灘校生の漫才への情熱は消えることはなかった…！今年も熱き精鋭8組が、スクリーンの向こう側から笑いの渦を引き起こす！！！
			</div>
			<!--
			<div class="touhyouKotira">
				<nuxt-link to="#touhyou">↓投票はこちら(7/24まで)</nuxt-link>
			</div>
			-->
			<div class="touhyouKotira">
				<nuxt-link to="#touhyou">結果はこちら</nuxt-link>
			</div>
		</div>
	</section>

	<section class="videoWrap">
		<div class="sectionWrap">
			<img src="@/assets/image/n1/obi.png" alt="背景" class="sectionObi">
			<div class="sectionTitle">動画</div>
		</div>

		<div class="spacer"></div>

		<div class="video">
			<youtube 
				video-id="JC08DVUB9X0"
			/>
			No.1 どべっこう
		</div>
		<div class="video">
			<youtube 
				video-id="qbIl8ztVf2o"
			/>
			No.2 おかゆ
		</div>
		<div class="video">
			<youtube 
				video-id="-WAUU9L5lrY"
			/>
			No.3 横綱予備軍
		</div>
		<div class="video">
			<youtube 
				video-id="5i7zCG-rDVo"
			/>
			No.4 骨太
		</div>
		<div class="video">
			<youtube 
				video-id="EtcmJ03dAVY"
			/>
			No.5 チェンジアップ
		</div>
		<div class="video">
			<youtube 
				video-id="Uh2gKNJHIuM"
			/>
			No.6 チップイン
		</div>
		<div class="video">
			<youtube 
				video-id="2bnUSyxNVmE"
			/>
			No.7 逆立ちステップ
		</div>
		<div class="video">
			<youtube 
				video-id="lLqU_MrO1wE"
			/>
			No.8 マーボーなすび
		</div>
	</section>

	<section class="entryList">
		<div class="sectionWrap">
			<img src="@/assets/image/n1/obi.png" alt="背景" class="sectionObi">
			<div class="sectionTitle">出演者</div>
		</div>
		<div class="spacer"></div>
		<div class="entry">
			<img class="entryImage" src="@/assets/image/n1/entry1.png" alt="どべっこう">
			<div class="entryText">
				<span>No.1 どべっこう</span> <br>
				襲来
			</div>
		</div>
		<div class="entry">
			<img class="entryImage" src="@/assets/image/n1/entry2.png" alt="おかゆ">
			<div class="entryText">
				<span>No.2 おかゆ</span> <br>
				オンライン･ドネシア <br>
				こら！お母さんの通帳で遊ばないの！
			</div>
		</div>
		<div class="entry">
			<img class="entryImage" src="@/assets/image/n1/entry3.png" alt="横綱予備軍">
			<div class="entryText">
				<span>No.3 横綱予備軍</span> <br>
				ボケという自然薯を鋭いツッコミですり下ろし極上のとろろ作ります
			</div>
		</div>
		<div class="entry">
			<img class="entryImage" src="@/assets/image/n1/entry4.png" alt="骨太">
			<div class="entryText">
				<span>No.4 骨太</span> <br>
				HAJISHIRAZU
			</div>
		</div>
		<div class="entry">
			<img class="entryImage" src="@/assets/image/n1/entry5.png" alt="チェンジアップ">
			<div class="entryText">
				<span>No.5 チェンジアップ</span> <br>
				この緩急について来い!!
			</div>
		</div>
		<div class="entry">
			<img class="entryImage" src="@/assets/image/n1/entry6.png" alt="チップイン">
			<div class="entryText">
				<span>No.6 チップイン</span> <br>
				校内では本田翼の次に人気があります、チップインです！
			</div>
		</div>
		<div class="entry">
			<img class="entryImage" src="@/assets/image/n1/entry7.png" alt="逆立ちステップ">
			<div class="entryText">
				<span>No.7 逆立ちステップ</span> <br>
				一撃必笑！ <br>
				狙え、笑いのグランドスラム！
			</div>
		</div>
		<div class="entry">
			<img class="entryImage" src="@/assets/image/n1/entry8.png" alt="マーボーなすび">
			<div class="entryText">
				<span>No.8 マーボーなすび</span> <br>
				 笑
			</div>
		</div>
	</section>

	<section class="result">
		<div class="sectionWrap">
			<img src="@/assets/image/n1/obi.png" alt="背景" class="sectionObi">
			<div class="sectionTitle">結果</div>
		</div>

		<div class="spacer"></div>
		<img class="resultImage" :src="resultImage" alt="">
		<div class="resultText">
			※審査員について <br>
			歴代『N-1グランプリ』の猛者6人に、オンラインでの審査をお願いしました。
		</div>
		<div class="resultText">
			※得点について <br>
			審査員6人が各コンビ100点満点で付けたのち、一般投票で各コンビの得表率（百分率）を四捨五入したものを加え、合計得点としました。
		</div>
		<div class="resultText">
			※順位について <br>
			4位『マーボーなすび』，5位『骨太』，6位『どべっこう』の3組は整数値では同点ですが、端数を考慮して順位をつけました
		</div>

	</section>

<!---
	<section class="touhyou">
		<div class="sectionWrap" id="touhyou">
			<img src="@/assets/image/n1/obi.png" alt="背景" class="sectionObi">
			<div class="sectionTitle">投票</div>
		</div>

		<div class="spacer"></div>

		<div class="touhyouWrap">
			面白いと思ったコンビに投票しよう!!
			<a class="touhyouButton" href="https://forms.gle/5d99aZir8Atbaqnj6" target="_blank"><span>投票する</span></a>
		</div>
	</section>
	-->
</main>
</template>
<script>
export default {
	head() {
		return {
			title: "N-1グランプリ",
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Roboto:400,700,900&display=swap&subset=japanese' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap' }
			]

		}
	},
	data() {
		return {
			resultImage: require("@/assets/image/n1/resultPC.jpg")
		}
	},
	mounted() {
		console.log(window.innerWidth)
		if (window.innerWidth <= 800) {
			this.resultImage = require("@/assets/image/n1/resultMobile.png")
		}
	}
}
</script>
<style scoped>
@media screen and (max-width: 800px){
	.topWrap {
		flex-direction: column;
		justify-content: center;
	}

	.topImage {
		max-width: 60%;
		max-height: 50%;
	}

	.topMoji {
		width: 80%;
	}

	.sectionWrap {
		left: -1rem;
	}

	.entryList {
		margin-left: 5%;
		width: 95%;
	}

	.entry {
		width: 95%;
		margin-bottom: 10vh;
	}

	.entryText {
		font-size: 1.1rem;
	}

	.touhyou {
		margin-left: 5%;
		width: 95%;
	}

	.result {
		margin-left: 5%;
		width: 95%;
	}

	.sectionTitle {
		font-size: 2rem;
	}

	.video {
		width: 90%;
	}

	.resultImage {
		margin-left: 5%;
	}
	.resultText {
		margin-left: 10%;
		font-size: 0.8rem;
	}
}

@media screen and (min-width: 800px){
	.topWrap {
		flex-direction: row;
		justify-content: space-around;
	}

	.topImage {
		max-width: 60%;
		max-height: 80%;
	}

	.topText {
		font-size: 1.3rem;
	}

	.touhyouKotira {
		font-size: 1.3rem;
	}

	.topMoji {
		width: 40%;
	}
	.entryList {
		margin-left: 10%;
		width: 90%;
	}

	.sectionWrap {
		left: -1rem;
	}

	.entry {
		width: 45%;
	}

	.sectionTitle {
		font-size: 2.5rem;
	}

	.video {
		width: 45%;
	}

	.touhyouWrap {
		font-size: 1.5rem;
	}
	.resultImage {
		margin-left: 10%;
	}
	.resultText {
		margin-left: 15%;
	}
}

.topWrap {
	height: 90vh;
	width: 100%;
	background-color: #532318;
	display: flex;
	align-items: center;
}

.topText {
	width: 100%;
	margin-top: 5vh;
	color: white;
}

.topMoji {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.videoWrap {
	width: 100%;
	margin-top: 10vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
}

.video {
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-bottom: 1.5rem;
}


.touhyouKotira {
	margin-top: 1rem;
}

.sectionWrap {
	position: absolute;
	height: 5vh;
	width: 80%;
	margin-bottom: 5vh;
}

.sectionObi {
	position: absolute;
	top: 50%;
	left: 0%;
	transform: translateY(-50%);
	height: 6.5rem;
	width: 15rem;
}

.sectionTitle {
	position: absolute;
	top: 50%;
	left: 1.5rem;
	transform: translateY(-50%);
	width: 100%;
	font-weight: bold;
}

.entryList {
	margin-top: 10vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
}

.entry {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.entryImage {
	width: 45%;
	margin-right: 2%;
}

.entryText {
	width: 53%;
}

.entryText > span {
	font-weight: bold;
}

.touhyou {
	margin-top: 10vh;
}

.result {
	margin-top: 10vh;
}

.touhyouWrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.touhyouButton {
	margin-top: 1.5rem;
	color: white;
	margin-bottom: 10vh;
}

.touhyouButton > span {
	background-color: #542419;
	padding: 0.5rem;
	border-radius: 5px;
}

a:hover, a:link, a:visited, a:active {
	color: #F7931E;
	text-decoration: none;
}

.spacer {
	height: 10vh;
	width: 90%;
}

.resultImage {
	width: 80%;
}

.resultText {
	width: 80%;
	line-height: 120%;
	margin-bottom: 1rem;
}

</style>
<style>

@media screen and (max-width: 800px) {
	iframe {
		height: 30vh;
	}
}
iframe {
	width: 100%;
	margin-bottom: 1rem;
}
</style>
