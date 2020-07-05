<template>
<div>
	<div class="titleWrap">
		<h1 class="title">Ms.コンテスト</h1>
		<div class="titleText">
			テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
			テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
		</div>
	</div>
	<div class="entryList">
		<div class="itirann">出演者一覧</div>
		<BijokonEntry 
			entryNumber="1"
			entryName="田中　花子"
			entryText="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
			:entryImage="require('@/assets/bijokon/entry1.png')"
			imagePosition="left"
		/>
		<BijokonEntry 
			entryNumber="2"
			entryName="田中　花子"
			entryText="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
			:entryImage="require('@/assets/bijokon/entry2.png')"
			imagePosition="right"
		/>
		<BijokonEntry 
			entryNumber="3"
			entryName="田中　花子"
			entryText="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
			:entryImage="require('@/assets/bijokon/entry3.png')"
			imagePosition="left"
		/>
		<BijokonEntry 
			entryNumber="4"
			entryName="田中　花子"
			entryText="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
			:entryImage="require('@/assets/bijokon/entry4.png')"
			imagePosition="right"
		/>
		<BijokonEntry 
			entryNumber="5"
			entryName="田中　花子"
			entryText="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
			:entryImage="require('@/assets/bijokon/entry5.png')"
			imagePosition="left"
		/>
		<BijokonEntry 
			entryNumber="6"
			entryName="田中　花子"
			entryText="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
			:entryImage="require('@/assets/bijokon/entry6.png')"
			imagePosition="right"
		/>
		<BijokonEntry 
			entryNumber="7"
			entryName="田中　花子"
			entryText="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
			:entryImage="require('@/assets/bijokon/entry7.png')"
			imagePosition="left"
		/>
		<BijokonEntry 
			entryNumber="8"
			entryName="田中　花子"
			entryText="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
			:entryImage="require('@/assets/bijokon/entry8.png')"
			imagePosition="right"
		/>
		<BijokonEntry 
			entryNumber="9"
			entryName="田中　花子"
			entryText="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
			:entryImage="require('@/assets/bijokon/entry9.png')"
			imagePosition="left"
		/>
	</div>
</div>
</template>

<style>
.titleWrap {
	height: 60vh;
	background-image: url("~@/assets/bijokon/haikei-shima.jpg");
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.title {
	background-color: white;
	font-size: 1.8rem;
	margin-top: 8vh;
	margin-bottom: 5vh;
	padding: 3%;
}

.titleText {
	background-color: white;
	font-size: 0.8rem;
	margin-bottom: 5vh;
	padding: 3%;
	width: 80%;
}

.entryList {
	background-image: url("~@/assets/bijokon/haikei-kumo.jpg");
	background-size: cover;
}

.entryList > .itirann {
	text-align: center;
	padding-top: 10%;
	padding-bottom: 10%;
}
</style>
