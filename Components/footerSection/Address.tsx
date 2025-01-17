/**
 * Address Component
 *
 * A reusable component that displays textual content with specific styling attributes. It is
 * primarily used for headings or labels that require a distinctive appearance, such as an
 * underlined address or section title. The component accepts a color and text content as props,
 * dynamically applying style based on the provided color.
 *
 * @component
 * 
 * @param {Object} props - The properties for the Address component.
 * @param {'white' | 'purple'} props.color - Determines the color of the text and the underline.
 * @param {string} props.text - The text content to be displayed within the component.
 *
 * @example
 * <Address color="purple" text="Head Office: London, UK" />
 *
 * @returns {React.ReactElement}
 * Renders a styled text component using the Prose component, which applies a bottom border,
 * custom padding, and font size adjustments responsive to the device's screen size.
 */

import { Prose } from "../ui/prose";

interface Props {
  color: "white" | "purple";
  text: string;
}
const colors = {
  purple: "#713488",
  white: "#ffffff",
};
export const Address: React.FC<Props> = ({ color, text }) => {
  return (
    <>
      <Prose
        borderBottom={`1px solid ${colors[color]}`}
        fontSize={{ base: "13px", lg: "20px", md: "22px", sm: "13px" }}
        color={colors[color]}
        paddingBottom={{ base: "16px", lg: "12px", md: "10px", sm: "16px" }}
        paddingEnd={{ base: "10px", lg: "20px", md: "20px", sm: "10px" }}
        width="max-content"
      >
        {text}
      </Prose>
    </>
  );
};
