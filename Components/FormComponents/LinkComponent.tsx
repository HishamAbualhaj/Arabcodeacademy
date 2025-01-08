import { colors } from "@/styles/global-info";
import { Link } from "@chakra-ui/react";
import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode | string;
}
const LinkComponent: React.FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <Link
      color={colors.mainColor}
      textDecoration={"underline"}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
