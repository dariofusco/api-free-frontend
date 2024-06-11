import { createRouter, createWebHistory } from "vue-router";


import HomePage from "./pages/Home.vue";
import BlogPage from "./pages/Blog.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogPage
    }
]


const router = createRouter({

    history: createWebHistory(),

    routes
});


export { router };