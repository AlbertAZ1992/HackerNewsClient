<template>
    <div id="appContainer">app</div>
    <div id="contentContainer">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "appContainer",
        el: function(){
            return "#appContainer";
        }
    }
</script>
<style src="../style/style.less" lang="less"></style>

