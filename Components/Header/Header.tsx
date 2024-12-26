"use client"
import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomButton from "../CustomButton";
import Login from "@/public/icons/login.svg";
import LoginMoblie from "@/public/icons/loginMobile.svg";
import SignupMobile from "@/public/icons/signupMobile.svg";
import Profile from "@/public/icons/profile.svg";
import Bars from "@/public/icons/bars.svg";
import DropDown from "@/public/icons/dropdown.svg";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { colors } from "@/styles/global-info";
import Link from "next/link";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/Components/ui/menu";

const Header: React.FC = () => {
  const barsDropDown = [
    {
      key: 0,
      value: "تسجيل الدخول",
      link: "/",
      icon: LoginMoblie,
      dropDown: false,
    },
    {
      key: 1,
      value: "إنشاء حساب",
      link: "/",
      icon: SignupMobile,
      dropDown: false,
    },
    {
      key: 2,
      value: "المسارات التعليمية",
      link: "/",
      icon: false,
      dropDown: false,
    },
    {
      key: 3,
      value: "المصادر",
      link: "/",
      icon: DropDown,
      dropDown: true,
    },
    {
      key: 3,
      value: "التواصل",
      link: "/",
      icon: false,
      dropDown: false,
    },
  ];

  function setMenuState() {
    isOpenMenu(!openMenu);
  }

  const [openMenu, isOpenMenu] = useState(false);

  const [translate, setTranslate] = useState(false);
  return (
    <Box backgroundColor={colors.mainColor} position="relative">
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
            <Box>
              <Box
                onClick={() => {
                  setTranslate(!translate);
                }}
                asChild
              >
                <Bars width="25px" height="25px" />
              </Box>
              <Box
                display={translate ? "block" : "none"}
                position="absolute"
                zIndex="10"
                left="0px"
                top="90px"
                boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.25)"
                minW="200px"
                bgColor="white"
                paddingBottom="10px"
              >
                {barsDropDown.map((item, index, arr) =>
                  item.dropDown ? (
                    openMenu ? (
                      <Box
                        onClick={() => {
                          setMenuState();
                        }}
                        key={item.key}
                        cursor="pointer"
                        color={colors.mainColor}
                        display="flex"
                        justifyContent="center"
                        fontSize="20px"
                        backgroundColor="rgba(113, 52, 136, 0.08)"
                      >
                        <Flex flexDir="column">
                          <Box
                            borderRadius="7px"
                            gap={2}
                            display="flex"
                            padding="15px"
                            justifyContent="center"
                            _focus={{ outline: "none" }}
                            color="white"
                            backgroundColor={colors.mainColor}
                          >
                            {item.icon && <item.icon />}
                            <Box>{item.value}</Box>
                          </Box>

                          <ResourcesDropDown isMobile={true} />
                        </Flex>
                      </Box>
                    ) : (
                      <Box paddingInline="20px">
                        <Box
                          onClick={() => {
                            setMenuState();
                          }}
                          key={item.key}
                          cursor="pointer"
                          color={colors.mainColor}
                          display="flex"
                          justifyContent="center"
                          fontSize="20px"
                          backgroundColor="transparent"
                          borderBottom="1px solid #713488"
                        >
                          <Box
                            gap={2}
                            display="flex"
                            padding="15px"
                            justifyContent="center"
                            _focus={{ outline: "none" }}
                            color={colors.mainColor}
                          >
                            {item.icon && <item.icon />}
                            <Box>{item.value}</Box>
                          </Box>
                        </Box>
                      </Box>
                    )
                  ) : (
                    <Box paddingInline="20px">
                      <Box
                        key={item.key}
                        cursor="pointer"
                        borderBottom={
                          index === arr.length - 1
                            ? "none"
                            : "1px solid #713488"
                        }
                        color={colors.mainColor}
                        padding="15px"
                        display="flex"
                        justifyContent="center"
                        fontSize="20px"
                        backgroundColor="transparent"
                      >
                        <Box
                          gap={2}
                          display="flex"
                          
                          _focus={{ outline: "none" }}
                        >
                          {item.icon && <item.icon />}
                          <Link href="">{item.value}</Link>
                        </Box>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </Box>
          </Box>

          <Box display={{ lgDown: "none" }}>
            <Flex fontWeight={700} gap="25px">
              <Flex cursor="pointer" gap={1} alignItems="center">
                <ResourcesDropDown isMobile={false} />
              </Flex>
              <Box>
                <a href="">التواصل</a>
              </Box>
              <Link href="/aiTools">
              المسارات التعليمية
               </Link>
            </Flex>
          </Box>
          <Box display={{ lgDown: "none" }}>
            <Flex flexDirection={{ base: "column", xl: "row" }} gap="10px">
              <CustomButton
                text="إنشاء حساب"
                ButtonColor="green"
                sizeType="secondary"
                icon={<Profile width="25px" height="25px" />}
              ></CustomButton>
              <CustomButton
                text="تسجيل دخول"
                ButtonColor="orange"
                sizeType="secondary"
                icon={<Login width="25px" height="25px" />}
              ></CustomButton>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
interface porps {
  isMobile: boolean;
}
function ResourcesDropDown({ isMobile }: porps) {
  const dropdownItems = [
    {
      key: 0,
      value: "المدونة",
      link: "/blog",
    },
    {
      key: 1,
      value: "المنتدى",
      link: "/forum",
    },
    {
      key: 2,
      value: "قاموس الكلمات",
      link: "/dictionary",
    },
    {
      key: 3,
      value: "دروس فيديو قصيرة",
      link: "/short-videos",
    },
    {
      key: 4,
      value: "دليل أدوات الذكاء الاصطناعي",
      link: "/ai-tools-guide",
    },
    {
      key: 5,
      value: "بنك الأسئلة التقنية",
      link: "/tech-questions-bank",
    },
    {
      key: 6,
      value: "دروس وأنماط الميدجورني",
      link: "/midjourney-lessons",
    },
    {
      key: 7,
      value: "لغة ضاد",
      link: "/arabic-language",
    },
  ];

  return isMobile ? (
    <Box
      borderRadius="5px"
      boxShadow="1px 1px 4px 0px rgba(0, 0, 0, 0.25)"
      paddingInline="20px"
    >
      {dropdownItems.map((item, index, arr) => (
        <Box
          key={item.key}
          cursor="pointer"
          borderBottom={index === arr.length - 1 ? "none" : "1px solid #713488"}
          color={colors.mainColor}
          padding="15px"
          display="flex"
          justifyContent="center"
          backgroundColor="transparent"
          textAlign="center"
        >
          <Box _focus={{ outline: "none" }}>
            <Link href={item.link}>{item.value}</Link>
          </Box>
        </Box>
      ))}
    </Box>
  ) : (
    <MenuRoot>
      <MenuTrigger asChild>
        <Flex>
          المصادر
          <DropDown width="12px" height="12px" />
        </Flex>
      </MenuTrigger>
      <MenuContent
        boxShadow="box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25)"
        minW="200px"
        paddingInline="24px"
        bgColor="white"
        paddingBottom="20px"
      >
        {dropdownItems.map((item) => (
          <MenuItem
            key={item.key}
            cursor="pointer"
            borderBottom="1px solid #713488"
            color={colors.mainColor}
            padding="15px"
            display="flex"
            justifyContent="center"
            fontSize="20px"
            value="rename"
            backgroundColor="transparent"
          >
            <Box _focus={{ outline: "none" }}>
              <Link href={item.link}>{item.value}</Link>
            </Box>
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}
export default Header;
