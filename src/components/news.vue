<template>
    <div id="newsContent" >
        <span>{{title}}</span>
        <ul id="list">
            <li v-for="item in api.items" v-link="" v-on:error="err($event)">
                <span>
                    {{item.title}}
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
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
                        this.$data.api.list = response;
                        return response.json();
                    })
                    .then((list) => {
                        let tmpList = list.slice(0,4);
                        tmpList.map((i) => {
                            this.$http.get(itemUrl + i + '.json?print=pretty')
                                .then((response) => {
                                    this.$data.api.items.push(response.data);
                                    console.log(this.$data.api.items);
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
        }
    }
</script>
