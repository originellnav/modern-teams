export default {
  name: "companyLinks",
  type: "object",
  title: "Company Media Links",
  fields: [
    {
      name: "icon",
      type: "image",
      title: "Icon",
    },
    {
      name: "linkDescriptor",
      type: "string",
      title: "Link Descriptor",
    },
    {
      name: "url",
      type: "url",
      title: "Link URL",
    },
  ],
  preview: {
    select: {
      title: "linkDescriptor",
      media: "icon",
    },
  },
};
