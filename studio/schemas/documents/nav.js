import { FcLink } from "react-icons/fc";

export default {
  name: "nav",
  type: "document",
  title: "Navigation",
  icon: FcLink,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "navItems",
      type: "array",
      title: "Navigation items",
      of: [{ type: "navItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
