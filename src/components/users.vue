<template>
    <div id="usersContent">
        <useritem :item="item"></useritem>
        <!-- Footer -->
        <footer class="hacker-footer clearfix ">
            <section class="copyright"><a href="">{{copyright}}</a></section>
            <section>Designed by <a href="authorurl"><span>@<span>{{author}}</a>with<a href="toolurl">{{tool}}</a>
            </section>
            <section class="poweredby ">Theme by<a href="repourl">{{repo}}</a></section>
        </footer>

    </div>
</template>
<script>
    import useritem from "./useritem.vue";
    import moment from "moment";
    const userUrl = "https://hacker-news.firebaseio.com/v0/user/";
    export default{
        name:"users",
        el:function(){
            return "#usersContent";
        },
        data:function(){
            return {
                item:{},
                copyright: "© 2016",
                author: " Albert ",
                authorurl: "http://deacyn.com",
                tool: "HN API",
                toolurl: "https://github.com/HackerNews/API",
                repo: "HackerNewsClient",
                repourl: "https://github.com/Deacyn/HackerNewsClient"
            }
        },
        route:{
            data:function(){
                const query=this.$route.query;
                const id = query.id;
                this.$http.get(userUrl + id + '.json?print=pretty')
                    .then((response) => {
                        this.$data.item = response.data;
                });
            }
        },
        components: {
            "useritem": useritem
        },
        filters: {
            moment: function (value, formatString) {
                formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
                return moment(value).format(formatString);
            },
            momentFromNow: function (value, formatString) {
                formatString = formatString || '"YYYY';
                return moment(value, formatString).fromNow();
            },
            excerpt: function(value = "", formatString){
                return value.substr(0,Number(formatString));
            }
        }
    }
</script>
