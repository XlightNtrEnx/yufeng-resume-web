const pub = {
  achievementDir: {
    path: "/achievement",
    previewCardImagesDir: {
      path: "/achievement/preview-card-images",
      ai: "/achievement/preview-card-images/ai.jpg",
      android: "/achievement/preview-card-images/android.jpg",
      cloud: "/achievement/preview-card-images/cloud.jpg",
      crossPlatform: "/achievement/preview-card-images/cross-platform.jpg",
      cybersecurity: "/achievement/preview-card-images/cybersecurity.png",
      database: "/achievement/preview-card-images/database.jpg",
      docker: "/achievement/preview-card-images/docker.jpg",
      ee: "/achievement/preview-card-images/electrical-engineering.jpg",
      server: "/achievement/preview-card-images/server.jpg",
      web: "/achievement/preview-card-images/web.jpg",
    },
    term4InfosysAIDir: {
      path: "/achievement/term4-infosys-ai",
    },
    term4InfosysAPIDir: {
      path: "/achievement/term4-infosys-api",
    },
    webResumeDir: {
      path: "/achievement/web-resume",
    },
    fpgaIntegrationWithElectricalComponentsDir: {
      path: "/achievement/FPGA-integration-with-electrical-components",
    },
    mongoDir: {
      path: "/achievement/mongo",
    },
    parcelEyeDir: {
      path: "/achievement/parcel-eye",
    },
    samDir: {
      path: "/achievement/sam",
    },
    catDogClassfierDir: {
      path: "/achievement/cat-dog-classifier",
    },
    term4InfosysCloudDir: {
      path: "/achievement/term4-infosys-cloud",
    },
    term4InfosysAIContainerizationDir: {
      path: "/achievement/term4-infosys-ai-containerization",
    },
  },
  filesDir: {
    path: "/files",
    educationMilestonesDir: {
      path: "/files/education_milestones",
      alevelDir: {
        path: "/files/education_milestones/alevel",
        opencertsDir: {
          path: "/files/education_milestones/alevel/opencerts",
          pw: "alevel pw.opencert",
          main: "alevel.opencert",
        },
      },
      olevelDir: {
        path: "/files/education_milestones/olevel",
        opencertsDir: {
          path: "/files/education_milestones/olevel/opencerts",
          chinese: "olevel chinese.opencert",
          main: "olevel.opencert",
        },
      },
      psleDir: {
        path: "/files/education_milestones/psle",
        opencertsDir: {
          path: "/files/education_milestones/psle/opencerts",
          main: "1.opencert",
        },
      },
      sutdDir: {
        path: "/files/education_milestones/sutd",
        transcriptsDir: {
          path: "/files/education_milestones/sutd/transcripts",
          main: "overall.pdf",
        },
      },
      yissDir: {
        path: "/files/education_milestones/yiss",
        transcriptsDir: {
          path: "/files/education_milestones/yiss/transcripts",
          certificate: "certificate of completion.pdf",
          main: "transcript.pdf",
        },
      },
    },
  },
  iconsDir: {
    path: "/icons",
    gitHub: "/icons/github512.png",
    linkedIn: "/icons/linkedin2048.png",
    leetCode: "/icons/leetcode24.png",
    playButton: "/icons/play-button512.png",
    email: "/icons/email512.png",
    download: "/icons/download512.png",
  },
  meDir: {
    path: "/me",
    me: "/me/me810.png",
    mask: "/me/mask200.png",
  },
  imagesDir: {
    path: "/images",
    background: "/images/starry-sky.jpg",
  },
  projectDir: {
    path: "/project",
    catDogDir: {
      path: "/project/catdog",
      preview: "/project/catdog/preview.png",
    },
    resumeDir: {
      path: "/project/resume",
      preview: "/project/resume/preview.jpg",
    },
    parcelEyeDir: {
      path: "/project/parceleye",
      preview: "/project/parceleye/preview.jpg",
    },
    highLowDir: {
      path: "/project/highlow",
      preview: "/project/highlow/preview.png",
    },
    ascendaDir: {
      path: "/project/ascenda",
      preview: "/project/ascenda/preview.png",
    },
  },
};

export const paths = {
  home: "/",
  education: "/education",
  achievements: "/achievements",
  projects: "/projects",
  get public() {
    return pub;
  },
};
