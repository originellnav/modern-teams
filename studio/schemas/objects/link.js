export default {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      name: "externalContent",
      description: "IMPORTANT",
      title:
        "Click to green position if this link is to an external (non-Modern Teams website) source.",
      type: "boolean",
    },
    {
      name: "callToAction",
      title: "Click to green position if this link is a Call To Action.",
      type: "boolean",
    },
    {
      name: "linkUrl",
      title: "Link URL",
      description:
        "For external links use full URL e.g. ‘https://google.com/’. For internal links use the page path e.g. ‘/about/’",
      type: "string",
    },
  ],
};
