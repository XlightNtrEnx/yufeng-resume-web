import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@src/components";
import { LoginPage, HomePage, ProjectsPage, EducationPage } from "./pages";

const publicPaths = {
  filesDir: {
    path: "/files/",
    educationMilestonesDir: {
      path: "/files/education_milestones/",
      alevelDir: {
        path: "/files/education_milestones/alevel/",
        opencertsDir: {
          path: "/files/education_milestones/alevel/opencerts/",
          pw: "alevel pw.opencert",
          main: "alevel.opencert",
        },
      },
      olevelDir: {
        path: "/files/education_milestones/olevel/",
        opencertsDir: {
          path: "/files/education_milestones/olevel/opencerts/",
          chinese: "olevel chinese.opencert",
          main: "olevel.opencert",
        },
      },
      psleDir: {
        path: "/files/education_milestones/psle/",
        opencertsDir: {
          path: "/files/education_milestones/psle/opencerts/",
          main: "1.opencert",
        },
      },
      sutdDir: {
        path: "/files/education_milestones/sutd/",
        transcriptsDir: {
          path: "/files/education_milestones/sutd/transcripts/",
          main: "overall.pdf",
        },
      },
      yissDir: {
        path: "/files/education_milestones/yiss/",
        transcriptsDir: {
          path: "/files/education_milestones/yiss/transcripts/",
          certificate: "certificate of completion.pdf",
          main: "transcript.pdf",
        },
      },
    },
  },
  projectsDir: {
    path: "/project-images/",
    term4InfosysAIDir: {
      path: "/project-images/term4-infosys-ai/",
    },
    term4InfosysAPIDir: {
      path: "/project-images/term4-infosys-api/",
    },
    webResumeDir: {
      path: "/project-images/web-resume/",
    },
    fpgaIntegrationWithElectricalComponentsDir: {
      path: "/project-images/FPGA-integration-with-electrical-components/",
    },
    mongoDir: {
      path: "/project-images/mongo/",
    },
    parcelEyeDir: {
      path: "/project-images/parcel-eye/",
    },
    samDir: {
      path: "/project-images/sam/",
    },
    catDogClassfierDir: {
      path: "/project-images/cat-dog-classifier/",
    },
    term4InfosysCloudDir: {
      path: "/project-images/term4-infosys-cloud/",
    },
    term4InfosysAIContainerizationDir: {
      path: "/project-images/term4-infosys-ai-containerization/",
    },
  },
};

export const paths = {
  home: "/",
  login: "/login",
  education: "/education",
  projects: "/projects",
  public: { ...publicPaths },
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
