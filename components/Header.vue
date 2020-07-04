<template>
<header>
	<div class="logo-wrap">
		<div class="logo-ruby">オンライン</div>
		<div class="logo">文化祭</div>
	</div>
	<div class="link">About</div>
	<div class="link">サークル</div>
	<div class="link">ステージ</div>
	<div class="link">装飾</div>
</header>
</template>

<style>
header {
	height: 8vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding-left: 10%;
	padding-right: 10%;
}

header > .logo-wrap {
	text-align: center;
}

header > * > .logo {
	font-size: 1.4em;
}

header > * > .logo-ruby {
	font-size: 0.6em;
}

</style>
