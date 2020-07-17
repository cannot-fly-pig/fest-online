<template>
	<main>
		<div class="topWrap">
			<img src="@/assets/image/ODORIBA-title.png" alt="odoribaロゴ" class="odoribaLogo">
			<div class="odoribaText">
				<span class="noWrap">外には出られなくっても小鳥はさえずってるだろ </span>
				<span class="noWrap">だから俺らダンサーの心にはいつもODORIBA!</span>
			</div>
			<img src="" alt="矢印" class="arrow">
		</div>

		<div class="odoribaVideoWrap">
			<div class="odoribaVideo">
				<div>
					<div class="videoTitile">
						ND1
					</div>
					<div class="videoText">
						Go to the top! ND1 です!
					</div>
				</div>
				<youtube
					video-id="HZleluBJrjA"
				/>
			</div>

			<div class="odoribaVideo">
				<div>
					<div class="videoTitile">
						NADICE
					</div>
					<div class="videoText">
						ONE IN A MILLION こんにちは～NADICEです!
						今年で3年目を迎える私たちNADAICEが、よりパワーアップしたダンスでみなさんを魅了します!
					</div>
				</div>
				<youtube
					video-id="HZleluBJrjA"
				/>
			</div>

			<div class="odoribaVideo">
				<div>
					<div class="videoTitile">
						EXO-ND
					</div>
					<div class="videoText">
						We are one こんにちは、EXO-NDです。
						見ているみなさんのハートを撃ち抜く、カッコいいダンスを披露します。是非ご覧ください!
					</div>
				</div>
				<youtube
					video-id="HZleluBJrjA"
				/>
			</div>

		</div>
	</main>
</template>
<script>
export default {
	head () {
		return {
			title: "ODORIBA",
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
		background-image: url("~@/assets/image/spotlight.jpg");
	}

	.odoribaText {
		margin-top: 10vh;
		width: 80%;
	}

	.odoribaLogo {
		width: 80%;
	}

	.odoribaVideoWrap {
		width: 85vw;
		margin-left: 5vw;
		flex-direction: column;
	}

	.odoribaVideoWrap:last-child {
		padding-bottom: 10vh;
	}
	
	.videoTitile {
		margin-top: 10vh;
		font-size: 1.5rem;
	}

	.videoText {
		margin: 0.5rem 0;
	}

	iframe {
		width: 100%;
		max-height: 30vh;
	}
}

@media screen and (min-width: 800px) {
	.topWrap {
		height: 60vh;
		background-image: url("~@/assets/image/spotlight-pc.jpg");
	}

	.odoribaLogo {
		width: 40%;
	}

	.odoribaText {
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

	.odoribaVideoWrap {
		width: 85%;
		margin-left: 5vw;
		margin-right: 10vw;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.odoribaVideo {
		position: relative;
		width: 45%;
		min-height: 30vh;
		margin-top: 10vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.videoTitile {
		margin-top: 10vh;
		font-size: 1.5rem;
	}

	.videoText {
		margin: 0.5rem 0;
	}

	iframe {
		width: 100%;
	}

	.odoribaVideoWrap:last-child {
		padding-bottom: 10vh;
	}

}

main {
	background-color: black;
	color: white;
	font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
}

.videoTitile {
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

.odoribaText {
	font-family: 'M PLUS 1p', sans-serif;
	font-weight: 600;
}

.odoribaVideoWrap {
	display: flex;
	align-content: center;
}

</style>
<style>
.odoribaVideoWrap iframe {
	width: 100%;
}
</style>
