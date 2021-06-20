export default {
  title: "Home",
  name: "home",
  type: "document",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
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
      of: [
        {
          type: "string",
          name: "subheadingItem",
        },
      ],
    },
  ],
};
