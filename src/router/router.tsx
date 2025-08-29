import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@src/common/layout/MainLayout";
import { paths } from "@src/router/paths";

// Lazy-loaded pages
const LandingPage = lazy(() => import("@src/feature/landing/LandingPage"));
const EducationPage = lazy(
  () => import("@src/feature/education/EducationPage")
);
const AchievementsPage = lazy(
  () => import("@src/feature/achievement/AchievementsPage")
);
const ProjectsPage = lazy(() => import("@src/feature/project/ProjectsPage"));
const TestPage = lazy(() => import("@src/feature/test/TestPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
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
      { path: "/test", element: <TestPage /> },
    ],
  },
]);

export default router;
