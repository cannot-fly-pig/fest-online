<template>
	<main>
		<div class="topWrap">
			<h1 class="muscleTitle">筋肉王</h1>
			<div class="muscleText">
				<span class="noWrap">今年も開催されます灘校筋肉王! </span> <br>
				灘校屈指のイイ筋肉の持ち主が集まるこの企画。今年はグランプリ制度をなくし、各出演者の味が出る形式になりました!! <br>
				<span class="noWrap">漢の中の漢をとくとご覧あれ</span>
			</div>
		</div>

		<div class="muscleImageWrap">
			<div class="sectionTitle">全体写真</div>
				<img class="zentaiImage" src="@/assets/image/muscle/zentai1.jpg" alt="">
				<img class="zentaiImage" src="@/assets/image/muscle/zentai2.jpg" alt="">
				<img class="zentaiImage" src="@/assets/image/muscle/zentai3.jpg" alt="">
				<img class="zentaiImage" src="@/assets/image/muscle/zentai4.jpg" alt="">
				<img class="zentaiImage" src="@/assets/image/muscle/zentai5.jpg" alt="">
				<img class="zentaiImage" src="@/assets/image/muscle/zentai6.jpg" alt="">

			<div class="sectionTitle">個人写真</div>
			<div class="muscleImage">
				<div>
					<div class="imageTitile">
						山縣肇
					</div>
					<div class="imageText">
						野球のために鍛えて手に入れたナチュラルボディです
					</div>
				</div>
				<img src="@/assets/image/muscle/yama1.jpg" alt="">
			</div>

			<div class="muscleImage">
				<div>
					<div class="imageTitile">
						堀川龍雲
					</div>
					<div class="imageText">
						去年よりかなり進化したと思います。
					</div>
				</div>
				<img src="@/assets/image/muscle/horikawa1.jpg" alt="">
			</div>

			<div class="muscleImage">
				<div>
					<div class="imageTitile">
						秋山慶一郎
					</div>
					<div class="imageText">
						バレーボール部主将 秋山慶一郎 昨年の筋肉王で決勝にあと一歩届かなかった悔しさをバネに、この１年間厳しいトレーニングを積んできました。灘校1の筋肉をお届けします！
					</div>
				</div>
				<img src="@/assets/image/muscle/akiyama1.jpg" alt="">
			</div>

			<div class="muscleImage">
				<div>
					<div class="imageTitile">
						中小司大五朗
					</div>
					<div class="imageText">
						毎日朝3時に起きて筋肉の調子を見る。そこから、7時まで筋トレをする。登校中も筋トレだ。満員電車は体幹トレーニングの場である。授業中もする。放課後は言うまでもない。家に帰ると筋トレ。一体何時間するのだろう。そこから深夜3時まで筋トレをしてねる。この先になにが見えるのだろう。
					</div>
				</div>
				<img src="@/assets/image/muscle/nakasyouji1.jpg" alt="">
			</div>
		</div>
	</main>
</template>
<script>
export default {
	head () {
		return {
			title: "筋肉王",
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@700&display=swap' },
			]
		}
	}
}
</script>
<style scoped>
@media screen and (max-width: 800px) {
	main {
		width: 100vw;
	}

	.topWrap {
		height: 90vh;
		background-image: url("~@/assets/image/muscle/flame.jpg");
	}

	.sectionTitle {
		font-size: 2rem;
		margin: 2rem 0;
	}

	.muscleTitle {
		font-size: 25vw;
	}

	.muscleText {
		margin-top: 10vh;
		width: 80%;
	}

	.muscleLogo {
		width: 80%;
	}

	.muscleImageWrap {
		width: 90vw;
		margin-left: 5vw;
		flex-direction: column;
		align-items: center;
	}

	.muscleImageWrap:last-child {
		padding-bottom: 10vh;
	}
	
	.imageTitile {
		margin-top: 10vh;
		font-size: 1.5rem;
	}

	.imageText {
		margin: 0.5rem 0;
	}

	.zentaiImage {
		width: 100%;
		margin-bottom: 2rem;
	}
}

@media screen and (min-width: 800px) {
	.topWrap {
		height: 90vh;
		background-image: url("~@/assets/image/muscle/flame.jpg");
	}

	.muscleTitle {
		font-size: 6rem;
	}

	.sectionTitle {
		width: 100%;
		font-size: 3rem;
		margin: 10vh 0;
		text-align: center;
		font-weight: bold;
	}

	.muscleLogo {
		width: 40%;
	}

	.muscleText {
		margin-top: 10vh;
		width: 40%;
		text-align: center;
		font-size: 1.2rem;
	}

	.noWrap {
		white-space: nowrap;
	}

	.arrow {
		display: none;
	}

	.muscleImageWrap {
		width: 80%;
		margin-left: 10vw;
		margin-right: 10vw;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.muscleImage {
		position: relative;
		width: 45%;
		min-height: 30vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 5vh;
	}

	.imageTitile {
		font-size: 1.5rem;
	}

	.imageText {
		margin: 0.5rem 0;
	}

	.zentaiImage {
		width: 48%;
		margin-bottom: 3rem;
	}

	.muscleImageWrap:last-child {
		padding-bottom: 10vh;
	}

}

main {
	background-color: #821a1b;
	color: white;
	font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
}

.imageTitile {
	font-weight: 600;
}

.sectionTitle {
	font-weight: 600;
}

.topWrap {
	width: 100%;
	background-size: cover;
	background-position: center center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.muscleText {
	font-weight: 600;
}

.muscleImageWrap {
	display: flex;
}

.muscleImage  img {
	width: 100%;
}

</style>
