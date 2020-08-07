<template>
<main>

	<div class="modalWrap" v-if="show" >
		<div class="modalBG" v-if="show" @click="hideModal()"></div>
		<div class="modal">
			<div class="before" @click="num -= 1" v-if="num != 0">
				<img src="../assets/image/arrow_B.svg" alt="">
			</div>
			<img class="modalImage" :src="path[parson][num]" alt="">
			<div class="after" @click="num += 1" v-if="num  != path[parson].length - 1">
				<img src="../assets/image/arrow_B.svg" alt="">
			</div>
		</div>
	</div>

	<div class="titleWrap">
		<img class="waku" src="@/assets/image/bijokon/waku.png" alt="タイトル　枠">
		<img class="waku" src="@/assets/image/bijokon/waku.png" alt="タイトル　枠">
		<img class="waku" src="@/assets/image/bijokon/waku.png" alt="タイトル　枠">
		<img class="waku" src="@/assets/image/bijokon/waku.png" alt="タイトル　枠">

		<img class="bara" src="@/assets/image/bijokon/bara.png" alt="バラ">

		<img class="title" src="@/assets/image/bijokon/title.png" alt="Msコンテスト">
		<div class="titleText">
			あなたもきっとときめく! <br>
			灘校一の美少女を決める闘いがいま始まる!
		</div>

		<img class="bara" src="@/assets/image/bijokon/bara.png" alt="バラ">

		<div class="touhyouKotira">
			<nuxt-link to="#touhyou">
				結果はこちらから
			</nuxt-link>
		</div>

	</div>
	<div class="entryList">
		<!--
		<div class="itirann">出演者一覧</div>
		-->
	<div class="videoWrap">
		<youtube
			video-id="K7kvVXDX2vY"
		/>
	</div>
		<BijokonEntry 
			entryNumber="1"
			entryName="クセオパトラ"
			entryText="エジプトからやってきた、クセオパトラです。クレオパトラの血を引いていて、太陽神ラーと交信ができるのよ。この舞台に生き別れの姉妹がいると神託を受け、やってきたの。"
			:entryImage="require('@/assets/image/bijokon/shutuenn1.png')"
			imagePosition="left"
		/>
		<BijokonEntry 
			entryNumber="2"
			entryName="ヒーマイオニー・クセンジャー"
			entryText="ホーグワーツ魔法学校からやって来た、ヒーマイオニー・クセンジャーよ。私と対等な頭脳を持つ男の子達が沢山いるって聞いて、この学校にやって来たわ。みんな私の魅力にメロメロになっちゃうかもね。"
			:entryImage="require('@/assets/image/bijokon/shutuenn2.png')"
			:imagePosition="sayuu"
		/>
		<BijokonEntry 
			entryNumber="3"
			entryName="きらり"
			entryText="こんちゃ…きらりだょ…ゎたしときみの心もソーシャルディスタンス…もぉまぢむり…"
			:entryImage="require('@/assets/image/bijokon/shutuenn3.png')"
			imagePosition="left"
		/>
		<BijokonEntry 
			entryNumber="4"
			entryName="oguラテ"
			entryText="こんにちは、oguラテです!名前の通りラテが好きです。最年少なので緊張していますが、おしとやかさと歌には自信があります。あの有名な曲です。多分同じキャラの私に投票できるのは一回だけです。お願いします！"
			:entryImage="require('@/assets/image/bijokon/shutuenn4.png')"
			:imagePosition="sayuu"
		/>
		<BijokonEntry 
			entryNumber="5"
			entryName="けい"
			entryText="けいです。小学6年生です。好きな食べ物はマカロンとプリンです。マカロンはフランボワーズ味が好きで、プリンはちょっと硬めが好きです。よろしくお願いします。"
			:entryImage="require('@/assets/image/bijokon/shutuenn5.png')"
			imagePosition="left"
		/>
		<BijokonEntry 
			entryNumber="6"
			entryName="ひろみ"
			entryText="女子大に通う大学２年生です。お裁縫が好きで、このぬいぐるみも自分で作ったの。今日はよろしくね♡"
			:entryImage="require('@/assets/image/bijokon/shutuenn6.png')"
			:imagePosition="sayuu"
		/>
		<BijokonEntry 
			entryNumber="7"
			entryName="ぺいちゃん"
			entryText="毎日鏡をみるたんびに落ち込んじゃうけど、日々可愛くなるために努力してます^ ^ だから嘘はつかなくてもいいけどちょっとでも可愛いってゆってくれたら喜びます！"
			:entryImage="require('@/assets/image/bijokon/shutuenn7.png')"
			imagePosition="left"
		/>
		<BijokonEntry 
			entryNumber="8"
			entryName="結"
			entryText="生粋のカラオケ好き女子高校生、結です♡週５で学校の近くのコート・ダジ○ールに通っています♡みんなの前で歌うのは緊張するけど、頑張りたいと思います。皆さん、応援よろしくおねがいします。"
			:entryImage="require('@/assets/image/bijokon/shutuenn8.png')"
			:imagePosition="sayuu"
		/>

		<div class="touhyouButton" id="touhyou">
			<div class="resultText">投票結果</div>
			<img class="resultImage" :src="resultImage" alt="">
		</div>
	</div>

</main>
</template>
<script>
import BijokonEntry from "@/components/BijokonEntry.vue"

export default {
	components: {
		BijokonEntry
	},
	head() {
		return {
			title: "Ms.コンテスト",
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Roboto:400,700,900&display=swap&subset=japanese' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap' }
			]

		}
	},
	data () {
		return {
			sayuu: "left",
			show: false,
			path: process.env.bijokon,
			parson: 0,
			num: 0,
			resultImage: require("@/assets/image/bijokon/resultPC.png")
		}
	},
	mounted () {
		console.log(process.env.bijokon)
		if (window.innerWidth <= 800) {
			this.sayuu = "right"
			this.resultImage = require("@/assets/image/bijokon/resultMobile.png")
		}
	},
	methods: {
		hideModal() {
			this.show = false
		},
		makePath(sayuu, path){
			if(sayuu == "right") {
				return path.split(".")[0]+"right.png"
			}
			return path
		}
	}
}
</script>
<style scoped>
@media screen and (max-width: 800px) {
	.titleWrap {
		flex-direction: column;
		height: 60vh;
	}

	.title{
		width: 60%;
		margin-top: 8vh;
		margin-bottom: 5vh;

	}

	.titleText {
		width: 80%;
		text-align: center;
		margin-bottom: 5vh;
		padding: 3%;
	}

	.touhyouKotira {
		width: 100%;
	}

	.bara {
		display: none;
	}

	.modal {
		width: 80vw;
		height: 40vh;
	}

	.before,.after {
		width: 10vw;
	}
	.resultText {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
}

@media screen and (min-width: 800px) {
	.titleWrap {
		flex-direction: row;
		justify-content: space-around;
		height: 40vh;
	}

	.bara {
		height: 30%;
	}

	.title{
		width: 30%;
	}

	.titleText {
		font-size: 1.5rem;
	}

	.touhyouKotira {
		font-size: 1.5rem;
		width: 100%;
	}

	.entryList {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 5vw;
	}

	.modal {
		width: 80vw;
		height: 80vh;
	}

	.before,.after {
		width: 5vw;
	}
	.resultText {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	
	.resultImage {
		margin-left: 10%;
	}

}

main {
	position: relative;
}

.titleWrap {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	position: relative;
	font-family: "Yu Mincho", "YuMincho";
}

.waku {
	position: absolute;
}

.waku:nth-child(1) {
	left: 1%;
	top: 1%;
	height: 25%;
	width: auto;
	transform: scale(-1,1);
}

.waku:nth-child(2) {
	right: 1%;
	top: 1%;
	height: 25%;
	width: auto;
}

.waku:nth-child(3) {
	left: 1%;
	bottom: 1%;
	height: 25%;
	width: auto;
	transform: scale(-1,-1);
}

.waku:nth-child(4) {
	right: 1%;
	bottom: 1%;
	height: 25%;
	width: auto;
	transform: scale(1,-1);
}

.touhyouKotira {
	text-align: center;
}

.videoWrap {
	margin-top: 10vh;
	margin-bottom: 5vh;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
}

.entryList {
	background-image: url("~@/assets/image/bijokon/zentaihaikei.jpg");
	background-size: cover;
	padding-top: 10%;
}

.entryList > .itirann {
	text-align: center;
	padding-top: 10%;
	padding-bottom: 10%;
}

.entryList:last-child {
	padding-bottom: 10vh;
}

.modalWrap {
	position: fixed;
	background-color: rgba(0, 0, 0, 0.9);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 100;
}

.modalBG {
	width: 100%;
	height: 100%;
}

.modal {
	position: fixed;
	background-color: white;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.modalImage {
	max-height: 100%;
	max-width: 100%;
}

.before,.after{
	position: fixed;
}

.before {
	top: 50%;
	left: 5%;
	transform: scale(-1, 1) translateY(-50%);
}

.after {
	top: 50%;
	right: 5%;
	transform: translateY(-50%);
}

.touhyouButton {
	font-size: 2rem;
	margin-top: 2rem;
	text-align: center;
	width: 100%;
}

.touhyouButton > a {
	background-color: #F39D41;
	padding: 1rem;
	border-radius: 20px;
}

.resultImage {
	width: 80%;
}

a:hover, a:link, a:visited, a:active {
	color: black;
	text-decoration: none;
}


</style>

<style>
@media screen and (max-width: 800px) {
	iframe {
		height: 30vh;
		width: 80%;
	}
}
</style>
