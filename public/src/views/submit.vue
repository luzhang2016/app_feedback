<template>
    <div class="submit">
        <div class="input">
            <textarea placeholder="请输入您的问题或建议..." id="opinion" class="text" rows=10 cols=10></textarea>
        </div>
        <upload @image-info="get" :images="this.images"></upload>
        <p @click="openPicker" class="errorDetail">故障时间：{{errorTime}}</p>
        <mt-datetime-picker ref="picker" type="datetime" v-model="pickerValue" @confirm="handleConfirm" month-format="{value} 月" date-format="{value} 日" hour-format="{value}时" minuteFormat="{value}分" :endDate="this.now"></mt-datetime-picker>
        <div class="button">
            <button id="submit" class="button-icon" @click="submitOpinion">提交</button>
        </div>
    </div>
</template>
<script>
import upload from "../components/upload/upload"
import { Toast } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
export default {
    components: {
        upload,
        DatetimePicker
    },
    data() {
        return {
            now:new Date(),
            pickerValue:new Date(),
            errorTime: '',
            images: [],
        }
    },
    mounted(){
         ws.device.sendDataToHelpFeedback({data: '{"title":"意见反馈"}'});
    },
    methods: {
        submitOpinion: function () {
                let opinion = document.getElementById("opinion").value;
                if (!opinion) {
                    Toast("当前输入值为空");
                    return;
                }
                document.getElementById("submit").disabled=true;
                let myDate = new Date();
                let date = this.getTime(myDate);
                let images = this.images;
                let errortime = this.errorTime;
                let user=ws.biz.getUser();
                let user2=eval("("+user+")"); 
                this.$plugin_api.submit(opinion, date, user2.name, user2.phone, images, errortime).then(res => {
                    Toast('感谢您的宝贵建议！');
                    document.getElementById("opinion").value = '';
                    document.getElementById("submit").disabled=false;
                    this.errorTime = '';
                    let f = document.getElementsByClassName("image");
                    for (var i = f.length - 1; i >= 0; i--) {
                        f[i].remove();
                    }
                    this.images = [];
                }).catch(err => {
                    Toast("上传失败，请重试");
                });
            },
                getTime(e) {
                    let month = (e.getMonth() + 1) < 10 ? "0" + (e.getMonth() + 1) : (e.getMonth() + 1);
                    let day = e.getDate() < 10 ? "0" + e.getDate() : e.getDate();
                    let h = e.getHours() < 10 ? "0" + e.getHours() : e.getHours();
                    let min = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes();
                    let s = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds();
                    return e.getFullYear() + '-' + month + '-' + day + ' ' + h + ":" + min + ":" + s;
                },
                openPicker() {
                    this.$refs.picker.open();
                },
                handleConfirm() {
                    this.errorTime = this.getTime(this.pickerValue);
                },
                get(msg) {
                    this.images = msg;
                }
    }
    }
</script>
<style scoped lang="scss">
.submit {
    .input {
        text-align: center;
        padding: 15px 12px 0 12px;
        .text {
            resize: none;
            width: 100%;
            border: 1px solid #bbbbbb;
            font-size: 16px;
        }
    }
    .errorDetail {
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        border-top: 1px solid #bbbbbb;
        border-bottom: 1px solid #bbbbbb;
        background: #fff;
        font-size: 16px;
    }
    .button {
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        margin-top: 20px;
        .button-icon {
            height: 40px;
            width: 100%;
            background: #179623;
            color: #fff;
            border-radius: 4px;
            font-size: 17px;
        }
    }
}
</style>

