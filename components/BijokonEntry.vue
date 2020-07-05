<template>
<div class="entryWrap">
	<img class="entryImage" :src="entryImage" alt="entryName" v-if="imagePosition == 'left'">
	<div class="textWrap">
		<h2 class="entryName">No.{{ entryNumber }} {{ entryName }}</h2>
		<div class="entryText">{{ entryText }}</div>
	</div>
	<img class="entryImage" :src="entryImage" alt="entryName" v-if="imagePosition == 'right'">
</div>
</template>

<script>
export default {
	props: ["entryNumber", "entryName", "entryText", "entryImage", "imagePosition"],
	data() {
		return {
		}
	}
}
</script>

<style>
.entryWrap {
	width: 100vw;
	min-height: 30vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 3%;
}
.textWrap {
	width: 60%;
	background-color: #F8D1E0;
	opacity: 0.75;
}

.entryName {
	font-size: 0.8rem;
	margin-top: 5%;
	margin-left: 5%;
	margin-right: 5%;
}

.entryText {
	font-size: 0.6rem;
	margin-bottom: 5%;
	margin-left: 5%;
	margin-right: 5%;
}

.entryImage{
	width: 45vw;
}
</style>
