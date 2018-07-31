<!-- 导航 -->
<template>
  <div class="navTop">{{navMsg}}</div>
</template>

<script>
export default {
  data () {
    return {
        navMsg:"这是导航"
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
.navTop{
    height: 100px;
    background-color: #f00;
}
</style>