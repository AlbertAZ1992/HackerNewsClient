<template>
    <div id="contentContent">
        <div class="article-content">
            <div class="entry">
                <header>
                    <div class="info-wrapper">
                        <h2 class="article-list-title">
                            <a v-link="{path:'/contents?id='+item.id}" v-show="item.title">{{item.title}}</a>
                            <a v-link="{path:'/contents?id='+item.id}" v-show="!item.title">{{item.type}}</a>
                        </h2>
                        <div class="article-meta">
                            <span class="article-time" datetime="" v-show="item.score">{{item.score}} {{ item.score > 1 ? 'points' : 'point' }}</span>
                            <span class="article-tags">
                                <a class="tag" v-link="{path:'/contents?id='+item.id}">{{item.time | momentFromNow}}</a>
                                <a class="tag" v-link="{path:'/users?id='+item.by}">{{item.by}}</a>
                            </span>
                        </div>
                    </div>
                </header>
                <section class="article-excerpt">{{item.text | excerpt '50'}}
                </section>
                <footer>
                    <div class="article-goback">
                        <a v-link="'/index'" title="GO BACK">« GOBACK</a>
                    </div>
                    <div class="article-readmore" v-show="item.url">
                        <a href="{{item.url}}" title="READ MORE">READ ORIGNAL »</a>
                    </div>
                </footer>
            </div>
        </div>
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
    import moment from "moment";
    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
    export default{
        name:"contents",
        el:function(){
            return "#contentContent";
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
                this.$http.get(itemUrl + id + '.json?print=pretty')
                    .then((response) => {
                        this.$data.item = response.data;
                });
            }
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
