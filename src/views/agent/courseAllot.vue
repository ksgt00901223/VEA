<!-- 课程分配 -->
<template>
	<div class='courseAllot '>
		<el-row class="tips viewsBox">
			<p class="title">系统提示：</p>
			<el-row class="tip" v-for="(item, index) in purchaseList" :key='index'>
				<el-col class="item" :span="12">您已购买 “{{item.course_name}}”
					<span class="fr">教学课件数量：</span>
				</el-col>
				<el-col class="item" :span="1">{{item.num}}</el-col>
				<el-col class="item" :span="4">剩余分配数量：</el-col>
				<el-col class="item" :span="1">{{item.left}}</el-col>
				<el-col class="item" :span="3">有效期至：</el-col>
				<el-col class="item" :span="3">{{item.end_at}}</el-col>
			</el-row>
		</el-row>
		<el-row class="allot viewsBox">
			<el-row class="tags">
				<span class="allotTags hover" :class="active==1?'line_':''" @click="changeTag(1)">课程分配</span>
				<span class="allotTags hover" :class="active==2?'line_':''" @click="changeTag(2)">教师课程转分配</span>
			</el-row>

			<el-row class="selectCourse" v-if="active==1">
				<el-row class="select">
					<el-select v-model="value" @change="changeCourse(value)" placeholder="请选择">
						<el-option v-for="(item,index) in courseTitList" :key="item.id" :label="item.course_name" :value="index">
						</el-option>
					</el-select>
				</el-row>
				<el-row>
					<el-row class="courseInfo2 mb20">
						<div class="box">
							<h5>课程信息</h5>
							<div class="content">
								<p>课程名称：
									<span>{{courseInfo.course_name}}</span>
								</p>
								<p>课程数量：
									<span>{{courseInfo.num}}</span>
								</p>
								<p>剩余分配数量：
									<span>{{courseInfo.left}}</span>
								</p>
							</div>
						</div>
					</el-row>
					<el-row class="allotInfo">
						<div class="box">
							<h5>分配信息</h5>
							<div class="content">
								<el-row class="mb20">
									<el-col :span="15" :offset="2">
										<el-input v-model="input" class="custom " maxlength="11" placeholder="输入教师手机号"></el-input>
									</el-col>
									<el-col :span="5">
										<el-button type="primary" round>确认分配</el-button>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col class="courseItem" :span="12" v-for="(item, index) in teaInfoList" :key="index">
										<div>
											<p>
												<span>{{item.name}}</span>
												<span class="tel">{{item.tel}}</span>
												<span>
													<el-button type="text" @click="removeTip(item.id)">解除</el-button>
												</span>
											</p>
										</div>
									</el-col>
								</el-row>
							</div>
						</div>
					</el-row>
				</el-row>
			</el-row>
			<div class="allotEdit" v-if="active==2">
				<el-row class="search ">
					<el-col :span='6' :offset="18" class="por">
						<el-input v-model="input" class="custom " maxlength="11" placeholder="输入教师手机号"></el-input>
						<el-button type="primary" round class="poa btn">查询</el-button>
					</el-col>

				</el-row>
				<el-row class="teaInfo">
					<div class=" box">
						<h5>教师信息</h5>
						<div class="content">
							<p>教师姓名：
								<span>何漂亮</span>
							</p>
							<p>手机号：
								<span>10292393289032</span>
							</p>
							<p>剩余分配数量：
								<span>10</span>
							</p>
						</div>
					</div>
				</el-row>
				<el-row class="courseInfo">
					<div class=" box">
						<h5>课程信息</h5>
						<div class="content">
							<table cellspacing=0>
								<tbody>
									<tr class="head">
										<td>课程名称</td>
										<td>有效期</td>
										<td>操作</td>
									</tr>
									<tr v-for="(item, index) in courseInfoList" :key="index">
										<td>{{item.title}}</td>
										<td>{{item.time}}</td>
										<td>
											<el-button type="text" @click="isShow">转分配</el-button>
										</td>
									</tr>

								</tbody>
							</table>
						</div>
					</div>
				</el-row>
				<trans-allot @show='dialogShow' v-show="allotBoxShow"></trans-allot>
			</div>
		</el-row>
	</div>
</template>

<script>
import transAllot from '@/components/dialog/transAllot';
export default {
	name: 'courseAllot',
	data() {
		return {
			input: '',
			value: '',
			active: 1,
			allotBoxShow: false,
			purchaseList: [
				{
					id: 1,
					alpayTitle: 'k11111111111',
					alpayNum: 10,
					restNum: 55,
					time: '2019-6-30',
				},
				{
					id: 1,
					alpayTitle: 'k11111111111',
					alpayNum: 10,
					restNum: 55,
					time: '2019-6-30',
				},
				{
					id: 1,
					alpayTitle: 'k11111111111',
					alpayNum: 10,
					restNum: 55,
					time: '2019-6-30',
				},
				{
					id: 1,
					alpayTitle: 'k11111111111',
					alpayNum: 10,
					restNum: 55,
					time: '2019-6-30',
				},
			],
			courseInfoList: [
				{
					title: '体验课程K1',
					time: '2018-10-29',
				},
				{
					title: '体验课程K1',
					time: '2018-10-29',
				},
				{
					title: '体验课程K1',
					time: '2018-10-29',
				},
				{
					title: '体验课程K1',
					time: '2018-10-29',
				},
			],
			teaInfoList: [
				{
					name: '张二狗',
					id: 1,
					tel: '1222222222',
				},
				{
					name: '张二狗',
					id: 1,
					tel: '1222222222',
				},
				{
					name: '张二狗',
					id: 1,
					tel: '1222222222',
				},
				{
					name: '张二狗',
					id: 1,
					tel: '1222222222',
				},
			],
			courseTitList: [
				{
					value: '选项1',
					label: '黄金糕',
				},
				{
					value: '选项2',
					label: '双皮奶',
				},
				{
					value: '选项3',
					label: '蚵仔煎',
				},
				{
					value: '选项4',
					label: '龙须面',
				},
				{
					value: '选项5',
					label: '北京烤鸭',
				},
			],
			courseInfo: {},
		};
	},

	components: {
		transAllot,
	},

	created() {
		//系统提示
		this.$axios
			.get('/user/agent/system?token=' + this.GLOBAL.token, {})
			.then(res => {
				const o = res.data;
				console.log(o.data);
				this.purchaseList = o.data;
			})
			.catch(err => {
				console.log(err);
			});
		//下拉课程列表
		this.$axios
			.get('/course/agent/all?token=' + this.GLOBAL.token, {})
			.then(res => {
				const o = res.data;
				console.log(o.data);
				if (o.code === 2000) {
					this.courseTitList = o.data;

					this.courseInfo = this.courseTitList[0];
					this.getTeaList(this.courseInfo.cid);

					console.log(this.courseInfo);
				}
			})
			.catch(err => {
				console.log(err);
			});
	},

	methods: {
		changeTag(i) {
			this.active = i;
		},
		isShow() {
			this.allotBoxShow = true;
		},
		dialogShow(i) {
			this.allotBoxShow = i;
			console.log(i);
		},
		changeCourse(i) {
			console.log(i);
			this.courseInfo = this.courseTitList[i];
			this.getTeaList(this.courseInfo.cid);
			console.log(this.courseInfo);
		},
		//教师列表
		getTeaList(id) {
			this.$axios
				.get('/course/teacher?token=' + this.GLOBAL.token, {
					params: {
						id: id,
					},
				})
				.then(res => {
					const o = res.data;
					console.log(o.data);
				})
				.catch(err => {
					console.log(err);
				});
		},
		//移除匹配
		removeTip(id) {
			this.$confirm('确定解除匹配吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.removeTea(id, this.courseInfo.uid);
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消操作',
					});
				});
		},
		removeTea(cid, uid) {
			this.$axios
				.post('/course/unmatch?token=' + this.GLOBAL.token, {
					cid: cid,
					uid: uid,
				})
				.then(res => {
					const o = res.data;
					if (o.code === 2000) {
						this.$message({
							type: 'success',
							message: '解除成功!',
						});
					} else {
						console.log(o.msg);
					}

					console.log(o.data);
				})
				.catch(err => {
					console.log(err);
				});
				
		},
	},
};
</script>
<style lang='less' scoped>
.tips {
	padding: 0 20px 35px;
	margin-bottom: 20px;
	.title {
		padding: 10px 0;
		font-size: 16px;
	}
	.tip {
		margin: 10px 0;

		border: 2px solid #e8e8e8;
		.item {
			text-align: center;
			padding: 10px;
			&:nth-child(even) {
				background: #e8e8e8;
			}
		}
	}
}
.allot {
	padding: 0 20px 20px;
	.tags {
		padding: 15px;
		span {
			padding: 15px 20px;
			font-size: 16px;
		}
	}
	.box {
		width: 500px;
		border: 2px solid #e8e8e8;
		margin: 0 auto;
		h5 {
			padding: 20px;
			font-size: 14px;
			background: #e8e8e8;
		}
		.content {
			min-height: 140px;
			padding: 30px 20px;
		}
	}
	.allotEdit {
		.search {
			padding: 45px 20px;
			// margin-bottom: 20px;

			.btn {
				top: 0;
				right: 0;
			}
		}

		.teaInfo {
			margin-bottom: 20px;
			.content {
				p {
					padding: 10px;
				}
			}
		}
	}
	.selectCourse {
		.select {
			padding: 45px 20px;
		}
		.courseInfo2 {
			p {
				padding: 10px;
			}
		}
		.allotInfo {
			.courseItem {
				padding: 0 10px;
				margin: 10px 0;
				& > div {
					border-radius: 10px;
					background: #eee;
					padding: 8px;
					p {
						border-radius: 10px;
						background: #fff;
						span {
							padding: 0 5px;
						}
					}
				}
				.tel {
					border-right: 1px solid #e8e8e8;
				}
			}
		}
	}
}
table {
	width: 400px;
	margin: 0 auto;
	border: 2px solid #e8e8e8;
	tr:nth-child(odd) {
		background: #f0eeee;
	}
	.head {
		td {
			padding: 10px;
		}
	}
	td {
		border: 1px solid #e8e8e8;
		text-align: center;
	}
}
</style>