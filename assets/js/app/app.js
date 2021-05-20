import ProjectThumbnail from "./components/projectThumbnail.js";
import Testimonial from "./components/testimonial.js";
import db from "./db.js";

// 1. Define route components.
// These can be imported from other files
const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

window.route = VueRouter.useRoute();

const app = Vue.createApp({
  data() {
    return {
      db,
    };
  },
});
app.use(router);
app.component("project-thumbnail", ProjectThumbnail);
app.component("testimonial", Testimonial);
app.mount("#app");
