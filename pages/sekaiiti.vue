<template>
<main>
	<section class="sekaiitiWrap">
		<h1 class="sekaiitiTitle">世界一受けたい灘校生の授業</h1>
		<img class="sekaiitiImage" src="@/assets/image/sekaiiti/sekaiiti.jpg" alt="世界一受けたい灘校生の授業の画像">
		<div class="sekaiitiText">
			た○よびやスタ○プといった映像授業が話題ですが、灘校生も映像授業、始めます! <br>
			「世界一受けたい灘校生の授業」では、その道を極める文化部の生徒らによる白熱授業をお届けします!ぜひご覧ください!
		</div>

		<youtube
			video-id="MFzy8xmiqnE"
		/>
		<div class="videoTitle">
			アンモニアを様々な視点から見る
		</div>
		<youtube
			video-id="cxoE4QNmYRY"
		/>
		<div class="videoTitle">
			遣隋使のはなし
		</div>
		<youtube
			video-id="IBYj5pw7bW0"
		/>
		<div class="videoTitle">
			ゴールドラッシュ!
		</div>
		<youtube
			video-id="9NFIoN-5Qwk"
		/>
		<div class="videoTitle">
			文藝同好会
		</div>

		<youtube
			video-id="qJwiC9qTrWI"
		/>
		<div class="videoTitle">
		グラフ理論をかじった一筆書きの証明
		</div>
		<youtube
			video-id="FCEuUiQBFY0"
		/>
		<div class="videoTitle">
		阪急 vs 阪神 ～昨日の敵は今日の友～
		</div>
		<youtube
			video-id="TlEJIwhX8aI"
		/>
		<div class="videoTitle">
			こころのケアの最先端をブッダに学ぶ
		</div>


	</section>
</main>
</template>
<script>
export default {
	head() {
		return {
			title: "世界一受けたい灘校生の授業",
			meta: [
				{ hid: 'description', name: 'description', content: 'た○よびやスタ○プといった映像授業が話題ですが、灘校生も映像授業、始めます!「世界一受けたい灘校生の授業」では、その道を極める文化部の生徒らによる白熱授業をお届けします!ぜひご覧ください!' },
				{ hid: 'og:description', property: 'og:description', content: 'た○よびやスタ○プといった映像授業が話題ですが、灘校生も映像授業、始めます!「世界一受けたい灘校生の授業」では、その道を極める文化部の生徒らによる白熱授業をお届けします!ぜひご覧ください!' },
				{ hid: 'og:url', property: 'og:url', content: 'https://fest.nada-sc.jp/2020/sekaiiti' },
				{ hid: 'og:title', property: 'og:title', content: '世界一受けたい灘校生の授業 | 灘校オンライン文化祭2020' },
				{ hid: 'og:image', property: 'og:image', content: 'https://fest.nada-sc.jp/2020/sekaiitifinal.png' },
			],
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
	.sekaiitiTitle {
		font-size: 1rem;
	}

	.sekaiitiText {
		font-size: 1.0rem;
		width: 80vw;
	}

	.sekaiitiImage {
		width: 80vw;
	}

	iframe {
		max-height: 40vh;
	}

	.dainibu {
		font-size: 1rem;
	}
}

@media screen and (min-width: 800px) {
	.sekaiitiTitle {
		font-size: 3rem;
	}

	.sekaiitiText {
		font-size: 1.2rem;
		width: 60vw;
	}

	.sekaiitiImage {
		width: 60vw;
	}

	.videoTitle {
		font-size: 1.2rem;
	}

	.dainibu {
		font-size: 1.5rem;
	}
}


.sekaiitiWrap {
	width: 100%;
	min-height: 100vh;
	background-color: #e6e6e6;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #333333;
}

.sekaiitiTitle {
	margin-top: 10vh;
	margin-bottom: 10vh;
}

.sekaiitiImage {
	height: auto;
	border:solid white 1px;
	margin-bottom: 10vh;
}

.sekaiitiText {
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

.dainibu {
	text-align: center;
	margin-bottom: 10vh;
}
</style>
