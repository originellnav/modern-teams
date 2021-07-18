import React from "react";
export const Color = ({ mark, children }) => {
  return <span style={{ color: mark.hex }}>{children}</span>;
};
