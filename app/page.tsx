import React from "react";
import {Promo} from "../components/Promo";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Contact } from "@/components/Contact";
import DiscountBanner from "@/components/DiscountBanner";

export default function Home() {
  return (
    <>
      <DiscountBanner announcementText={"cksndjkdsncjkdsnc"} />
      {/* <Flex
        justifyContent={"center"}
        height={"1000px"}
        alignItems={"center"}
        bg={"black"}
      >
        <Promo
          isNotFullVisible
          width={["100%", "791px", "40%"]}
          height={["100%", "591px", "40%"]}
        >
          <p>Title</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nam?
            Debitis non quo repellat ex praesentium omnis cumque ducimus
            corrupti nobis! Sunt provident animi beatae impedit fugiat itaque ea
            veniam.
          </p>
          <br />
          <br />
          <Button
            borderColor={"red"}
            bg={"white"}
            color={"black"}
            width={"90px"}
          >
            Button{" "}
          </Button>
        </Promo>
      </Flex> */}
      <Contact/>
    </>
  );
}
