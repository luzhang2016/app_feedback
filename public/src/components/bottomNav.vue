<template>
    <div class="bottomNav">
        <div class="bottomBar">
            <router-link :to='link1'>
                <i :class='icon1' aria-hidden="true" class="logo"></i><span>{{msg1}}</span>
            </router-link>
        </div>
        <div class="bottomBar">
            <router-link :to="link2">
                <i :class='icon2' aria-hidden="true" class="logo"></i><span>{{msg2}}</span>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        msg1: {
            default: '全部问题'
        },
        icon1: {
            default: "fa fa-bars"
        },
        link1: {
            default: "/all"
        },
        msg2: {
            default: '意见反馈'
        },
        icon2: {
            default: "fa fa-envelope-o"
        },
        link2: {
            default: "/submit"
        }
    }
}
</script>
<style lang="scss">
.bottomNav {
    position: fixed;
    background: white;
    width: 100%;
    height:40px;
    display: flex;
    z-index: 500;
    bottom: 0;
    border-top: 1px solid #E6E3E6;
    .bottomBar {
        width: 50%;
        font-size: 16px;
        text-align: center;
        padding: 10px 5px 6px 0;
        .logo {
            margin: 0 10px 0 -10px;
        }
    }
}
</style>
