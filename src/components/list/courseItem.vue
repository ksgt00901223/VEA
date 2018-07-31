<!-- 在线购课单项 -->
<template>
	<div class='orderItem por'>
		<div class="cover r10 poa">
			<img :src="item.image" :alt="item.name">
		</div>
		<div class="info r10 poa">
			<el-row class="top">
				<el-col :span="12" :offset="12">
					<div class="title">{{item.name}}</div>
					<div class="Counter">
						<el-input-number v-model="num" :max="999" @change="handleChange" label="购买数量"></el-input-number>
					</div>
				</el-col>
			</el-row>

			<el-row class="edit">
				<el-col :span="8" class="price">
					<!-- <span>{{courseItemTotalPrice}}</span> -->
					<span>{{item.price}}</span>
				</el-col>
				<el-col :span="8">
					<el-button type="primary" round @click="addShopCart(item.id,item.price)">加入购物车</el-button>
				</el-col>
				<el-col :span="8">
					<router-link :to="{path:'/agent/buyNow',query:{courseId:item.id}}">
						<el-button type="primary" round>立即购买</el-button>
					</router-link>
				</el-col>
			</el-row>

		</div>
	</div>
</template>

<script>
//import aa from 'aa';
export default {
	name: 'orderItem',
	props: {
		item: Object,
	},
	data() {
		return {
			num: 1,
		};
	},

	components: {},

	computed: {
		courseItemTotalPrice() {
			return this.num * this.item.price;
		},
	},

	methods: {
		handleChange(value) {
			console.log(value);
		},
		addShopCart(id, price) {
			// console.log('加入购物车');

			this.$axios
				.post('/cart?token=' + this.GLOBAL.token, {
					id: id,
					num: this.num,
					price: price,
				})
				.then(res => {
					console.log('ok');
					const o = res.data;
					this.$message({
						message: '添加成功',
						type: 'success',
					});
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
};
</script>
<style lang="less">
.orderItem .top {
	.el-input-number__increase,
	.el-input-number__decrease {
		width: 20px;
	}
	.el-input-number .el-input__inner {
		padding: 0;
	}
}
</style>

<style lang='less' scoped>
.orderItem {
	width: 330px;
	height: 260px;
	.cover {
		height: 190px;
		width: 160px;
		background: #bbb;
		left: 10px;
		overflow: hidden;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.info {
		width: 330px;
		height: 160px;
		bottom: 0;
		left: 0;
		box-shadow: 6px 0px 27px rgba(0, 0, 0, 0.13);
		.top {
			height: 100px;
			.title {
				padding: 10px;
				font-size: 20px;
				font-family: Adobe Heiti Std R;
			}
			.Counter {
				width: 80px;
				margin: 0 auto;
				.el-input-number {
					width: 100%;
				}
			}
		}
		.edit {
			padding: 10px 0;
			.price {
				padding: 0 10px;
				font-size: 20px;
				font-family: Adobe Heiti Std R;
			}
			button {
				padding: 5px;
			}
		}
	}
}
</style>