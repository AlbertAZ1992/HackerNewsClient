<template>
    <div id="navbarContainer">
        <nav class="navbar navbar-fixed-top hacker-navbar JS_main_nav normal-mode index">
            <div class="container-fluid">
                <a class="navbar-brand" v-link="'index'">Hacker News</a>
                <ul class="nav navbar-nav navbar-right">
                    <li v-for="item in navOption" v-bind:data-id="item.id">
                        <a v-link="">{{item.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </nav>
        <nav class="header-nav container">
            <a v-for="item in navOption">{{item.name}}</a>
        </nav>
    </div>
</template>
<script>
    export default {
        name: "navbar",
        el: function(){
            return "#navbarContainer";
        },
        data: function(){
            return {
                navOption: [
                    {
                        name:"new",
                        id:0
                    },
                    {
                        name:"comments",
                        id:1
                    },
                    {
                        name:"show",
                        id:2
                    },
                    {
                        name:"ask",
                        id:3
                    },
                    {
                        name:"job",
                        id:4
                    },
                    {
                        name:"submit",
                        id:5
                    }
                ]
            }
        }

    }
</script>
