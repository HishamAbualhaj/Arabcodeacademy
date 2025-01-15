import { Box, Flex, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Signup: React.FC = () => {
  let passwordRlues = null;
  useEffect(() => {
    passwordRlues = [
      {
        rlue: "* Password should be 8 character",
        value: false,
        condition: (password: string) => password.length > 8,
      },
      {
        rlue: "* Password should contain special characters",
        value: false,
        condition: (password: string) => () => {},
      },
      {
        rlue: "* Password should have at least one capital letter",
        value: false,
        condition: (password: string) => () => {},
      },
      {
        rlue: "* Password should have at least one number",
        value: false,
        condition: (password: string) => () => {},
      },
    ];
  }, []);
  const [data, setData] = useState();
  return (
    <>
      <Box dir="ltr" color="black" maxW="1500px" mx="auto" py="50px">
        <Box fontWeight="bold" fontSize="22px">
          Password :
        </Box>
        <Input
          // onChange={handlePasswordInput}
          type="password"
          marginTop="7px"
          placeholder=" ... "
          color="black"
          pl="10px"
          fontSize="20px"
        ></Input>
        <Box
          backgroundColor="#eee"
          marginTop="10px"
          borderRadius="5px"
          height="5px"
          width="100%"
        >
          <Box
            backgroundColor="red"
            borderRadius="5px"
            height="5px"
            width={`0%`}
          ></Box>
        </Box>
        <Flex
          color="red"
          marginTop="10px"
          gap="10px"
          flexDirection="column"
          fontSize="18px"
        ></Flex>
      </Box>
    </>
  );
};

export default Signup;
