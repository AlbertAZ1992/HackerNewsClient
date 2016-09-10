<template>
    <div id="appContainer">
        <navbar></navbar>
        <div id="contentContainer">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import navbar from "./navbar.vue";
    export default {
        name: "appContainer",
        el: function(){
            return "#appContainer";
        },
        components: {
            'navbar': navbar
        }
    }
</script>1·
<style src="../style/style.less" lang="less"></style>

