<template>
    <div class="allQuestions">
        <div class="allQuestions-wrapper">
            <span class="title">问题类型</span>
            <router-link :to="'/qas/'+item.uuid" v-for="(item,index) in allQuestions" :key="index">
                <cell :title="item.title"></cell>
                  <empty v-if="(index+1)%3==0 && index!==0"></empty>
            </router-link>
            <bottomNav msg1="使用说明" icon1="fa fa-cog" link1="/direction"></bottomNav>
        </div>
    </div>
</template>
<script>
import cell from '../components/cell'
import empty from '../components/empty'
import bottomNav from '../components/bottomNav'
export default {
    components: {
        cell,
        empty,
        bottomNav
    },
    mounted(){
        this.$plugin_api.getCategories().then((res) => {
            this.allQuestions = res.data;
        });
        ws.device.sendDataToHelpFeedback({data: '{"title":"全部问题"}'});
    },
    data() {
        return {
            allQuestions: [],
            a:11
        }
    },
}
</script>
<style lang="scss">
.allQuestions {
    .allQuestions-wrapper {
        padding-bottom:40px;
        .title {
            display: inline-block;
            font-size: 16px;
            height:45px;
            line-height: 45px;
            width: 70px;
            text-align: center;
            margin-left: 10px;
        }
    }
}
</style>
