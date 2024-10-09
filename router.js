import vue from "@vitejs/plugin-vue";
import routes from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";

vue.use(routes);

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },

]