export default {
  title: "Home",
  name: "home",
  type: "document",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      title: "title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
