import Vue from "vue";
import Router from "vue-router";
import Resource from "vue-resource";
import app from "./components/app.vue";
import index from "./components/index.vue";
import news from "./components/news.vue";
import comments from "./components/comments.vue";
import shows from "./components/shows.vue";
import asks from "./components/asks.vue";
import jobs from "./components/jobs.vue";
import submits from "./components/submits.vue";

Vue.use(Router);
Vue.use(Resource);
const router = new Router({hashbang: false});
router.map({
    '/index':{
        component:index
    },
    '/new':{
        component:news
    },
    '/comments':{
        component:comments
    },
    '/show':{
        component:shows
    },
    '/ask':{
        component:asks
    },
    '/job':{
        component:jobs
    },
    '/submit':{
        component:submits
    }
});

router.redirect({
    "*": "/index"
});

router.start(app,"app");
