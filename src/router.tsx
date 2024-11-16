import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@src/components";
import { LoginPage, HomePage, ProjectsPage, EducationPage } from "./pages";

export const paths = {
  home: "/",
  login: "/login",
  education: "/education",
  projects: "/projects",
};

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
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "education",
        element: <EducationPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);
export default router;
