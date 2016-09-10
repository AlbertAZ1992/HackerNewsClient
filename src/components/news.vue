<template>
    <div id="newsContent" >
        <span>{{title}}</span>
        <div class="hacker-article-list ">
            <article class="hacker-article-item txt" v-for="item in api.items" track-by="id" v-link="" v-on:error="err($event)">
                <header>
                    <div class="info-wrapper">
                        <h2 class="article-list-title">
                            <a href="{{item.url}}">{{item.title}}</a>
                        </h2>
                        <div class="article-meta">
                            <span class="article-time" datetime="">{{item.score}} {{ item.score > 1 ? 'points' : 'point' }}</span>
                            <span class="article-tags">
                                <a class="tag" href="">{{item.time | momentFromNow}}</a>
                                <a class="tag" href="">by {{item.by}}</a>
                            </span>
                        </div>
                    </div>
                </header>
                <section class="article-excerpt">{{item.text | excerpt '50'}}
                </section>
                <footer>
                    <div class="article-readmore">
                        <a href="item.url" title="READ MORE">READ MORE »</a>
                    </div>
                </footer>
            </article>
        </div>
    </div>
</template>
<script>
    import moment from "moment";
    const baseUrl = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";
    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";


    export default {
        name: "news",
        el: function(){
            return "#newsContent";
        },
        data: function() {
            return {
                msg: "article",
                api: {
                    list: [],
                    items: []
                },
                title: "NEW STORIES"
            }
        },
        route: {
            data: function() {
                this.$http.get(baseUrl)
                    .then((response) => {
                        this.$data.api.list = response.data;
                        return response.json();
                    })
                    .then((list) => {
                        let tmpList = list.slice(0,4);
                        tmpList.map((i) => {
                            this.$http.get(itemUrl + i + '.json?print=pretty')
                                .then((response) => {
                                    this.$data.api.items.push(response.data);
                                    // console.log(this.$data.api.items);
                                });
                        });

                    });
            }
        },
        methods: {
            err: function(event) {
                var _this = event.target;
                _this.style.visibility = "hidden";
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
            excerpt: function(vaule, formatString){

                return value.substr(0,Number(formatString));
            }
        }
    }
</script>
