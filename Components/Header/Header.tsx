import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../CustomButton";
import Login from "@/public/icons/login.svg";
import Profile from "@/public/icons/profile.svg";
import Bars from "@/public/icons/bars.svg";
import DropDown from "@/public/icons/dropdown.svg";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { colors } from "@/styles/global-info";
const Header: React.FC = () => {
  return (
    <Box backgroundColor={colors.mainColor}>
      <Box
        marginInline="auto"
        maxW="1650px"
        paddingInline="20px"
        paddingY="10px"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Image width={320} src={logo} alt="Logo image" />
          </Box>

          <Box cursor="pointer" display={{ base: "none", lgDown: "block" }}>
            <Bars width="25px" height="25px" />
          </Box>
          <Box display={{ lgDown: "none" }}>
            <Flex fontWeight={700} gap="25px">
              <Flex cursor="pointer" gap={1} alignItems="center">
                <DropDown width="12px" height="12px" />
                <div>المصادر</div>
              </Flex>
              <Box>
                <a href="">التواصل</a>
              </Box>
              <Box>
                <a href="">المسارات التعليمية</a>
              </Box>
            </Flex>
          </Box>
          <Box display={{ lgDown: "none" }}>
            <Flex flexDirection={{ base: "column", xl: "row" }} gap="10px">
              <CustomButton
                paddingInline={20}
                text="إنشاء حساب"
                ButtonColor="green"
                sizeType="thirdly"
                icon={<Profile width="25px" height="25px" />}
              ></CustomButton>
              <CustomButton
                paddingInline={20}
                text="تسجيل دخول"
                ButtonColor="orange"
                sizeType="thirdly"
                icon={<Login width="25px" height="25px" />}
              ></CustomButton>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
