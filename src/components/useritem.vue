<template>
    <div id="useritemContent" class="article-content">
        <div class="entry">
            <header>
                <div class="info-wrapper">
                    <h2 class="article-list-title">
                        <a v-link="{path:'/users?id='+item.id}">{{item.id}}</a>
                    </h2>
                    <div class="article-meta">
                        <span class="article-time" datetime="">karma: {{item.karma}} </span>
                        <span class="article-time" datetime="">created: {{item.created | momentFromNow}}</span>
                        <span class="article-tags">
                            <a v-link="{path:'/submits?id='+item.id}" class="tag">{{item.id}}'s submissions</a>
                        </span>
                    </div>
                </div>
            </header>
            <section class="article-excerpt">{{item.about | excerpt '50'}}
            </section>
            <footer>
                <div class="article-goback">
                    <a v-link="'/index'" title="GO BACK">« GOBACK</a>
                </div>
            </footer>
        </div>
    </div>

</template>
<script>
    import moment from "moment";
    export default {
        name: "useritem",
        el: function(){
            return "#useritemContent";
        },
        props: ["item"],
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

