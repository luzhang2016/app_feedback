<template>
    <div class="cell">
        <div class="celler" >
            <span>{{title}}</span>
            <i class="fa fa-angle-right rt" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type:String,
            default: ''
        }
    },
}
</script>

<style lang="scss">
.cell {
    height:45px;
    .celler {
        display: block;
        font-size: 16px;
        height:44px;
        padding: 0 15px;
        background: #fff;
        border-top: 1px solid #E6E3E6;
        span {
            display: inline-block;
            line-height: 45px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            width:280px;
        }
        i {
            vertical-align: middle;
            font-size: 20px;
            line-height: 45px;
        }
    }
}
</style>
