import { Box, DataListItem, DataListRoot, Flex } from "@chakra-ui/react";
import { Address } from "../Address";
import CustomButton from "@/Components/CustomButton/CustomButton";
import Chalkboard from "@/public/icons/Chalkboard_Teacher.svg";
export const CardOne = () => {
  return (
    <>
      <Flex
        height="100%"
        alignItems={{ xlDown: "center" }}
        justifyContent="space-between"
        flexDirection="column"
        borderRadius="5px"
        color="#fff"
        marginTop="3%"
      >
        <Flex>
          <Box>
            <Address text="معلومات" color="white" />
            <DataListRoot marginTop="35px" width="max-content">
              <DataListItem fontSize="17px" paddingBottom="10px">
                المساعدة والدعم
              </DataListItem>
              <DataListItem fontSize="17px" paddingBottom="10px">
                حول الأكاديمية
              </DataListItem>
              <DataListItem fontSize="17px" paddingBottom="10px">
                رسالة الأكاديمية
              </DataListItem>
            </DataListRoot>
          </Box>
          <Box
            marginStart={{ base: "38px", lg: "100px", md: "60px", sm: "38px" }}
          >
            <Address text="سياسات" color="white" />
            <DataListRoot marginTop="35px" width="max-content">
              <DataListItem fontSize="17px" paddingBottom="10px">
                سياسة الاستخدام
              </DataListItem>
              <DataListItem fontSize="17px" paddingBottom="10px">
                سياسة الخصوصية
              </DataListItem>
              <DataListItem fontSize="17px" paddingBottom="10px">
                إخلاء مسؤولية
              </DataListItem>
            </DataListRoot>
          </Box>
        </Flex>
        <CustomButton
          marginTop={{ base: "25px", xl: "0px" }}
          width="fit-content"
          text={"المسارات التعليمية"}
          icon={<Chalkboard width="25px" height="25px"></Chalkboard>}
          ButtonColor={"green"}
          sizeType={"primary"}
        ></CustomButton>
      </Flex>
    </>
  );
};
