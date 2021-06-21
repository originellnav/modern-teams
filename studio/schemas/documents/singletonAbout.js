export default {
  title: "About",
  name: "about",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "About Page Body",
      name: "aboutBody",
      type: "bodyPortableText",
      validation: (Rule) => Rule.required(),
    },
  ],
};
