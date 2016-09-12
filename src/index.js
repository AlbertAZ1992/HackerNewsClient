import Vue from "vue";
import Router from "vue-router";
import Resource from "vue-resource";
import app from "./components/app.vue";
import news from "./components/news.vue";
import tops from "./components/tops.vue";
import shows from "./components/shows.vue";
import asks from "./components/asks.vue";
import jobs from "./components/jobs.vue";
import contents from "./components/contents.vue";
import users from "./components/users.vue";
import submits from "./components/submits.vue";

Vue.use(Router);
Vue.use(Resource);
const router = new Router({hashbang: false});
router.map({
    '/index':{
        component:news
    },
    '/new':{
        component:news
    },
    '/top':{
        component:tops
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
    '/contents':{
        component:contents
    },
    '/users':{
        component:users
    },
    '/submits':{
        component:submits
    }
});

router.redirect({
    "*": "/index"
});

router.start(app,"app");
