<template>
  <div class="mainPage-container">
    <h1 class="mainPage-title">São Paulo Trains Stock</h1>
    <trains-list />
  </div>
</template>

<script>
import TrainsList from './components/TrainsList.vue'

export default {
  name: 'App',
  components: {
    TrainsList
  }
}
</script>

<style lang="scss">
:root{
	font-size: 21px;
	--system-fonts: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
	--display-fonts: "Raleway", var(--system-fonts);
	--radius: 20px;
	--white: #FFFFFF;
	--black: #111111;
	// Palette https://color.adobe.com/pt/stock-vector-tech-seamless-texture-with-neon-rays-and-stripes-abstract-night-city-background-with-traffic-car-774106624-color-theme-13851197
	--background: #020659;
	--block: #090C40;
	--highlight:#ff2774;
	--text: var(--white);
	
	--blue: #195BA2;
	--green: #008468;
	--red: #EF4B43;
	--yellow: #FFD525;
	--lilac: #7E57A2;
	--orange: #F68121;
	--ruby: #A2306C;
	--diamond: #CDCDBA;
	--emerald: #00AA91;
	--turquoise: #008092;
	--coral: #F05736;
	--sapphire: #0B337D;
	--jade: #01AD62;
	// Spacing
	--space-s: calc(var(--space) * .5);
	--space: 8px;
	--space-x: calc(var(--space)* 2);
	--space-xx: calc(var(--space) * 4);
	--columns: 3;
	--block-height: 220px;

	@media(max-width: 890px){
		font-size: 18px;
		--radius: 15px;
		--block-height: 180px;
	}

	@media(max-width: 768px){
		--columns: 2;
	}

	@media(max-width: 425px){
		font-size: 16px;
		--columns: 1;
	}
}

*, *:before, *:after{
	box-sizing: border-box;
}

img{
	width: 100%;
	height: auto;
	max-width: 100%;
}

.mainPage{
	background-color: var(--background);
	font-family: var(--system-fonts);
	margin: 0;
	padding: var(--space-xx);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	min-height: 110vh;

	& &-container{
		margin: 0 auto;
		max-width: 980px;
		width: 100%;
	}

	& &-title{
		color: var(--text);
		font-family: var(--display-fonts);
		font-size: 2rem;
	}

	@media(max-width: 425px){
		padding: var(--space-x);
	}
}
</style>
