<template>
    <div class="direction">
        <p class="title">全部问题</p>
        <router-link :to="'/qas/'+item.uuid" v-for="(item,index) in directions" :key="index">
            <cell :title="item.title"></cell>
        </router-link>
    </div>
</template>
<script>
import cell from '../components/cell'
export default {
    components: {
        cell
    },
    data() {
        return {
            directions: []
        }
    },
    mounted() {
        this.getDirections();
        ws.device.sendDataToHelpFeedback({data: '{"title":"使用说明"}'});
    },
    methods: {
        getDirections() {
            this.$plugin_api.getDirections().then(res => {
                this.directions = res.data;
            });
        }
    }
}
</script>
<style lang="scss">
.direction {
    .title {
        display: inline-block;
        font-size: 16px;
        height: 45px;
        line-height: 45px;
        width: 70px;
        margin-left: 10px;
    }
}
</style>
