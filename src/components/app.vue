<template>
    <div id="appContainer" v-bind:style="{height:containerHeight}">
        <navbar name="Hacker News"></navbar>
        <div id="contentContainer"
            v-on:scroll="scroll($event)"
            v-bind:style="{height:contentContainerHeight}">
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
                height: 960
            }
        },
        components: {
            'navbar': navbar
        },
        computed: {
            contentContainerHeight: function() {
                return (this.height - 60) + "px";
            },
            containerHeight: function() {
                return this.height + "px";
            }
        },
        methods: {
            scroll: function(event) {
            }
        },
        beforeCompile: function() {
            this.$data.height = window.innerHeight;
        }
    }
</script>1·
<style src="../style/style.less" lang="less"></style>

