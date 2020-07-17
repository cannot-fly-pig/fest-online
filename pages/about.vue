<template>
  <main>
		<section class="topWrap">
		<h1 class="topText">
			<span>About</span>
		</h1>
		<div class="topText">
			<span>オンライン文化祭とは</span>
		</div>
		</section>
		<section class="mainContents">
			<p>
				灘校文化祭は、毎年5月のGW期間中に開催される大規模イベントです。
				灘校(灘中学校・高等学校をまとめてこのように呼称します)の校舎を開放し、文化部や運動部の活動の成果を披露する、まさに生徒達の一年間の学校生活の集大成と言えるのがこの行事です。幸いなことに、例年2万人を超える方に来場していただき、会場となる校舎は盛況を博しています。
				昨年開催された第73回灘校文化祭"SAILAWAY"もまた、多数の方にご来場いただき、成功裡に幕を閉じました。
				そして、各々の生徒が先代からのバトンを受け継ぎ、今回の文化祭に向けて精力的に準備を続けていました。
			</p>

			<img class="aboutImage" src="@/assets/image/about/sailaway_01.jpg" alt="">
			<img class="aboutImage" src="@/assets/image/about/sailaway_02.jpg" alt="">

			<p>
				しかし、2020年初頭に現れた新型コロナウイルス感染症の流行により、文化祭開催を巡る判断は極めて厳しい状況に追い込まれました。一時はチケット招待制など、規模を縮小してでも灘校現地で開催する方法を検討していましたが、感染拡大状況の悪化を鑑み、とうとう現地での開催を断念するという判断を下すに至りました。
			</p>

			<p>
				このような逆境の中で、われわれ生徒が外部に活動の成果を発表するにはどのような方法があるか、様々なアプローチを探りました。そして、最終的に提案された方式は
				「例年発表される部誌や企画を、文書データや動画の形でインターネット上に公開する」
				というものでした。
				この理念を軸に形作られたものが、いま皆さまがご覧になっている「オンライン文化祭」です。
			</p>

			<p>
				われわれは、オンライン文化祭を通じて、来場者、すなわち閲覧者の皆さまに、灘校生の並々ならぬ意欲と、それによって形成される確かな「文化祭」のカタチを感じ取っていただきたいと思っています。
			</p>

			<img class="aboutImage" src="@/assets/image/about/online_01.jpg" alt="">
			<img class="aboutImage" src="@/assets/image/about/online_02.jpg" alt="">

			<p>
				少し話は転じますが、本来であれぱ2020年5月2日,3日に開催予定であった第74回灘校文化祭のテーマは"vivid"です。
				vividという言葉は「生き生きとした」「鮮やかな」という意味を持っています。そこから着想を得た、「生徒達のみならず、ご来場になる方々にも溢れんばかりの活力を感じ取っていただける文化祭となること」また、「それぞれの場における生徒達の活躍によって、文化祭全体が鮮やかに彩られていくこと」を期待する意が、この"vivid"というテーマには込められています。
			</p>

			<img class="aboutImage" src="@/assets/image/about/vivid_01.jpg" alt="">
			<img class="aboutImage" src="@/assets/image/about/vivid_02.jpg" alt="">

			<img class="aboutGif" src="@/assets/image/about/01.gif" alt="">
			<img class="aboutGif" src="@/assets/image/about/02.gif" alt="">
			<img class="aboutGif" src="@/assets/image/about/03.gif" alt="">

			<p>
				現在、人々が一堂に会することのできない状況下にあるからこそ、この"vivid"というテーマがより強い意味を持つのだと、われわれは確信しています。
				オンライン文化祭によって、灘校生の"vivid"な姿をそこに見て取っていただければ、これほど幸いなことはありません。
			</p>

			<p>
				灘校文化委員会
			</p>

		</section>
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: "About",
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Roboto:400,700,900&display=swap&subset=japanese' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap' }
			]
		}
	},
}
</script>

<style scoped>
@media screen and (max-width: 800px) {
	.imageTitle {
		font-size: 1.5rem;
	}

	.mainContents {
		justify-content: center;
		align-items: center;
	}

}

@media screen and (min-width: 800px) {
	.mainContents > p {
		font-size: 1.3rem;
	}

	.mainContents {
		justify-content: space-between;
	}

	.imageTitle {
		font-size: 2rem;
	}
}

.topWrap {
	position: relative;
	width: 100%;
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(~@/assets/image/about/about.jpg);
	background-size: cover;
	background-position: center;
}

.topWrap > img  {
	max-height: 100%;
	max-width: 100%;
}

.topText {
	position: absolute;
	left: 15vw;
	color: white;
}

h1.topText {
	font-size: 3rem;
	font-weight: 600;
	bottom: 45vh;
}

div.topText {
	margin-top: 6rem;
	font-size: 1.5rem;
	font-weight: 600;
	bottom: 35vh;
}

.topText > span {
	background-color: #333333;
}

.mainContents {
	margin: 10vh 10%;
	color: #4d4d4d;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 80%;
}

.mainContents > p {
	line-height: 200%;
	margin-bottom: 5vh;
}

.p:last-child {
	margin-top: 10vh;
}


.aboutImage {
	width: 48%;
	margin-bottom: 10vh;
}
.aboutGif {
	width: 30%;
	margin-bottom: 10vh;
}
</style>
