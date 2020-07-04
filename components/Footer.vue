<template>
	<footer>
		<div class="logo-wrap">
			<div class="logo-ruby">オンライン</div>
			<div class="logo">文化祭</div>
		</div>

		<div class="sns-wrap">
			<div>Follow Us!</div>
			<div class="sns">
				<a href="https://twitter.com/Nada_festival?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
					<img src="" alt="twitter" class="sns-img">
				</a>
				<a href="https://www.facebook.com/NadaSchoolFestival/">
					<img src="" alt="facebook" class="sns-img">
				</a>
				<a href="https://www.instagram.com/nada_schoolfestival/">
					<img src="" alt="instagram" class="sns-img">
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

<style>
footer {
	background-color: #333333;
	color: #d6d6d6;
	height: 15vh;
	width: 100vw;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding-left: 10%;
	padding-right: 10%;
}

footer > .logo-wrap {
	text-align: center;
}

footer > * > .logo-ruby {
	font-size: 0.8em;
}

footer > * > .logo {
	font-size: 1.5em;
}

.sns-wrap {
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}

.sns {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.sns-img {
	height: 8vh;
	width: 8vh;
	border: solid white 1px;
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
