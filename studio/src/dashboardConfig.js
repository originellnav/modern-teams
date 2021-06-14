export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Contact developer if you see 'Failed' instead of 'Success' or 'Building.'",
              sites: [
                {
                  buildHookId: "60c212299d4ea42839d885c1",
                  title: "Sanity Studio ",
                  name: "modern-teams-studio-rqvsjw93",
                  apiId: "35f0dd5f-41b1-4ee9-80e9-0a2d28af1b6b",
                },
                {
                  buildHookId: "60c212294c455440555c86d8",
                  title: "Gatsby Front-End ",
                  name: "modern-teams-web",
                  apiId: "d272bde2-f807-4ad8-b48b-6d6a258f98a6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub Repo",
            value: "https://github.com/originellnav/modern-teams",
            category: "Code",
          },
          {
            title: "Front-End",
            value: "https://modern-teams-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto", width: "medium" } },
    {
      name: "document-list",
      options: {
        title: "Recent Blog Posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
