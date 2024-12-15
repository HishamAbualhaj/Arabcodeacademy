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
