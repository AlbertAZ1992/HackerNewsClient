<template>
    <div id="appContainer" v-bind:style="{height:containerHeight}" >
        <navbar name="Hacker News"></navbar>
        <div id="contentContainer"
            v-bind:style="{marginTop:contentContainerMarginTop,height:contentContainerHeight}">
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
        data: function() {
            return {
                height: 960,
                marginTop: 160
            }
        },
        components: {
            'navbar': navbar
        },
        computed: {
            contentContainerHeight: function() {
                return this.height + "px";
            },
            containerHeight: function() {
                return this.height + "px";
            },
            contentContainerMarginTop: function() {
                return this.marginTop + "px";
            }
        },
        beforeCompile: function() {
            this.$data.height = window.innerHeight;
        }
    }
</script>
<style src="../style/style.less" lang="less"></style>

