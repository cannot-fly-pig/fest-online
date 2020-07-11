<template>
<main>
	<section class="topWrap">
		<div class="topImage">
			画像
		</div>
		<div class="topDate">
			公開
		</div>
	</section>
	<section class="nedWrap">
		<h1 class="nedTitle">NED</h1>
		<img class="nedImage" src="" alt="nedの画像">
		<div class="nedText">
			各界の一流人が披露する驚異のプレゼンテーション、「TED」。 <br>
			「NED」はその灘校版です。各方面で活躍する灘校生による渾身のプレゼンを是非ご覧下さい!
		</div>
	</section>
</main>
</template>

<style>
.topWrap {
	width: 100%;
	height: 90vh;
}

.topImage {
	width: 100%;
	height: 50%;
	background-color: skyblue;
}

.topDate {
	width: 100%;
	height: 50%;
	background-color: yellow;
}

.nedWrap {
	width: 100%;
	min-height: 100vh;
	background-color: #b12211;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
}

.nedTitle {
	font-size: 3rem;
	margin-top: 10vh;
	margin-bottom: 10vh;
}

.nedImage {
	width: 60vw;
	heighT: auto;
	border:solid white 1px;
	margin-bottom: 10vh;
}

.nedText {
	width: 60vw;
	font-size: 1.2rem;
	line-height: 200%;
}
</style>
