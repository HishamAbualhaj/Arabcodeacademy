"use client";
import { AbsoluteCenter, Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { colors } from "@/styles/global-info";
import User from "@/public/icons/user_profile.svg";
import UserEdit from "@/public/icons/user-edit.svg";
import Person from "@/public/icons/user.svg";
import Gps from "@/public/icons/location.svg";
import Link from "@/public/icons/link.svg";
import Facebook from "@/public/icons/facebook-square.svg";
import Github from "@/public/icons/github.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import Chalkboard from "@/public/icons/Chalkboard_Teacher.svg";
import Chalkboard_active from "@/public/icons/chalkboard-teacher_active.svg";
import Check from "@/public/icons/check-circle.svg";
import CheckDouble from "@/public/icons/check-double.svg";
import ArrowUp from "@/public/icons/arrow-up.svg";
import Detalis from "@/public/icons/details.svg";
import { shadowEffectMobile } from "@/styles/global-info";
const Profile: React.FC = () => {
  const profileData = [
    {
      key: 1,
      text: "Mahmudmu99",
      icon: false,
      fontWeight: "bold",
      fontSize: "20px",
    },
    {
      key: 2,
      text: "Mahmoud mustafa",
      icon: <Person />,
      fontWeight: "normal",
      fontSize: "normal",
    },
    {
      key: 3,
      text: "مصر",
      icon: <Gps />,
      fontWeight: "normal",
      fontSize: "normal",
    },
  ];
  const links = [
    {
      key: 1,
      text: "https://www.google.com",
      icon: <LinkedIn width="20px" height="20px" />,
    },
    {
      key: 2,
      text: "MahmoudAwad",
      icon: <Facebook width="20px" height="20px" />,
    },
    {
      key: 3,
      text: "MahmoudAwad",
      icon: <Github width="20px" height="20px" />,
    },
  ];
  const courses = [
    {
      key: 1,
      title: "مقدمة لمحرك الألعاب اليونيتي",
      completed: "0%",
      steps: "0/0",
    },
    {
      key: 2,
      title: "تعلم الجت لإدارة البرمجيات من البداية للإحتراف ",
      completed: "50%",
      steps: "0/0",
    },
    {
      key: 3,
      title: "أساسيات Html و Css",
      completed: "20%",
      steps: "0/0",
    },
    {
      key: 4,
      title: "مقدمة للبرمجة باستخدام لغة الجافا سكربت java script",
      completed: "2%",
      steps: "0/0",
    },
  ];
  const [popup, setPopup] = useState(false);
  return (
    <Box
      color={colors.mainColor}
      fontWeight="bold"
      marginInline="auto"
      paddingY="100px"
      maxW="992px"
      paddingX="30px"
    >
      <Box
        boxShadow={shadowEffectMobile}
        border={`1px solid ${colors.mainColor}`}
        borderRadius="5px"
      >
        <Box>
          <Box padding="30px">
            <Flex
              gap={{ base: "20px", lg: "0px" }}
              flexDirection={{ base: "column", lg: "row" }}
              justifyContent="space-between"
            >
              <Flex
                alignItems={{ base: "center", lg: "flex-start" }}
                flexDirection={{ base: "column", lg: "row" }}
                gap="20px"
                marginRight={{ base: "0px", lg: '"50px"' }}
              >
                <User width="200px" height="200px" />
                <Box>
                  <Flex
                    alignItems={{ base: "center", lg: "flex-start" }}
                    flexDirection="column"
                    gap="3px"
                  >
                    {profileData.map((data) => (
                      <>
                        <Flex alignItems="center" gap="5px">
                          {data.icon}
                          <Box
                            fontSize={data.fontSize}
                            fontWeight={data.fontWeight}
                          >
                            {data.text}
                          </Box>
                        </Flex>
                      </>
                    ))}
                  </Flex>
                  <Flex
                    alignItems={{ base: "center", lg: "flex-start" }}
                    marginTop="15px"
                    flexDirection="column"
                    gap="5px"
                  >
                    <Flex alignItems="center" gap="5px">
                      <Link />
                      <Box fontWeight="normal">الروابط: </Box>
                    </Flex>
                    {links.map((data) => (
                      <>
                        <Flex alignItems="center" gap="5px">
                          <Box>{data.text}</Box>
                          {data.icon}
                        </Flex>
                      </>
                    ))}
                  </Flex>
                </Box>
              </Flex>
              <CustomButton
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                px="20px"
                py="10px"
                alignSelf={{ base: "center", lg: "flex-end" }}
                fontSize="17px"
                text="تعديل"
                ButtonColor="green"
                sizeType="secondary"
                icon={<UserEdit width="25px" height="25px" />}
              ></CustomButton>
            </Flex>
          </Box>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <Flex
            borderTop={`1px solid ${colors.mainColor}`}
            justifyContent="center"
          >
            <Flex
              cursor="pointer"
              padding="10px 35px"
              bgColor={colors.mainColor}
              color="white"
              alignItems="center"
              flexDirection="column"
            >
              <Flex alignItems="center" gap="5px">
                <Chalkboard width="20px" height="20px" />
                <Box fontSize="18px">المساقات</Box>
              </Flex>
              <Box>12</Box>
            </Flex>
            <Flex
              cursor="pointer"
              padding="10px 35px"
              alignItems="center"
              flexDirection="column"
            >
              <Flex alignItems="center" gap="5px">
                <Check width="20px" height="20px" />
                <Box fontSize="18px">مكتملة</Box>
              </Flex>
              <Box>2</Box>
            </Flex>
          </Flex>
        </Box>
        {/* mobile screen for details */}
        <Box position="relative" display={{ base: "block", md: "none" }}>
          <Flex py="15px" alignItems="center" gap="5px" justifyContent="center">
            <Box>التفاصيل</Box>
            <Box
              onClick={() => {
                setPopup(!popup);
              }}
              cursor="pointer"
            >
              <Detalis width="20px" height="20px" />
            </Box>
          </Flex>
          {popup && (
            <AbsoluteCenter>
              <Box
                top="15px"
                width="200px"
                bgColor="white"
                boxShadow={shadowEffectMobile}
                position="absolute"
                padding="18px 25px"
              >
                <Flex flexDirection="column" gap="10px">
                  <Flex width="100%" justifyContent="space-between">
                    <Flex alignItems="center" gap="5px">
                      <Chalkboard_active width="20px" height="20px" />
                      <Box fontSize="16px">المساقات</Box>
                    </Flex>
                    <Box>12</Box>
                  </Flex>

                  <Flex width="100%" justifyContent="space-between">
                    <Flex alignItems="center" gap="5px">
                      <Check width="15px" height="15px" />
                      <Box fontSize="16px">مكتملة</Box>
                    </Flex>
                    <Box>2</Box>
                  </Flex>
                </Flex>
              </Box>
            </AbsoluteCenter>
          )}
        </Box>
      </Box>

      <Box
        boxShadow={shadowEffectMobile}
        marginTop="35px"
        borderRadius="5px"
        border={`1px solid ${colors.mainColor}`}
        padding="20px 25px 50px 25px"
      >
        <Box maxW="772px" marginInline="auto">
          <Flex flexDirection="column" alignItems="center" gap="45px">
            <Box fontSize="18px">المساقات الخاصة بك</Box>
            {courses.map((course) => (
              <Box
                key={course.key}
                padding="22px"
                boxShadow={shadowEffectMobile}
                borderRadius="5px"
                flex="1"
                width="100%"
              >
                <Box>
                  <Flex
                    flexDirection={{ base: "column", sm: "row" }}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box
                      display={{ base: "flex", sm: "block" }}
                      flexDirection={{ base: "column", sm: "row" }}
                      gap={{ base: "15px", sm: "0px" }}
                      alignItems="center"
                    >
                      <Box>{course.title}</Box>
                      <Flex
                        display={{ base: "flex", sm: "none" }}
                        alignItems="center"
                        gap="10px"
                      >
                        <CustomButton
                          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                          px="20px"
                          py="10px"
                          alignSelf="flex-end"
                          fontSize="17px"
                          text="استئناف"
                          ButtonColor="orange"
                          sizeType="thirdly"
                          icon={<CheckDouble />}
                        ></CustomButton>
                        <Box
                          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                          cursor="pointer"
                          bgColor={colors.green}
                          borderRadius="100%"
                          padding="10px"
                        >
                          <ArrowUp />
                        </Box>
                      </Flex>
                      <Flex gap="5px">
                        <Box>{`Completed ${course.completed}`}</Box>
                        <Box>{`steps ${course.steps}`}</Box>
                      </Flex>
                    </Box>
                    <Flex
                      display={{ base: "none", sm: "flex" }}
                      alignItems="center"
                      gap="10px"
                    >
                      <CustomButton
                        boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                        px="20px"
                        py="10px"
                        alignSelf="flex-end"
                        fontSize="17px"
                        text="استئناف"
                        ButtonColor="orange"
                        sizeType="thirdly"
                        icon={<CheckDouble />}
                      ></CustomButton>
                      <Box
                        boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                        cursor="pointer"
                        bgColor={colors.green}
                        borderRadius="100%"
                        padding="10px"
                      >
                        <ArrowUp />
                      </Box>
                    </Flex>
                  </Flex>

                  <Box
                    marginTop="15px"
                    border={`1px solid ${colors.mainColor}`}
                    borderRadius="10px"
                    width="100%"
                    height="10px"
                  >
                    {/* you can control the progress bar precentage by setting completed proprety */}
                    <Box
                      borderRadius="10px"
                      width={course.completed}
                      height="100%"
                      bgColor="black"
                    ></Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
