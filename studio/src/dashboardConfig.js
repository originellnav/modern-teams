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
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c212299d4ea42839d885c1",
                  title: "Sanity Studio",
                  name: "modern-teams-studio-rqvsjw93",
                  apiId: "35f0dd5f-41b1-4ee9-80e9-0a2d28af1b6b",
                },
                {
                  buildHookId: "60c212294c455440555c86d8",
                  title: "Blog Website",
                  name: "modern-teams-web",
                  apiId: "d272bde2-f807-4ad8-b48b-6d6a258f98a6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/originellnav/modern-teams",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://modern-teams-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
