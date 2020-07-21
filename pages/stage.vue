<template>
	<main>
		<div class="topWrap">
			<h1 class="topTitle">
				<span>ステージ企画</span>
			</h1>
			<div class="topText">
				<span>
				毎年、ODORIBA, N-1グランプリ, Ms.コンテストなど、名物企画が揃い踏みのステージ。今年はその様子を直接お見せすることはできませんが、個性豊かな企画たちが、あなたへ画面越しに熱を届け、オンライン文化祭を彩ります！
			</span>
			</div>
		</div>

		<div class="stageContentsWrap">
			<div class="stageContents">
				<ContentsButton
					buttonImage="/2020/ODORIBA.jpg"
					textColor="black"
					buttonHeight="40vh"
					buttonWidth="100%"
					buttonHref="/odoriba"
				>
				</ContentsButton>
				ODORIBA
			</div>
			<div class="stageContents">
				<ContentsButton
					buttonImage="/2020/muscle.jpg"
					textColor="black"
					buttonHeight="40vh"
					buttonWidth="100%"
					buttonHref="/muscle"
				>
				</ContentsButton>
				筋肉王
			</div>
			<div class="stageContents">
				<ContentsButton
					buttonImage="/2020/bijyokon.jpg"
					buttonColor="#efe9ff"
					textColor="black"
					buttonHeight="40vh"
					buttonWidth="100%"
					buttonHref="/bijokon"
				>
				</ContentsButton>
				Ms.コンテスト
			</div>
			<div class="stageContents">
				<ContentsButton
					buttonImage="/2020/N1.jpg"
					buttonColor="#efe9ff"
					textColor="black"
					buttonHeight="40vh"
					buttonWidth="100%"
					buttonHref="/n1"
				>
				</ContentsButton>
				N-1グランプリ
			</div>

			<div class="stageContents">
				<ContentsButton
					buttonImage="/2020/special.png"
					textColor="black"
					buttonHeight="40vh"
					buttonWidth="100%"
					buttonHref="/special"
				>
				</ContentsButton>
				special
			</div>

			<div class="stageContents">
			</div>

		</div>
	</main>
</template>

<script>
import ContentsButton from "@/components/ContentsButton.vue"
export default {
	components: {
		ContentsButton
	},
	head() {
		return {
			title: "ステージ企画",
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Roboto:400,700,900&display=swap&subset=japanese' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap' }
			]

		}
	}
}
</script>

<style scoped>
@media screen and (max-width: 800px){
	.topWrap {
		background-image: url(/2020/stageBG.jpg);
	}

	.topTitle {
		left: 1rem;
	}
	.topText {
		left: 1rem;
		top: 45%;
		width: 80%;
	}
	.stageContentsWrap {
		width: 80%;
		margin: 0 10%;
	}

	.stageContents {
		width: 100%;
	}

}

@media screen and (min-width: 800px) {
	.topWrap {
		background-image: url(/2020/stageBG-pc.jpg);
	}
	.topTitle {
		left: 5rem;
		font-size: 3rem;
	}
	.topText {
		left: 5rem;
		top: 55%;
		width: 50%;
	}
	.stageContentsWrap {
		justify-content: space-around;
		align-items: space-around;
		width: 80%;
		margin: 0 10%;
	}

	.stageContents {
		width: 50%;
	}
}

.topWrap {
	position: relative;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 90vh;
}

.topTitle {
	position: absolute;
	top: 30%;
}

.topText {
	position: absolute;
	font-weight: bold;
	background-color: white;
}

.topTitle > span {
	padding: 1rem;
	background-color: white;
}

.topText > span {
	padding: 0.5rem;
}

.stageContentsWrap {
	margin-top: 15vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

.stageContents {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 5vh;
	line-height: 300%;
	font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
	font-weight: bold;
}

</style>
