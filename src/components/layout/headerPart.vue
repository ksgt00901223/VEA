<!-- 顶部导航 -->
<template>
    <div class='headerPart'>{{Msg}}</div>
</template>

<script>
export default {
	name: 'headerPart',
	data() {
		return {
			Msg: '这是导航',
		};
	},

	components: {},

	computed: {},

	methods: {},
};
</script>
<style lang="less">

</style>

<style lang='less' scoped>
.headerNav {
	height: 100px;
	background-color: #f00;
}
</style>