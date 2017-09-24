<template>
  <div class="hot-questions">
    <div class="top-wrapper">
      <mt-search style="height:100%;" v-model="value">
        <div class="mint-search-list"></div>
      </mt-search>
      <p class="title" v-show="!value">热门问题</p>
    </div>
    <div class="question-wrapper" :class="questionClass">
      <router-link :to="'/qaDetail/'+item.uuid"  class="questions-content" v-for="(item,index) in hots" :key="index">
        <cell :title="item.title"></cell>
      </router-link>
    </div>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import cell from '../components/cell'
import bottomNav from '../components/bottomNav'
export default {
  components: {
    cell,
    bottomNav
  },
  name: 'hello',
  data() {
    return {
      hots: [],
      value: '',
    }
  },
  watch: {
    value: function () {
      if (!this.value) {
        this.hot();
        return;
      }
      this.$plugin_api.getSearch(this.value).then(res => {
        this.hots = res.data;
      });
    },
  },
  created() {
    this.hot();
  },
  methods: {
    hot() {
      this.$plugin_api.getHot().then(res => {
        this.hots = res.data; 
      });
    }
  },
  computed:{
    questionClass:function(){
      if(!this.value) {
        return 'hot'
      }else{
        return 'search'
      }
    }
  },
  mounted(){
    ws.device.sendDataToHelpFeedback({data: '{"title":"帮助与反馈"}'});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.hot-questions {
  .top-wrapper {
    position: fixed;
    top: 0px;
    width: 100%;
    .mint-search {
      .mint-search-list {
        z-index: -100;
      }
    }
    .title {
      font-size: 16px;
      height:45px;
      line-height: 45px;
      padding-left:10px;
      background: #f0f0f2;
    }
  }
  .question-wrapper{
    padding-bottom: 40px;
  }
  .hot{
    padding:97px 0 29px 0;
  }
  .search{
    padding:52px 0 29px 0;
  }
}
</style>
