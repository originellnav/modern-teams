export default {
  title: "Companies",
  name: "companies",
  type: "document",
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string",
    },
    {
      title: "Heading",
      name: "homepageHeading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Subheading",
      name: "homepageSubheading",
      type: "array",
      description: "Add/delete/edit/re-order sub-heading items.",
      of: [
        {
          type: "string",
          name: "subheadingItem",
        },
      ],
    },
  ],
};
