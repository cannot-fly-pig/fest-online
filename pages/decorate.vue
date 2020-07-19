<template>
  <main>
		<section class="topWrap">
		<img src="@/assets/image/decorate/BENADA.png" alt="BENADA">
		<h1 class="topText">装飾作品</h1>
		</section>
		<section class="mainContents">
			<p>
				文化委員会装飾課では、例年主に春休み以降の時期を使って文化祭当日の校内を彩る作品を制作しています。
				高校棟前に飾られた大きな垂れ幕、中学棟の階段、高校棟の階段の壁に貼られた様々な絵、中庭ステージの背景、廊下の窓に貼られたステンドグラスなど、その内容は多岐にわたっています。
			</p>
			<p>
			しかし、今年は新型コロナウイルスの影響で文化祭の現地開催は中止になり、わずかな時間を駆使して制作した作品も意味を成さなくなってしまいました。そこで、このオンライン文化祭では今年制作された少しの作品を公開すると共に、昨年・一昨年の文化祭で実際に展示された作品の一部を再度公開することで、文化祭現地開催時の装飾の雰囲気を少しでも感じ取って頂けたらなと思います。
			</p>

			<div class="imageTitle">
				<span>部署1(垂れ幕)</span>
			</div>

			<div class="imageWrap">
				<img src="@/assets/image/decorate/INFINITY_1.jpg" alt="INFINITY垂れ幕">
				INFINITY 垂れ幕
			</div>
			<div class="imageWrap">
				<img src="@/assets/image/decorate/SAILAWAY_1.jpg" alt="SAILAWAY垂れ幕">
				SAIL AWAY 垂れ幕
			</div>

			<div class="imageTitle">
				<span>部署2(中学棟)</span>
			</div>

			<div class="imageWrap">
				<img src="@/assets/image/decorate/INFINITY_2.jpg" alt="INFINITYちはやふる">
				INFINITY ちはやふる
			</div>
			<div class="imageWrap">
				<img src="@/assets/image/decorate/SAILAWAY_2.jpg" alt="SAILAWAY約束のネバーランド">
				SAIL AWAY 約束のネバーランド
			</div>

			<div class="imageTitle">
				<span>部署3(高校棟)</span>
			</div>

			<div class="imageWrap">
				<img src="@/assets/image/decorate/INFINITY_3.jpg" alt="INFINITY高校棟壁面">
				INFINITY 高校棟壁面
			</div>
			<div class="imageWrap">
				<img src="@/assets/image/decorate/SAILAWAY_3.jpg" alt="SAILAWAY約束のネバーランド">
				SAIL AWAY 垂れ幕
			</div>

			<div class="imageTitle">
				<span>部署4(立体)</span>
			</div>

			<div class="imageWrap">
				<img src="@/assets/image/decorate/INFINITY_4.jpg" alt="INFINITY垂れ幕">
				INFINITY ステージ
			</div>

			<div class="imageWrap">
				<img src="@/assets/image/decorate/SAILAWAY_4.jpg" alt="SAILAWAY約束のネバーランド">
				SAIL AWAY ステージ
			</div>

			<div class="imageWrap">
				<img src="@/assets/image/decorate/BENADA_1.jpg" alt="SAILAWAY約束のネバーランド">
			</div>

			<div class="imageWrap">
				<img src="@/assets/image/decorate/BENADA_2.jpg" alt="SAILAWAY約束のネバーランド">
			</div>


			<div style="text-align: center; width: 100%;">vivid BE NADA</div>

			<div class="imageTitle">
				<span>部署5(ステンドグラス)</span>
			</div>

			<div class="imageWrapMini">
				<img src="@/assets/image/decorate/INFINITY_5.jpg" alt="INFINITY垂れ幕">
				INFINITY 金閣寺
			</div>
			<div class="imageWrapMini">
				<img src="@/assets/image/decorate/SAILAWAY_5.jpg" alt="SAILAWAY約束のネバーランド">
				SAIL AWAY タージマハル
			</div>
			<div class="imageWrapMini">
				<img src="@/assets/image/decorate/vivid_5.jpg" alt="SAILAWAY約束のネバーランド">
				vivid テーマ作品
			</div>

		</section>
	</main>
</template>

<script>
import ContentsButton from "@/components/ContentsButton.vue"
export default {
	head() {
		return {
			title: "装飾",
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Roboto:400,700,900&display=swap&subset=japanese' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap' }
			]
		}
	},
}
</script>

<style scoped>
@media screen and (max-width: 800px) {
	.imageTitle {
		font-size: 1.5rem;
	}

	.mainContents {
		justify-content: center;
		align-items: center;
	}

	.imageWrap {
		max-height: 60vh;
		width: 80%;
		font-weight: 500;
	}

	.imageWrapMini {
		max-height: 60vh;
		width: 80%;
	}

}

@media screen and (min-width: 800px) {
	.mainContents > p {
		font-size: 1.3rem;
	}

	.mainContents {
		justify-content: space-between;
	}

	.imageTitle {
		font-size: 2rem;
	}

	.imageWrap {
		max-height: 80vh;
		width: 45%;
	}

	.imageWrapMini {
		max-height: 80vh;
		width: 30%;
	}

}

.topWrap {
	position: relative;
	width: 100%;
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.topWrap > img  {
	max-height: 100%;
	max-width: 100%;
}

.topText {
	position: absolute;
	font-size: 3rem;
	left: 15vw;
	bottom: 10vh;
	font-weight: 600;
	color: #4d4d4d;
}

.mainContents {
	margin: 10vh 10%;
	color: #4d4d4d;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 80%;
}

.mainContents > p {
	line-height: 200%;
	margin-bottom: 5vh;
}

.imageTitle {
	width: 100%;
	line-height: 150%;
	font-weight: 600;
	color: white;
	margin-top: 10vh;
}

.imageTitle > span {
	background-color: #333333;
	padding: 0.5rem;
}

.imageWrap {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 5vh;
}

.imageWrapMini {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 5vh;
}

.imageWrap > img {
	max-width: 100%;
	max-height: 100%;
	margin-bottom: 1rem;
}

.imageWrapMini > img {
	max-width: 100%;
	max-height: 100%;
	margin-bottom: 1rem;
}
</style>
