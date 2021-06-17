export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Front-End requires a slug to be generated to display page.",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
