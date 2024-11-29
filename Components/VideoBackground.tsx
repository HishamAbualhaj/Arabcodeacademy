import { Box } from "@chakra-ui/react";
import React from "react";

interface VideoBackgroundProps {
  children: React.ReactNode;
  videoSrc: string;
}
const VideoBackground: React.FC<VideoBackgroundProps> = ({ children, videoSrc }) => {
  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "533px", lg: "801px", "2xl": "1068px" }}
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        overflow="hidden"
        zIndex={0}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={videoSrc}
        />
      </Box>
      {children}
    </Box>
  );
};

export default VideoBackground;
