/**
 * LinkComponent
 *
 * A reusable link component that extends the Chakra UI Link component. This component is designed
 * to provide a consistent styling for links across an application. It includes customizable
 * properties that allow for styling adjustments while maintaining a uniform appearance with the
 * use of the application's primary color and an underline decoration.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the LinkComponent.
 * @param {string} props.href - The URL that the link points to.
 * @param {React.ReactNode | string} props.children - The content inside the link, which can be either text or other React nodes.
 * @param {any} ...rest - Additional props that will be forwarded to the Chakra UI Link component, allowing for further customization such as event handlers, additional styles, or accessibility attributes.
 *
 * @example
 * <LinkComponent href="https://www.example.com">
 *   Visit Example
 * </LinkComponent>
 *
 * @returns {React.ReactElement}
 * Renders a text or inline element styled as a hyperlink, which navigates to the specified URL when clicked.
 * The link is visually distinguished by the application's main color and an underline, ensuring it stands out
 * as clickable to users.
 */


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
