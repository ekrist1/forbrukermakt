import Vue from "vue";
import Router from "vue-router";
import Item from "./views/Item.vue";
import Reviews from "./views/Reviews.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/item/:category/:slug",
      name: "item",
      component: Item,
      props: (route) => ({
        text_color: route.query.textcolor,
        sub_text_color: route.query.subtextcolor,
        bg: route.query.bg,
        initial_title: route.query.title,
        icon_color: route.query.iconcolor
})
    },
    {
      path: "/reviews/:category/:slug",
      name: "reviews",
      component: Reviews,
      props: (route) => ({
        text_color: route.query.textcolor,
        sub_text_color: route.query.subtextcolor,
        bg: route.query.bg,
        initial_title: route.query.title,
        icon_color: route.query.iconcolor,
        score: route.query.score
})
    }
  ]
});
