<template>
    <div id="upload">
        <div class="add">
            <input type="file" id="chooseFile" @change="onFileChange" multiple style="display: none;">
        </div>
        <div class="images-wrapper" id="remove">
            <div class="image" v-for="(image,index) in images" :key="index" v-show="images.length" @click="previewImage(image)">
                <img :src="image">
                <span class="delete" @click.stop='delImage(index)'>
                    <i class="fa fa-times" aria-hidden="true"></i>
                </span>
            </div>
            <div class="cross" @click="addPic">
                <i class="fa fa-plus fa-3x" aria-hidden="true"></i>
            </div>
        </div>
        <div class="add-preview" v-show="isPreview" @click="closePreview">
            <span class="verticalAlign"></span>
            <div class="img">
                <img :src="previewImg">
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            pickerValue: '',
            isPreview: false,
            previewImg: ''
        }
    },
    props: {
        images: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    watch: {
        images: function () {
            this.$emit('image-info', this.images);
        }
    },
    methods: {
        addPic(e) {
            e.preventDefault();
            // $('input[type=file]').trigger('click');
            document.getElementById('chooseFile').click()
            return false;
        },
        onFileChange(e) {
            
            var files = e.target.files || e.dataTransfer.files;
            for(let i=0;i<files.length;i++){  //判断文件类型为图片
                if (!/\/(?:jpeg|png|gif)/i.test(files[i].type)){
                    Toast("请上传图片格式的文件");
                    return;
                }
            }
            if (!files.length) return;
            if (files.length > 5) {
                Toast("一次不能上传超过6个文件")
                return;
            }
            this.createImage(files);

        },
        createImage(file) {
            let vm = this;
            for (let i = 0; i < file.length; i++) {
                lrz(file[i], { width: 480 }).then(function (rst) {
                    vm.images.push(rst.base64);
                    return rst;
                }).always(function () {
                    // 清空文件上传控件的值
                    e.target.value = null;
                });
            }
        //     if (typeof FileReader === 'undefined') {
        //         alert('您的浏览器/手机不支持图片上传');
        //         return false;
        //     }
        //     var image = new Image();
        //     var vm = this;
        //     var leng = file.length;
        //     for (var i = 0; i < leng; i++) {
        //         var reader = new FileReader();
        //         reader.readAsDataURL(file[i]);
        //         reader.onload = function (e) {
        //             vm.images.push(e.target.result);
        //         };
        //     }
        },
        delImage: function (index) {
            this.images.splice(index, 1);
        },
        removeImage: function (e) {
            this.images = [];
        },
        previewImage: function (image) {
            this.isPreview = true;
            this.previewImg = image;
        },
        closePreview: function () {
            this.isPreview = false;
            this.previewImg = "";
        },
    }
}
</script>
<style lang="scss">
#upload {
    .images-wrapper {
        margin: 0 19px;
        .image {
            margin: 20px 11px 19px 0;
            display: inline-block;
            position: relative;
            width: 55px;
            height: 55px;
            img {
                width: 55px;
                height: 55px;
            }
            .delete {
                position: absolute;
                right: 1px;
                top: -3px;
                color: red;
            }
        }
        .cross {
            display: inline-block;
            margin: 20px 11px 19px 0;
            border: 1px solid #bbbbbb;
            vertical-align: top;
            width: 53px;
            height: 53px;
            i {
                padding-top: 5px;
                padding-left: 8px;
                color: #bbbbbb;
            }
        }
    }
    .add-preview {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: black;
        text-align: center;
        font-size: 0;
        .verticalAlign {
            vertical-align: middle;
            display: inline-block;
            height: 100%;
            width: 1px;
            margin-left: -1px;
        }
        .img {
            display: inline-block;
            width: 100%;
            vertical-align: middle;
        }
    }
}
</style>
