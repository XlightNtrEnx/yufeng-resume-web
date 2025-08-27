import { createBrowserRouter } from "react-router-dom";

import { paths } from "@src/router/paths";
import { MainLayout } from "@src/common/layouts/MainLayout";
import { EducationPage } from "@src/features/education/EducationPage";
import { AchievementsPage } from "@src/features/achievement/AchievementsPage";
import { HomePage } from "@src/features/home/HomePage";
import { ProjectsPage } from "@src/features/project/ProjectsPage";

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
      { path: paths.projects, element: <ProjectsPage /> },
    ],
  },
]);
export default router;
