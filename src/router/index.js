import { createRouter, createWebHistory } from "vue-router"
import AboutView from "../views/AboutView.vue"
import HomeView from "../views/HomeView.vue"
import JobsView from "../views/Jobs/JobsView.vue"
import JobDetails from "../views/Jobs/JobDetails.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: JobsView
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true
  },
  // Redirect
  {
    path: "/all-jobs", //old route
    redirect: "/jobs"
  },
  // Not Found
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
