<template>
    <div class="qas">
        <div class="qas-wrapper">
            <p class="title">常见问题</p>
            <router-link :to="'/qaDetail/'+item.uuid" v-for="(item,index) in qas" :key="index">
                <cell :title="item.title"></cell>
            </router-link>
        </div>
    </div>
</template>
<script>
import cell from '../components/cell'
export default {
    components: {
        cell,
    },
    mounted() {
        var uuid = this.$route.params.uuid;
        this.getName(uuid);
        this.getQas(uuid);
    },
    methods: {
        getName(uuid) {
            this.$plugin_api.getCategory(uuid).then((res) => {
                this.qaName = res.data.title;
                ws.device.sendDataToHelpFeedback({data: {"title":this.qaName}});
            });
        },
        getQas(uuid) {
            this.$plugin_api.getQas(uuid).then((res) => {
                this.qas = res.data;
            });
        }
    },
    data() {
        return {
            qas: [],
            qaName: ''
        }
    },
}
</script>
<style scoped lang="scss">
.qas {
    .qas-wrapper {
        .title {
            height:45px;
            line-height: 45px;
            padding: 0 10px;
            font-size: 16px;
        }
    }
}
</style>