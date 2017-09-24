<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{margin: 0;padding: 0; border: 0;}
body,html{-webkit-text-size-adjust: none;width: 100%;height: 100%;}
body{  background: #F0F0F2;}
a { 
   color:#2c3e50;outline: none;text-decoration: none;
   -webkit-tap-highlight-color: transparent;
   -webkit-touch-callout: none;
   -webkit-user-select: none;
  }
ol,ul, li { list-style: none; }
.cf:after,.cf:before {visibility:hidden; display:block; font-size:0; content:" "; clear:both; height:0;}
.cf{zoom:1;}
a,input,button{ outline:none; }
input,input:focus,input:active{user-select: text;}
.rt{float:right;}
.lf{float:left;}
#app {
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
