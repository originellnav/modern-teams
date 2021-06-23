export default {
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    {
      name: "formText",
      type: "string",
      title: "Subscription Form Text",
    },
    {
      name: "socialItems",
      type: "array",
      title: "Social Media Links",
      description: "Add, delete, edit, and re-order social media links.",
      of: [{ type: "socialItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
