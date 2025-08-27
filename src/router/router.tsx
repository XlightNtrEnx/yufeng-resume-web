import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@src/common/layouts/MainLayout";
import { paths } from "@src/router/paths";

// Lazy-loaded pages
const HomePage = lazy(() => import("@src/features/home/HomePage"));
const EducationPage = lazy(
  () => import("@src/features/education/EducationPage")
);
const AchievementsPage = lazy(
  () => import("@src/features/achievement/AchievementsPage")
);
const ProjectsPage = lazy(() => import("@src/features/project/ProjectsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: paths.education,
        element: <EducationPage />,
      },
      {
        path: paths.achievements,
        element: <AchievementsPage />,
      },
      {
        path: paths.projects,
        element: <ProjectsPage />,
      },
    ],
  },
]);

export default router;
