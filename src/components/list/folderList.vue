<!-- 文件夹的列表 -->
<template>
	<div style="margin:0 -20px -35px" class="por">

		<div class='folderList newFolder  p020'>
			<div class="headPart">
				<el-row class="head center">
					<el-col :span='18' class="headTitle">
						我的课件-{{title}}
					</el-col>
					<el-col :span="6" class="fz14 newFolder hover" v-if="listType==1">
						<span class="add c">+</span>
						新建文件夹
					</el-col>
					<el-col :span="6" v-else></el-col>
				</el-row>
			</div>
			<div class="listPart" v-if="listType==1">
				<ul class="listUl">
					<li class="el-row" v-for="(item, index) in list" :key='index'>
						<el-col :span='17' class="content ">
							<span class="icon-folder fz24 hover " @click="see(item.id,item.title)"></span>
							<span class="tit  fz16 hover" @click="see(item.id,item.title)">{{item.title}}</span>
						</el-col>
						<el-col :span='7' class="btn tar">
							<el-button class="r10" type="primary" @click="see(item.id,item.title)"> 查看 </el-button>
							<el-button class="r10" type="primary" @click="rename(item.id,'folder')">重命名</el-button>
							<el-button class="r10" type="primary" @click="del(item.id,item.title)">删除</el-button>

						</el-col>

					</li>
				</ul>
			</div>
			<div class="filesPart" v-else>
				<el-row class="center  tac" style="padding:20px 0">
					<el-col :span="5" :offset="1">
						<el-input class="custom" v-model="inputFileName" placeholder="请输入文件名称"></el-input>
					</el-col>
					<el-col :span="1">
						<el-button type="primary" icon="el-icon-search" circle></el-button>
					</el-col>
					<el-col :span="1" :offset="11">
						<el-button type="text" @click="back">返回</el-button>
					</el-col>
					<el-col :span="4">
						<el-button type="primary" icon="el-icon-plus" circle></el-button>

						上传文件
					</el-col>
				</el-row>
				<el-row class="listPart">
					<el-row class="listHead">
						<el-col :span="9">文件名称</el-col>
						<el-col :span="3">文件大小</el-col>
						<el-col :span="4">创建时间</el-col>
						<el-col :span="8">属性</el-col>
					</el-row>
					<el-row class="listBody">
						<el-row v-for="(item, index) in list" :key="index" class="lineRow">
							<el-col :span="9">
								<i class="icon-html fz28"></i>
								{{item.title}}</el-col>
							<el-col :span="3">{{item.size}}</el-col>
							<el-col :span="4">{{item.time}}</el-col>
							<el-col :span="8" class="operation fz18">
								<el-button type="text" class="fz18">下载</el-button>
								<el-button type="text" class="fz18" @click="rename(item.name,'file')">重命名</el-button>
								<el-button type="text" class="fz18" @click="del(item.id,item.title)">删除</el-button>
								<el-button type="text" class="fz18" @click="shareShow(item.id,item.title)">分享</el-button>
								<el-button type="text" class="fz18">取消分享</el-button>
							</el-col>
						</el-row>

					</el-row>
				</el-row>

			</div>
			<share-box :fileInfo='shareBoxProps' v-show="shareBoxShow" @show='isShowShare'></share-box>
		</div>
	</div>
</template>

<script>
//import aa from 'aa';
import shareBox from '@/components/dialog/shareBox';

export default {
	name: 'folderList',
	props: {
		list: Array,
		title: String,
	},
	data() {
		return {
			listType: 1,
			inputFileName: '',
			folderId: 0,
			folderName: '',
			fileId: 0,
			fileName: '',
			shareBoxProps: {},

			shareBoxShow: false,
		};
	},

	components: {
		shareBox,
	},

	methods: {
		see(id, name) {
			console.log(id);
			this.folderId = id;
			this.folderName = name;
			this.listType = 2;
		},
		shareShow(id, name) {
			this.fileId = id;
			this.fileName = name;
			this.shareBoxProps = {
				folderId: this.folderId,
				folderName: this.folderName,
				fileId: this.fileId,
				fileName: this.fileName,
				title: this.title,
			};
			this.shareBoxShow = true;
		},
		back() {
			this.listType = 1;
		},
		isShowShare(i) {
			this.shareBoxShow = i;
		},
		del(id, title) {
			let str = `此操作将删除该 ${title}, 是否继续?'`;
			this.$confirm(str, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!',
					});
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除',
					});
				});
		},
		rename(id, type) {
			this.$prompt('请输入新名称', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				// inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
				inputPattern: /\S/,
				inputErrorMessage: '文件名称格式不正确',
			})
				.then(({ value }) => {
					// this.$axios
					// 	.post('/user/' + type + '/rename', {
					// 		params: {
					// 			fid: id,
					// 			name: value,
					// 			token: this.GLBAL.token,
					// 		},
					// 	})
					// 	.then(res => {
					// 		console.log('ok');
					// 		const o = res.data;
					// 		this.$message({
					// 			type: 'success',
					// 			message: '修改成功，新名称为 ' + value,
					// 		});
					// 	})
					// 	.catch(err => {
					// 		console.log(err);
					// 	});
					this.$message({
						type: 'success',
						message: '修改成功，新名称为 ' + value,
					});
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '取消重命名',
					});
				});
		},
	},
};
</script>
<style lang='less' scoped>
.folderList {
	overflow: hidden;
	// padding: 0 25px;
	.headPart {
		padding: 15px 0;
		border-bottom: 3px solid #e8e8e8;
	}
	.listPart {
		padding: 10px 0 40px;
	}
}
.head {
	border-left: 2px solid #5499fe;
	padding-left: 10px;
	.headTitle {
		font-size: 22px;
	}
	.newFolder {
		text-align: right;
		padding-right: 40px;
		.add {
			display: inline-block;
			width: 20px;
			height: 20px;
			line-height: 18px;
			font-size: 18px;
			text-align: center;
			color: #fff;
			background: #3a81f5;
		}
	}
}
.listUl {
	li {
		padding: 5px 0;
		margin-top: 15px;
		.content {
			line-height: 40px;
			border-bottom: 2px solid rgba(45, 129, 211, 0.2);

			span {
				// line-height: 40px;
				vertical-align: middle;
				display: inline-block;
			}
		}
		.index {
			width: 18px;
			height: 18px;
			border: 4px solid #fff;
			background: #0a6cca;
			box-shadow: 4px 0px 9px rgba(10, 108, 202, 0.25);
		}
		.tit {
			padding-left: 10px;
		}
		// .btn{
		//     t
		// }
	}
}
.listHead {
	border-bottom: 2px solid #e8e8e8;
	padding: 15px 0;
	& > * {
		padding-left: 10px;
		font-size: 20px;
		border-left: 2px solid #5499fe;
	}
}
.listBody {
	.lineRow {
		padding: 10px 0;
		font-size: 18px;
		display: flex;
		align-items: center;
	}
	.operation {
		display: flex;
		justify-content: space-between;
	}
}
</style>