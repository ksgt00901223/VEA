<!-- 文件夹的列表 -->
<template>
	<div class="por viewsBox" style="padding-bottom:65px">

		<div class='folderList newFolder  p020'>
			<div class="headPart">
				<el-row class="head center">
					<el-col :span='18' class="headTitle">
						我的课件-{{title}}
					</el-col>
					<el-col :span="6" class="fz14 newFolder hover" v-if="listType==1">

						<span @click="addFolderTip()">
							<i class="el-icon-plus add c"></i>
							新建文件夹
						</span>

					</el-col>
					<el-col :span="6" v-else></el-col>
				</el-row>
			</div>
			<div class="listPart" v-if="listType==1">
				<ul class="listUl">
					<li class="el-row vcenter" v-for="(item, index) in folderList" :key='index'>
						<el-col :span="1">
							<span class="icon-folder fz24 hover " @click="see(item.id,item.name)"></span>
						</el-col>
						<el-col :span='16' class="content ">
							<span class="tit  fz16 hover" @click="see(item.id,item.name)">{{item.name}}</span>
						</el-col>
						<el-col :span='7' class="btn tar">
							<el-button class="r10" type="primary" @click="see(item.id,item.name)"> 查看 </el-button>
							<el-button class="r10" type="primary" @click="renameTip(item.id,'folder')">重命名</el-button>
							<el-button class="r10" type="primary" @click="delTip(item.id,item.name,1)">删除</el-button>
						</el-col>
					</li>
				</ul>
			</div>
			<div class="filesPart" v-else>
				<el-row class="  tac" style="padding:20px 0">
					<el-col :span="4">
						<el-upload class="upload-demo" ref='fileUpload' :limit="1" :on-exceed='exceed' :action="uploadUrl" :before-upload='beforeFileUpload' :on-success='fileUploadSuccess' :on-change="handleChange" :file-list="uploadFileList">
							<el-button size="small" type="primary">上传文件</el-button>
							<div slot="tip" class="el-upload__tip">单次上传1个文件</div>
						</el-upload>
					</el-col>
					<el-col :span="1" :offset="11">
						<el-button type="text" @click="back">返回</el-button>
					</el-col>
					<el-col :span="5" :offset="1">
						<el-input class="custom" v-model="inputFileName" placeholder="请输入文件名称"></el-input>
					</el-col>
					<el-col :span="1">
						<el-button type="primary" icon="el-icon-search" circle @click="searchFile"></el-button>
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
						<el-row v-for="(item, index) in fileList" :key="index" class="lineRow">
							<el-col :span="1">
								<i :class="item.file_type|fileType" class="fz36"></i>
							</el-col>
							<el-col :span="9" class="break" style="padding-left:5px">

								{{item.name}}</el-col>
							<el-col :span="3">{{item.size}}</el-col>
							<el-col :span="4">{{item.created_at}}</el-col>
							<el-col :span="8" class="operation fz18">
								<el-button type="text" class="fz18">
									<a :href="item.url" style="color:#409EFF">
										下载</a>
								</el-button>
								<el-button type="text" class="fz18" @click="renameTip(item.id,'file')">重命名</el-button>
								<el-button type="text" class="fz18" @click="delTip(item.id,item.name,2)">删除</el-button>
								<el-button type="text" class="fz18" v-if="item.is_share" @click="cancelShare(item.id,item.is_share)">取消分享</el-button>
								<el-button type="text" class="fz18" @click="shareShow(item.id,item.name) " v-else>分享</el-button>

							</el-col>
						</el-row>

					</el-row>
				</el-row>

			</div>
			<share-box :fileInfo='shareBoxProps' v-show="shareBoxShow" @show='isShowShare'></share-box>
		</div>
		<div class="poa tac" style="width:100%;bottom:30px">
			<el-pagination background layout="prev, pager, next" :page-size='15' :total="pageTotal" @current-change="handleCurrentChange" :current-page='currentPage'>
			</el-pagination>
		</div>
	</div>
</template>

<script>
import shareBox from '@/components/dialog/shareBox';

export default {
	name: 'folderList',

	data() {
		return {
			listType: 1, //查看与返回
			inputFileName: '', //搜索
			folderId: 0, //文件夹id
			folderName: '', //文件夹名字
			fileId: 0, //文件id
			fileName: '', //文件名字

			shareBoxProps: {}, //分享弹窗数据
			shareBoxShow: false, //分享弹框

			pageTotal: 1,
			currentPage: 1,

			folderList: [],
			fileList: [],

			uploadFileList: [], //上传文件列表
			uploadUrl: '', //上传url
			qiniuToken: '', //七牛token

			myCaseType: 0,
			title: '',
		};
	},

	components: {
		shareBox,
	},
	watch: {
		$route: function(to, from) {
			console.log('change' + sessionStorage.myCaseType);
			this.myCaseType = sessionStorage.myCaseType;
			this.title = sessionStorage.myCaseTitle;
			this.listType = 1;
			this.getFolderList();
		},
		pageTotal() {
			// console.log(this.pageTotal);
			if (!this.pageTotal) {
				this.pageTotal = 1;
			}
		},
	},
	created() {
		this.myCaseType = sessionStorage.myCaseType;
		this.title = sessionStorage.myCaseTitle;
		console.log(this.myCaseType);
		this.getFolderList();

		//获取上传
		this.$axios
			.get('/qiniu/uploadToken', {})
			.then(res => {
				const o = res.data;
				this.qiniuToken = o.data;
				this.uploadUrl = 'https://upload-z0.qiniup.com?token=' + this.qiniuToken;
				// console.log(this.qiniuToken);
			})
			.catch(err => {
				console.log(err);
			});
	},
	methods: {
		handleChange(file, fileList) {
			console.log('不知道干吗用的');
			console.log(fileList);
		},
		beforeFileUpload() {
			console.log(this.uploadFileList);
		},
		fileUploadSuccess(res, file) {
			console.log('上传成功时');
			console.log(file, file.name, file.size, file.raw.type);
			let size = '';
			let type = 0;
			if (file.size >= 1024 && file.size < 1024 * 1024) {
				size = (file.size / 1024).toFixed(2) + 'K';
			} else if (file.size >= 1024 * 1024 && file.size < 1024 * 1024 * 1024) {
				size = (file.size / 1024 / 1024).toFixed(2) + 'M';
			} else if (file.size >= 1024 * 1024 * 1024) {
				size = (file.size / 1024 / 1024 / 1024).toFixed(2) + 'G';
			} else {
				size = file.size + 'B';
			}
			if (file.raw.type.indexOf('word') != -1) {
				type = 1;
			} else if (file.raw.type.indexOf('powerpoint') != -1) {
				type = 2;
			} else if (file.raw.type.indexOf('excel') != -1) {
				type = 3;
			} else if (file.raw.type.indexOf('image') != -1) {
				type = 4;
			} else if (file.raw.type.indexOf('pdf') != -1) {
				type = 5;
			} else if (file.raw.type.indexOf('video') != -1) {
				type = 6;
			} else if (file.raw.type.indexOf('audio') != -1) {
				type = 7;
			} else {
				type = 0;
			}

			this.$axios
				.post('/user/file/create?token=' + this.GLOBAL.token, {
					name: file.name,
					size: size,
					fid: this.folderId,
					url: res.key,
					type: this.myCaseType,
					file_type: type,
				})
				.then(res => {
					const o = res.data;
					console.log(o.data);
					let msg = file.name + '上传成功';
					this.$refs.fileUpload.clearFiles();
					// this.getFileList(this.folderId);
					this.page(this.currentPage);
					this.$message({
						message: msg,
						type: 'success',
					});
				})
				.catch(err => {
					console.log(err);
				});
		},
		exceed() {
			this.$message({
				message: '单次上传仅能1个文件哦',
				type: 'warning',
			});
		},
		see(id, name) {
			//查看
			console.log(id);
			this.folderId = id;
			this.folderName = name;
			this.getFileList(id);
			this.listType = 2;
		},
		searchFile() {
			//搜索
			this.listType = 3;
			this.$axios
				.get('/user/file/search?token=' + this.GLOBAL.token, {
					params: {
						type: this.myCaseType,
						name: this.inputFileName,
					},
				})
				.then(res => {
					const o = res.data;
					console.log(o.data);
					this.fileList = o.data.data;
					this.currentPage = 1;
					this.pageTotal = o.data.total;
				})
				.catch(err => {
					console.log(err);
				});
		},
		page(page) {
			if (this.listType == 1) {
				this.$axios
					.get('/user/folder?token=' + this.GLOBAL.token, {
						params: {
							type: this.myCaseType,
							page: page,
						},
					})
					.then(res => {
						const o = res.data;
						// console.log(o.data);
						this.folderList = o.data.data;
					})
					.catch(err => {
						console.log(err);
					});
			} else if (this.listType == 2) {
				this.$axios
					.get('/user/file?token=' + this.GLOBAL.token, {
						params: {
							fid: this.folderId,
							page: page,
						},
					})
					.then(res => {
						const o = res.data;
						console.log(o.data);
						this.fileList = o.data.data;
					})
					.catch(err => {
						console.log(err);
					});
			} else if (this.listType == 3) {
				this.$axios
					.get('/user/file/search?token=' + this.GLOBAL.token, {
						params: {
							type: this.myCaseType,
							name: this.inputFileName,
							page: page,
						},
					})
					.then(res => {
						const o = res.data;
						console.log(o.data);
						this.fileList = o.data.data;
					})
					.catch(err => {
						console.log(err);
					});
			}
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.currentPage = val;
			this.page(val);
		},
		shareShow(id, name) {
			//分享框
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
		getFolderList() {
			//获取文件夹列表
			this.$axios
				.get('/user/folder', {
					params: {
						type: this.myCaseType,
						token: this.GLOBAL.token,
					},
				})
				.then(res => {
					const o = res.data;
					// console.log(o.data);
					this.folderList = o.data.data;
					this.pageTotal = o.data.total;
					// console.log(this.folderList);
				})
				.catch(err => {
					console.log(err);
				});
		},
		getFileList(id) {
			//获取文件列表
			this.$axios
				.get('/user/file', {
					params: {
						fid: id,
						token: this.GLOBAL.token,
					},
				})
				.then(res => {
					const o = res.data;
					this.fileList = o.data.data;
					this.pageTotal = o.data.total;
				})
				.catch(err => {
					console.log(err);
				});
		},
		addFolderTip() {
			//添加文件夹的弹框
			this.$prompt('请输入新建文件夹名称', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				inputPattern: /\S/,
				inputErrorMessage: '名称不能为空',
			})
				.then(({ value }) => {
					this.addFolder(value);
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '取消重命名',
					});
				});
		},
		addFolder(name) {
			//添加文件夹
			console.log('新增文件夹');
			this.$axios
				.post('/user/folder/create?token=' + this.GLOBAL.token, {
					type: this.myCaseType,
					pid: '',
					name: name,
				})
				.then(res => {
					const o = res.data;
					// console.log(o.code);
					if (o.code === 2000) {
						this.$message({
							type: 'success',
							message: '添加成功',
						});
						this.getFolderList();
					}
					// console.log(o.data);
				})
				.catch(err => {
					console.log(err);
				});
		},
		back() {
			//返回
			this.listType -= 1;
			if (this.listType == 1) {
				this.getFolderList();
				this.currentPage = 1;
			} else if (this.listType == 2) {
				this.inputFileName = '';
				this.currentPage = 1;

				this.getFileList(this.folderId);
			}
		},
		isShowShare(i) {
			//分享框显示
			this.shareBoxShow = false;
			console.log(i);
			if (i) {
				console.log(i);
				this.$axios
					.post('/user/share/resource?token=' + this.GLOBAL.token, {
						rid: this.fileId,
						type: this.myCaseType,
						name: this.fileName,
					})
					.then(res => {
						const o = res.data;
						console.log(o.data);
						this.getFileList(this.folderId);
						this.$message({
							message: '分享成功',
							type: 'success',
						});
					})
					.catch(err => {
						console.log(err);
					});
			} else {
				console.log(i);

				this.$message({
					message: '分享已取消',
				});
			}
		},
		delTip(id, title, type) {
			//删除提示
			let str = `此操作将删除该 ${title}, 是否继续?'`;
			this.$confirm(str, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.delete(id, type);
					console.log('删除');
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除',
					});
				});
		},
		delete(id, type) {
			//删除
			let url = ''; //根据type判断删除文件夹还是文件
			type == 1
				? (url = '/user/folder/del?token=' + this.GLOBAL.token)
				: (url = '/user/file/del?token=' + this.GLOBAL.token);
			this.$axios
				.post(url, {
					id: id,
				})
				.then(res => {
					const o = res.data;
					console.log(id);
					console.log('del=' + id + 'type=' + type);
					if (o.code == 2000) {
						type == 1 ? this.getFolderList() : this.getFileList(this.folderId);
						this.$message({
							type: 'success',
							message: '删除成功!',
						});
					}

					console.log(o.data);
				})
				.catch(err => {
					console.log(err);
				});
		},
		renameTip(id, type) {
			//重命名提示
			this.$prompt('请输入新名称', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				inputPattern: /\S/,
				inputErrorMessage: '文件名称格式不正确',
			})
				.then(({ value }) => {
					console.log('tip' + id);
					this.rename(id, type, value);
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '取消重命名',
					});
				});
		},
		rename(id, type, value) {
			//重命名
			console.log('this rename');
			console.log('id=' + id);
			this.$axios
				.post('/user/' + type + '/rename?token=' + this.GLOBAL.token, {
					fid: id,
					name: value,
				})
				.then(res => {
					console.log('ok');
					const o = res.data;
					if (o.code == 2000) {
						this.$message({
							type: 'success',
							message: '修改成功，新名称为 ' + value,
						});
						this.getFileList(id);
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		cancelShare(id) {
			//取消分享
			this.$confirm('是否取消分享该文件?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.$axios
						.post('/user/share/cancel?token=' + this.GLOBAL.token, {
							id: id,
							type: this.myCaseType,
						})
						.then(res => {
							const o = res.data;
							console.log(o.data);
							this.getFileList(this.folderId);
							this.$message({
								type: 'success',
								message: '取消分享成功!',
							});
						})
						.catch(err => {
							console.log(err);
						});
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '文件已变成可分享状态！',
					});
				});
		},
	},
	filters: {
		fileType(type) {
			switch (type) {
				case 1:
					return 'icon-word';
					break;
				case 2:
					return 'icon-PPT';
					break;
				case 3:
					return 'icon-excel';
					break;
				case 4:
					return 'icon-img1';
					break;
				case 5:
					return 'icon-pdf';
					break;
				case 6:
					return 'icon-video_file';
					break;
				case 7:
					return 'icon-File-Music';
					break;
				default:
					return 'icon-file';
					break;
			}
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
			line-height: 20px;
			font-size: 12px;
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