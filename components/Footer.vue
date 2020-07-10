<template>
	<footer>
		<img src="@/assets/image/Logotype_W.svg" alt="オンライン文化祭" class="logo">

		<div class="sns-wrap">
			<div>Follow Us!</div>
			<div class="sns">
				<a href="https://twitter.com/Nada_festival?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
					<img src="@/assets/image/Twitter.png" alt="twitter" class="sns-img">
				</a>
				<a href="https://www.facebook.com/NadaSchoolFestival/">
					<img src="@/assets/image/Facebook.png" alt="facebook" class="sns-img">
				</a>
				<a href="https://www.instagram.com/nada_schoolfestival/">
					<img src="@/assets/image/Instagram.png" alt="instagram" class="sns-img">
				</a>
				<a href="https://www.instagram.com/nada_schoolfestival/">
					<img src="@/assets/image/YouTube.png" alt="instagram" class="sns-img">
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
footer {
	background-color: #333333;
	color: #d6d6d6;
	height: 15vh;
	width: 100%;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding-left: 10%;
	padding-right: 10%;
}

.logo {
	height: 100%;
}

.sns-wrap {
	height: 60%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
	text-align: center;
	font-weight: 600;
}

.sns {
	width: 12vw;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: space-around;
}

.sns-img {
	height: 4vh;
	width: 4vh;
}

.privacyPolicy {
	display: flex;
	flex-direction: row;
	font-size: 0.8em;
}

.privacyPolicy > .spacer {
	width: 2em;
}
</style>
