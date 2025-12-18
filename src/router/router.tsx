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
  () => import("@src/feature/achievement/AchievementsPageNew")
);
const ProjectsPage = lazy(() => import("@src/feature/project/ProjectsPageNew"));
const CareerPage = lazy(() => import("@src/feature/career/CareerPage"));
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
      { path: paths.career, element: <CareerPage /> },
      // { path: "/test", element: <TestPage /> },
    ],
  },
]);

export default router;
