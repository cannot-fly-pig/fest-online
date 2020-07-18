<template>
	<main>
		<div class="topWrap">
			<h1 class="topTitle">
				<span>ステージ企画</span>
			</h1>
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
					buttonHref="/"
				>
				</ContentsButton>
				coming soon
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
			title: "ステージ企画"
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

.topTitle > span {
	padding: 1rem;
	background-color: white;
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
