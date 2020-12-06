<template>
	<div class="networkWarn" aria-live="polite">
		<transition name="fade">
			<span 
				class="networkWarn-block"
				v-if="loadFailed"
				data-testid="warn"
			>
				Can´t connect to server right now, try again later.
			</span>
		</transition>
	</div>
</template>

<script>
	export default{
		name: "NetworkWarn",
		props:{
			loadFailed: { type: Boolean, required: true }
		},
	}
</script>

<style lang="scss">
	.networkWarn{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		z-index: 1;

		&-block{
			display: block;
			background-color: var(--block);
			backdrop-filter: blur(5px);
			border-radius: var(--radius);
			color: var(--white);
			font-size: .9rem;
			font-weight: 500;
			margin: 0 auto;
			padding: var(--space-x);
			width: 100%;
			max-width: 280px;
		}	
	}
</style>