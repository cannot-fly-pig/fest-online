<template>
  <div>
		<Header />
		<main>
			<Nuxt />
		</main>
		<Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
	components: {
		Header,
		Footer
	}
}
</script>
<style>
html {
  font-family: Roboto, "Noto Sans JP";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
