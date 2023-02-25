import Analytics from "@/components/Analytics/Analytics";
import Layout from "@/layout/Layout";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Analytics></Analytics>,
      },
    ],
  },
]);

export default router;
