import { MdLink } from "react-icons/md";

export default {
  name: "navItem",
  type: "object",
  title: "NavItem",
  icon: MdLink,
  fields: [
    {
      name: "text",
      type: "string",
      title: "Text",
    },
    {
      name: "navItemUrl",
      type: "link",
      title: "Nav Item URL",
    },
  ],
};
