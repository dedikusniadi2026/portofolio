const portfolio = [
  {
    id: 0,
    projectName: "Telin",
    url: "#",
    image: "projects/telin.png",
    projectDetail: "wa chat boot",
    technologiesUsed: [
      {
        tech: "Angular 11",
      },
      {
        tech: "golang",
      },
      {
        tech: "postgresql",
      },
      {
        tech: "angular material",
      },
      {
        tech: "boostrap 5",
      },
    ],
  },
  {
    id: 0,
    projectName: "axonect",
    url: "#",
    image: "projects/noimage.png",
    projectDetail:
      "API Management System and electronics SIM for provider srilanka, Sorry, I can't display the screenshot because the project is internal and cannot be shared publicly",
    technologiesUsed: [
      {
        tech: "Angular 11",
      },
      {
        tech: "spring boot",
      },
      {
        tech: "postgresql",
      },
      {
        tech: "angular material",
      },
      {
        tech: "unit test in jest",
      },
      {
        tech: "python",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "widget accessibility",
    url: "#",
    image: "projects/noimage.png",
    projectDetail:
      "accessibility widget project from Axiata digital labs Sri Lanka, making widgets currently still on WordPress will later support various frameworks, Sorry, I can't display the screenshot because the project is internal and cannot be shared publicly",
    technologiesUsed: [
      {
        tech: "Javascript",
      },
      {
        tech: "CSS 3",
      },
      {
        tech: "HTML 5",
      },
      {
        tech: "JQuery",
      },
      {
        tech: "Tensorflow",
      },
    ],
  },
  {
    id: 0,
    projectName: "Eworking permit",
    url: "#",
    image: "projects/noimage.png",
    projectDetail:
      "A work permit and building access refer to the formal authorization and permissions required for an individual to enter and work within a specific building or facility. The work permit is usually granted by the building or site management, and it may involve submitting necessary documents, completing safety briefings, or adhering to certain protocols. Building access involves the physical ability to enter the premises, often controlled by security systems such as access cards, biometric scans, or security personnel. This process ensures that only authorized individuals can enter the building and perform their designated tasks.",
    technologiesUsed: [
      {
        tech: "Angular 11",
      },
      {
        tech: "golang",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "angular material",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "XL - Business As Usual Automation",
    url: "#",
    image: "projects/noimage.png",
    projectDetail: "internal project in XL Axiata",
    technologiesUsed: [
      {
        tech: "angular 8",
      },
      {
        tech: "golang",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "angular material",
      },
      {
        tech: "Boostrap",
      },
    ],
  },
  {
    id: 0,
    projectName: "ADA-WA-BSP",
    url: "#",
    image: "projects/noimage.png",
    projectDetail: "WA boot in ADA",
    technologiesUsed: [
      {
        tech: "angular 11",
      },
      {
        tech: "boostrap 4",
      },
      {
        tech: "html 5 and css 3",
      },
      {
        tech: "Angular Material",
      },
      {
        tech: "golang",
      },
    ],
  },
  {
    id: 0,
    projectName: "BAT (British American Tobacco)",
    url: "#",
    image: "projects/noimage.png",
    projectDetail: "project British American Tobacco ",
    technologiesUsed: [
      {
        tech: "Angular 8",
      },
      {
        tech: "boostrap 4",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Spring boot",
      },
      {
        tech: "Angular Material",
      },
    ],
  },
  {
    id: 1,
    projectName: "Point Of Sale",
    url: "#",
    image: "projects/noimage.png",
    projectDetail: "project pont of sale in restorant",
    technologiesUsed: [
      {
        tech: "reactjs",
      },
      {
        tech: "laravel",
      },
      {
        tech: "mysql",
      },
      {
        tech: "MUI",
      },
      {
        tech: "boosrtap",
      },
    ],
  },
  {
    id: 2,
    projectName: "Ayo Jakarta",
    url: "#",
    image: "projects/noimage.png",
    projectDetail: "mobile apps android and IOS in Ayo Jakarta",
    technologiesUsed: [
      {
        tech: "Flutter",
      },
      {
        tech: "codeigniter",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Flutter material",
      },
    ],
  },
  // {
  //     id: 2,
  //     projectName: "Culyte",
  //     url: "https://culyte.com",
  //     image: "projects/culyte.png",
  //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //     technologiesUsed: [
  //         {
  //             tech: "ReactJS"
  //         },
  //         {
  //             tech: "NodeJS"
  //         },
  //         {
  //             tech: "Ant Design"
  //         },
  //         {
  //             tech: "TailwindCSS"
  //         },
  //     ]
  // },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
