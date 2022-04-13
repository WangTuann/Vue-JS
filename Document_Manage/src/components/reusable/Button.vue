<script>
export default {
	name: 'ButtonComponent',
	props: ['title'],
	data: () => {
		return {
			//
		};
	},
};
</script>

<template>
	<button>{{ title }}</button>
</template>

<style lang="scss" scoped></style>
