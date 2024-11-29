import { Box,Flex } from "@chakra-ui/react";
import FooterButton from "./FooterButton";
import { Address } from "./Address";


export const RecorsesSection = () => {
    return (
      <Box marginBottom="20px" marginTop="90px" display="flex" flexDirection="column" alignItems={{base:"center",lg:"start"}}>
  <Address text="مصادر" color="white"/>
       <Flex wrap="wrap" 
        marginTop={{base:"35px",lg:"50px",md:"80px",sm:"35px"}}
       marginStart={{base:"0px",lg:"100px",md:"0px",sm:"0px"}}
       justifyContent="center"
         >
        {buttonText.map((item) => (
            <Box  width={{base:"51%",lg:"23%",md:"38%",sm:"51%"}}  key={item.id} marginBottom="10px">
          <FooterButton text={item.name}  />
          </Box>
        ))}
      </Flex>
      </Box>
      )}
      const buttonText = [
        { id: 1, name: "المدونة" },
        { id: 2, name: "المنتدى" },
        { id: 3, name: "قاموس الكلمات" },
        { id: 4, name: "دروس فيديو قصيرة" },
        { id: 5, name: "دليل أدوات الذكاء الإصطناعي" },
        { id: 6, name: "بنك الأسئلة التقنية" },
        { id: 7, name: "دروس وأنماط الميدجورني" },
        { id: 8, name: "لغة الضاد" },
      ];
      