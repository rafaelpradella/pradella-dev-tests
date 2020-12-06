<template>
	<div>
		<network-warn :load-failed="loadFailed" />
		<ul v-if="trains" class="u-main-grid">
			<train-item
				v-for="train in trains"
				:content="train"
				:key="train.name"
			/>
		</ul>
		<div v-else class="u-main-grid">
			<div class="u-placeholder" v-for="index in 6" :key="index"></div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import TrainItem from "./TrainItem.vue";
import NetworkWarn from "./NetworkWarn.vue";

export default {
	name: 'TrainsList',
	components: { NetworkWarn, TrainItem },

	data(){
		return {
			loadFailed: false,
			trains: null,
		}
	},

	created(){
		this.fetchPageData();
	},

	methods: {
		fetchPageData: function() {
			return axios.get("https://api.jsonbin.io/b/5fcc50862946d2126ffeb963/2")
				.then(res => this.trains = res.data.trains)
				.catch(() => this.loadFailed = true)
		},
	},
}
</script>

<style lang="scss" scoped>
.u-main-grid{
	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	gap: var(--space-x);
	padding: unset;
	list-style-type: none;
}

.u-placeholder{
	background-color: var(--block);
	border-radius: var(--radius);
	filter: saturate(2) brightness(0.9);
	height: var(--block-height);
}

</style>
