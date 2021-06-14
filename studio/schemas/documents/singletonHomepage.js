export default {
  title: "Home",
  name: "home",
  type: "document",
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
        },
      ],
    },
  ],
};
