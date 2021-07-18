import React from "react";
import { Figure } from "./Figure";
import { Color } from "./Color";

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
  },
  marks: {
    color: Color,
  },
};

export default serializers;
