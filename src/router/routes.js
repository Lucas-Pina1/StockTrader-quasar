const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/home", component: () => import("src/pages/Home.vue") },
      {
        path: "/portfolio",
        component: () => import("src/pages/Portfolio.vue"),
      },
      { path: "/stocks", component: () => import("src/pages/Stocks.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
