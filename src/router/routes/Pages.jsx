import { lazy } from "react";

const PagesRoutes = [
  {
    path: "/main/dashboard",
    component: lazy(() => import("../../view/main/dashboard/ecommerce")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/error-page",
    component: lazy(() => import("../../view/pages/error")),
    layout: "FullLayout",
  },
];

export default PagesRoutes;
