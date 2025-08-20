import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Unauthorized from "@/pages/unauthorized";
import Verify from "@/pages/Veryfy";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router"; // ✅ everything from react-router-dom
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout,role.superAdmin as TRole),
    children: [
      {
        index: true,
        element: <Navigate to="/admin/analytics"/>,
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    path: "/user",
    Component: withAuth(DashboardLayout,role.user as TRole),
    children: [...generateRoutes(userSidebarItems)],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify",
    Component: Verify,
  },
  {
    path: "/unauthorized",
    Component:Unauthorized,
  },
]);
