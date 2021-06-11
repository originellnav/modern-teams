export default {
  title: "Home",
  name: "home",
  type: "document",
  fields: [
    {
      title: "Icon Image Test",
      name: "iconImage",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
  ],
};
