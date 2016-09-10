import Vue from "vue";
import Router from "vue-router";
import Resource from "vue-resource";
import app from "./components/app.vue";
import index from "./components/index.vue";

Vue.use(Router);
Vue.use(Resource);
const router = new Router();
router.map({
    '/index':{
        component:index
    }
});

router.redirect({
    "*": "/index"
});

router.start(app,"app");
