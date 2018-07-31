<template>
    <div id='app'>
        <el-container>
            <!-- <el-header style="display:none">
            </el-header> -->
            <el-main class="main">
                <router-view/>
                
            </el-main>
            <el-footer class="footer">
                <footer-part></footer-part>
            </el-footer>
        </el-container>
    </div>
</template>

<script>

import footerPart from '@/components/layout/footerPart';

export default {
	name: 'App',
	components: {
		
		footerPart,
    },
    created () {
       
        
        //  this.$axios.get('course/all',{
            
        // })
        // .then(res=>{
        //     console.log('ok');
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
    },
    mounted(){
        // this.$axios.get('http://api.douban.com/v2/movie/top250',{
            
        // })
        // .then(res=>{
        //     console.log(res);     
        //     console.log('ok');
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
        // this.$axios.get('/users/johnny',{
            
        // })
        // .then(res=>{
        //     console.log('ok');
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
    }
    
};
</script>

<style lang='less'>
#app {
	font-family:MicrosoftYaHei;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	
	// margin-top: 60px;
}
.footer,.main{
    padding: 0;
}

</style>
