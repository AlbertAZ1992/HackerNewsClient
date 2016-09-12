<template>
    <div id="newsContent"
            v-bind:style="{overflow:'auto',height:'100%'}"
            v-on:scroll="scroll($event)">
        <div class="headerText">{{headerText}}</div>
        <div class="hacker-article-list" >
            <articleitem v-for="item in api.items | orderBy 'time' " :item="item"></articleitem>
        </div>
    </div>
</template>
<script>
    import articleitem from "./articleitem.vue";
    import moment from "moment";

    const userUrl = "https://hacker-news.firebaseio.com/v0/user/";
    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";


    export default {
        name: "news",
        el: function(){
            return "#newsContent";
        },
        data: function() {
            return {
                headerText: "",
                api: {
                    list: [],
                    items: []
                },
                listNumber: 0,
                listHeight: 0,
                def: 100

            }
        },
        route: {
            data: function() {
                const query=this.$route.query;
                const id = query.id;
                this.$data.headerText = id + "\'"+ "submissions";
                this.$http.get(userUrl + id + '.json?print=pretty')
                    .then((response) => {
                        this.$data.api.list = response.data.submitted;
                        return response.data.submitted;
                    })
                    .then((list) => {
                        let tmpList = list.slice(0,this.$data.listNumber);
                        tmpList.map((i) => {
                            this.$http.get(itemUrl + i + '.json?print=pretty')
                                .then((response) => {
                                    this.$data.api.items.push(response.data);
                                });
                        });

                    });
            }
        },
        methods: {
            add: function() {
                let i = this.$data.listNumber++;
                this.$http.get(itemUrl + this.$data.api.list[i] + '.json?print=pretty')
                                .then((response) => {
                                    this.$data.api.items.push(response.data);
                                });
            },
            scroll: function(event) {
                let _this = event.target;
                let scrollTop = _this.scrollTop;
                let listHeight = document.querySelector(".hacker-article-list").scrollHeight;
                // console.log(window.screen.height,listHeight,scrollTop);
                if(scrollTop + window.screen.height + this.$data.def >= listHeight){
                    this.add();
                }
            }
        },
        components: {
            "articleitem": articleitem
        },
        beforeCompile: function() {
            this.$data.listNumber = Math.ceil(window.innerHeight/100);
        }
    };
</script>
