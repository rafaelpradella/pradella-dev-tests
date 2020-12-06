<template>
	<li class="trainItem" data-testid="list-item">
		<a 
			target="_blank"
			:href="content.url"
			:title="`Go to Wikipedia page about ${content.name}`"
		>	
			<h2 data-testid="title">{{content.name}}</h2>
		</a>
		<p>{{content.company}}</p>
		<button
			role="button"
			data-testid="button"
			:class="{ revealed: isRevealed }"
			v-on:click="isRevealed = !isRevealed"
			v-on:touchstart.once="loadImage"
			v-on:mousedown.once="loadImage"
			v-on:focus.once="loadImage"
		>
			{{buttonMessage}}
		</button>
		<img
			v-show="isRevealed"
			data-testid="image"
			:src="source"
			:alt="`Picture of a ${content.name} train`"
		/>
	</li>
</template>

<script>

export default {
	name: 'TrainItem',
	
	data(){
		return{
			isRevealed: false,
			source: "",
		}
	},

	props:{
		content: { type: Object, required: true }
	},

	methods:{
		loadImage: function(){
			this.source = this.content.photo;
		},
	},

	computed:{
		buttonMessage: function(){
			return this.isRevealed ? "Hide Image" : "Reveal Image"
		},
	},
}
</script>

<style lang="scss">
	.trainItem{
		background-color: var(--block);
		border-radius: var(--radius);
		color: var(--white);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--space-xx) var(--space-x) var(--space-x);
		margin-bottom: var(--space-x);
		height: fit-content;
		min-height: var(--block-height);

		a{
			color: var(--white);

			&:hover{
				filter: brightness(90%);
			}
		}

		h2{
			font-family: var(--display-fonts);
			font-size: 1.2rem;
			line-height: 1.2em;
			margin: 0 0 .2em;
		}

		p{
			margin: 0;
			font-style: italic;
		}

		button{
			position: relative;
			background-color: var(--highlight);
			color: var(--black);
			border: none;
			border-radius: var(--radius);
			font-size: .9rem;
			font-weight: 600;
			margin-top: var(--space-x);
			padding: var(--space);
			transition: filter .3s ease-in-out;
			width: 100%;
			min-height: 48px;

			&:focus{
				outline: none;
				&::before{
					opacity: 1;
				}
			}

			&:before{
				position: absolute;
				left: -3px;
				right: -3px;
				top: -3px;
				bottom: -3px;
				box-shadow: 0 0 0 3px var(--highlight);
				border-radius: var(--radius);
				content: "";
				display: block;
				opacity: 0;
				transition: opacity .3 ease-in-out;
			}
			
			&.revealed{
				background-color: transparent;
				color: var(--white);

				&:before{
					box-shadow: inset 0 0 0 3px var(--white);
				}
			}

			&:hover{
				filter: brightness(85%);
			}
		}

		img{
			border-radius: 5px;
			margin: var(--space-x) 0;
		}
	}
</style>
