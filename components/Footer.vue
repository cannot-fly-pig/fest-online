<template>
	<footer>
		<img src="@/assets/image/footer/Logotype_W.svg" alt="オンライン文化祭" class="logo">

		<div class="sns-wrap">
			<div>Follow Us!</div>
			<div class="sns">
				<a href="https://twitter.com/Nada_festival?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
					<img src="@/assets/image/footer/Twitter.png" alt="twitter" class="sns-img">
				</a>
				<a href="https://www.facebook.com/NadaSchoolFestival/">
					<img src="@/assets/image/footer/Facebook.png" alt="facebook" class="sns-img">
				</a>
				<a href="https://www.instagram.com/nada_schoolfestival/">
					<img src="@/assets/image/footer/Instagram.png" alt="instagram" class="sns-img">
				</a>
				<a href="https://www.youtube.com/channel/UCLC_wHGsAxEGR8BSHcPK1SQ">
					<img src="@/assets/image/footer/YouTube.png" alt="youtube" class="sns-img">
				</a>
			</div>
		</div>

		<div class="privacyPolicy">
			<div>privacy policy</div>
			<div class="spacer"></div>
			<div>Design Team @ 2020</div>
		</div>
	</footer>
</template>

<style scoped>
@media screen and (max-width: 800px) {
	footer {
		height: 20vh;
		position: relative;
	}
	.logo {
		height: 60%;
		transform: translateX(-15%);
	}
	.sns-wrap {
		width: 90%;
		flex-direction: row;
		justify-content: space-between;
		align-items: space-between;
		text-align: center;
		font-weight: 600;
	}

	.privacyPolicy {
		flex-direction: column;
		position: absolute;
		right: 10%;
		bottom: 60%;
	}
	.sns {
		margin-left: 10%;
		width: 60%;
		justify-content: space-between;
	}
}

@media screen and (min-width: 800px) {
	footer {
		height: 15vh;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.logo {
		height: 100%;
	}

	.sns-wrap {
		height: 60%;
		flex-direction: column;
		justify-content: space-between;
		align-items: space-between;
		text-align: center;
	}

	.privacyPolicy {
		flex-direction: row;
	}

	.sns {
		width: 12vw;
		justify-content: space-around;
	}
}

footer {
	background-color: #333333;
	color: #d6d6d6;
	width: 100%;
	bottom: 0;
	left: 0;
	padding-left: 10%;
	padding-right: 10%;
}

.sns-wrap {
	display: flex;
	font-weight: 600;
}

.sns {
	display: flex;
	flex-direction: row;
	align-items: space-around;
}

.sns-img {
	height: 4vh;
	width: 4vh;
}

.privacyPolicy {
	display: flex;
	font-size: 0.8em;
}

.privacyPolicy > .spacer {
	width: 2em;
}
</style>
