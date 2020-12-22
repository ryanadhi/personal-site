import { lazy } from "react";
const routes = [
  {
    path: "/",
    component: lazy(() => import(/* webpackPrefetch: true */ "../pages/Home")),
    exact: true,
    isPrivate: false,
  },
  {
    path: "/technologies",
    component: lazy(() =>
      import(/* webpackPrefetch: true */ "../pages/Technologies")
    ),
    exact: true,
    isPrivate: false,
  },
  {
    path: "/projects",
    component: lazy(() =>
      import(/* webpackPrefetch: true */ "../pages/Projects")
    ),
    exact: true,
    isPrivate: false,
  },
  {
    path: "/timeline",
    component: lazy(() =>
      import(/* webpackPrefetch: true */ "../pages/Timeline")
    ),
    exact: true,
    isPrivate: false,
  },
  {
    path: "/404",
    component: lazy(() =>
      import(/* webpackPrefetch: true */ "../pages/NotFound")
    ),
    exact: true,
    isPrivate: false,
  },
];

export default routes;
