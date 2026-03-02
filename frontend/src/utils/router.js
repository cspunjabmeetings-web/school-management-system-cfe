import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import RouterTest from "../components/RouterTest.vue";
import StudentsView from "../views/StudentsView.vue";
import FeesView from "@/views/FeesView.vue";
import FeesDataView from "@/views/FeesDataView.vue";
import StudentsViewOld from "@/views/StudentViewOld.vue";
import PlaceholderView from "@/views/PlaceholderView.vue";
import path from "path";

import DashboardLayout from "../layouts/DashboardLayout.vue";

const routes = [
  { path: "/", component: Home, redirect: "/dashboard/students" },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      { path: "", component: Home, redirect: "students" },
      { path: "home", component: Home },
      { path: "students", component: StudentsView },
      { path: "router", component: RouterTest },
      { path: "fees", component: FeesView },
      { path: "fees-data", component: FeesDataView },
      { path: "old-students", component: StudentsViewOld },
      // placeholder routes for other menu items
      { path: "staff", component: PlaceholderView, props: { title: 'Staff' } },
      { path: "academic-years", component: PlaceholderView, props: { title: 'Academic Years' } },
      { path: "classes", component: PlaceholderView, props: { title: 'Classes' } },
      { path: "sections", component: PlaceholderView, props: { title: 'Sections' } },
      { path: "enrollments", component: PlaceholderView, props: { title: 'Enrollments' } },
      { path: "fee-types", component: PlaceholderView, props: { title: 'Fee Types' } },
      { path: "fee-invoices", component: PlaceholderView, props: { title: 'Fee Invoices' } },
      { path: "fee-payments", component: PlaceholderView, props: { title: 'Fee Payments' } },
      { path: "configurations", component: PlaceholderView, props: { title: 'Configurations' } },
      { path: "jobs", component: PlaceholderView, props: { title: 'Jobs' } },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
