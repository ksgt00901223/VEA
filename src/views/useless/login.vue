<!-- 这是登录注册用 -->
<template>
	<div class='login' @click='log'>这是登录注册用</div>
</template>

<script>
export default {
	data() {
		return {};
	},

	components: {},

	computed: {},

	methods: {
		log(){
			console.log("1111");
			
		}
	},
};
</script>
<style lang='less' scoped>
.login {
	height: 100px;
	background-color: #0f0;
}
</style>