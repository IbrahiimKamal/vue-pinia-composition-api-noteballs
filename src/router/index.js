import { createRouter, createWebHashHistory } from "vue-router";

import ViewNotes from "@/views/ViewNotes.vue";
import ViewStatus from "@/views/ViewStatus.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/status",
    name: "status",
    component: ViewStatus,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
