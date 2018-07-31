<!-- 购物车表格 -->
<template>
	<div class='cartTable'>
		<p class="p20 fz16" v-if="tableType==1">全部商品</p>
		<el-table ref="multipleTable" :data="shoppingList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="50" v-if='tableType==1'></el-table-column>
			<el-table-column width="100">
				<template slot-scope="scope">
					<div class="cover">
						<img :src="scope.row.image" :alt="scope.row.name">
					</div>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="课程名称"> </el-table-column>
			<el-table-column label="价格" width="120">
				<template slot-scope="scope">
					<span>￥{{ scope.row.price}}</span>
				</template>
			</el-table-column>
			<el-table-column label="数量" width="120">
				<template slot-scope="scope">
					<el-input-number class="counter" v-model="scope.row.num" controls-position="right" @blur='sendNum(scope.$index,scope.row.num,scope.row)' @change="numChange(scope.$index,scope.row.num,scope.row)" :min="1" :max="999"></el-input-number>
				</template>
			</el-table-column>
			<el-table-column label="小计" width="120">
				<template slot-scope="scope">
					<span>￥{{ scope.row.total_price}}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click.native.prevent="deleteRow(scope.$index, shoppingList)" type="text" size="small">
						移除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-row class="sumPart " v-if="tableType==1">
			<el-col :span="8" :offset="16">
				<p>课程共计：
					<span>{{sumCourseNum}}</span> 个</p>
				<p>数量共计：
					<span>{{sumNum}}</span> 套</p>
				<p>商品共计总额：
					<span class="total">￥{{totalCommodity}}</span>
				</p>
				<div class="btnPart">
					<el-button type="primary" round @click="goBuy">
						继续购课
					</el-button>
					<el-button type="primary" round @click="payment">立即付款</el-button>
				</div>
			</el-col>

		</el-row>
		<el-row class="sumPart" v-if="tableType==2">
			<el-row style="height:230px">
				<div class="fr">
					<img src="./img/shopCart.png" alt="shopCart">
				</div>
			</el-row>
			<el-row>
				<el-col :span="8" class="t2">
					<p>课程数量共计：
						<span>{{sumNum}}</span> 个</p>
					<p>商品共计总额：
						<span class="total">￥{{totalCommodity}}</span>
					</p>

				</el-col>
				<el-col :span="8" :offset="8">
					<div class="btnPart">
						<el-button type="primary" round @click="payment">立即付款</el-button>
					</div>
				</el-col>
			</el-row>

		</el-row>

		<prompt-payment v-show='promptPaymentShow' @show='isShowPay'></prompt-payment>

	</div>
</template>

<script>
import promptPayment from '@/components/dialog/promptPayment';
export default {
	name: 'cartTable',
	props: {
		shoppingList: Array,
		tableType: Number,
	},
	data() {
		return {
			promptPaymentShow: false, //付款弹窗
			multipleSelection: [],
			sendNumTimer: null,
		};
	},
	watch: {
		shoppingList(newVal, oldVal) {
			console.log('111');
		},
	},
	components: {
		promptPayment,
	},
	created() {
		if (this.tableType == 2) {
			this.multipleSelection = this.shoppingList;
			console.log(this.multipleSelection);
		}
	},
	computed: {
		sumCourseNum() {
			if (this.tableType) {
				return this.multipleSelection.length;
			} else {
				console.log('没有tableType,err');
			}
		},
		sumNum() {
			if (this.tableType) {
				let array = this.multipleSelection,
					sum = 0;
				array.forEach(v => {
					sum += v.num;
				});
				console.log(sum);
				return sum;
			} else {
				console.log('没有tableType,err');
			}
			// console.log('这是数量');
		},
		totalCommodity() {
			if (this.tableType) {
				let array = this.multipleSelection,
					total = 0;
				array.forEach(v => {
					total += v.total_price;
				});
				return total;
			} else {
				console.log('没有tableType,err');
			}
		},
	},

	methods: {
		handleSelectionChange(val) {
			this.multipleSelection = val;
			// console.log(val);
		},
		deleteRow(index, rows) {
			this.$confirm('是否删除此物品?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					console.log('这是删除');
					this.$message({
						type: 'success',
						message: '删除成功!',
					});
					rows.splice(index, 1);

					console.log(rows[index]);
					this.delItem(rows[index]);
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除',
					});
				});
		},
		delItem(row) {
			console.log('这是删除方法里面的');
			console.log(row.id);

			this.$axios
				.post('/cart/del?token=' + this.GLOBAL.token, {
					id: row.id,
				})
				.then(res => {
					console.log('ok');
					// rows.splice(index, 1);
					const o = res.data;
					console.log(o.msg);
				})
				.catch(err => {
					console.log(err);
				});
		},
		sendNum(i, num, row) {
			console.log(row.id);
			clearTimeout(this.sendNumTimer);
			this.sendNumTimer = setTimeout(() => {
				this.$axios
					.post('/cart/update?token=' + this.GLOBAL.token, {
						id: row.id,
						num: num,
					})
					.then(res => {
						console.log('ok');
						const o = res.data;
					})
					.catch(err => {
						console.log(err);
					});
				console.log('这是定时器里的');
			}, 800);
			console.log('发送');
			console.log(num);
		},
		numChange(i, num, row) {
			row.total_price = row.price * num;
			let total = row.total_price;
			console.log(row.total_price);
			row.total_price = total.toFixed(2);
			// console.log('总价去尾'+row.total_price.toFixed(2));
			this.sendNum(i, num, row);
			// console.log(value);
		},
		isShowPay(i) {
			this.promptPaymentShow = i;
			console.log(i);
		},
		payment() {
			this.promptPaymentShow = true;
		},
		goBuy() {
			this.$router.push({ path: 'onlineshopping' });
		},
	},
};
</script>
<style lang="less">
.cartTable {
	table {
		th {
			background: #e8e8e8;
		}
		td {
			padding: 15px 0;
		}
		.counter {
			width: 80px;
			.el-input-number__decrease,
			.el-input-number__increase {
				width: 15px;
			}
			input {
				padding: 0 !important;
			}
		}
	}
	.sumPart {
		div.btnPart {
			button {
				font-size: 20px;
			}
		}
	}
}
</style>

<style lang='less' scoped>
.cartTable {
	.cover {
		width: 55px;
		height: 60px;
		margin: 0 auto;
		img {
			height: 100%;
			width: 100%;
		}
	}
	th {
		background: #e8e8e8;
	}
	.sumPart {
		padding: 20px 0;
		p {
			text-align: right;
			font-size: 16px;
			span {
				display: inline-block;
				min-width: 40px;
				padding: 10px 5px;
			}
			.total {
				color: red;
				font-weight: 700;
			}
		}
		.t2 {
			p {
				text-align: left;
			}
		}
		.btnPart {
			text-align: right;
			padding: 20px 0;
			button {
				padding: 10px;
				box-shadow: 0px 0px 13px rgba(0, 87, 255, 0.91);
			}
		}
	}
}
</style>