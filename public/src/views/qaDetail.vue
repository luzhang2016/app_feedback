<template>
    <div class="qa">
        <div class="qa-wrapper">
            <p class="qatitle">{{qaDetail.title}}</p>
            <div v-html="qaDetail.content" class="qaContent">{{qaDetail.content}}</div>
        </div>
        <div class="support-wrapper" v-show="relateQA">
            <p class="support-title">相关问题</p>
            <router-link :to="'/qaDetail/'+relateQA.uuid" replace>
                <cell :title="relateQA.title"></cell>
            </router-link>
        </div>
        <div class="support-wrapper">
            <p class="support-title">你可能还需要</p>
            <router-link to="/submit">
                <cell title="意见反馈"></cell>
            </router-link>
        </div>
    </div>
</template>
<script>
import cell from "../components/cell"
export default {
    components: {
        cell
    },
    mounted() {
        this.fetchData();

    },
    methods: {
        fetchData() {
            var uuid = this.$route.params.uuid;
            this.$plugin_api.getQa(uuid).then((res) => {
                this.qaDetail = res.data;
                ws.device.sendDataToHelpFeedback({data: {"title":this.qaDetail.title}});
                this.$plugin_api.getRelate(this.qaDetail.relatedQaID).then((res) => {
                    this.relateQA = res.data;
                });
            });
        },
    },
    watch: {
        "$route": 'fetchData',
    },
    data() {
        return {
            qaDetail: {},
            relateQA: {}
        }
    },
}
</script>
<style lang='scss'>
.qa {
    font-size: 16px;
    .qa-wrapper {
        .qatitle {
            padding: 13px 10px;
            border-bottom: 1px solid #E6E3E6;
            background-color: #fff;
            font-weight: bold;
            font-size:17px;
        }
        .qaContent {
            background-color: #fff;
            padding: 5px 4px;
            p{
                margin-bottom:10px;
                img{
                display:block;
                width:220px;
                height:340px;
                margin:0 auto;
                }
              }
            }
        }
    .support-wrapper {
        .support-title {
            height:45px;
            line-height: 45px;
            padding: 0 15px;
        }
    }
}
</style>