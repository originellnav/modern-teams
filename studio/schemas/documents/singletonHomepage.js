export default {
  title: "Home",
  name: "home",
  type: "document",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Featured Companies",
      name: "featured",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "company",
          },
        },
      ],
    },
    {
      title: "Subscription Form Text",
      name: "formText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
