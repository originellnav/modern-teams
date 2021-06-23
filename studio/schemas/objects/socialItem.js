import { MdLink } from "react-icons/md";

export default {
  name: "socialItem",
  type: "object",
  title: "SocialItem",
  icon: MdLink,
  fields: [
    {
      name: "icon",
      type: "image",
      title: "Icon",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "url",
      type: "url",
      title: "Social Media URL",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "icon",
    },
  },
};
